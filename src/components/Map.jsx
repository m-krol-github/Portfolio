import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Viewer, Entity, ImageryLayer, ScreenSpaceEventHandler, ScreenSpaceEvent } from "resium";
import {
  Cartesian3,
  Color,
  LabelStyle,
  VerticalOrigin,
  Cartesian2,
  Math as CesiumMath,
  EasingFunction,
  ArcGisMapServerImageryProvider,
  OpenStreetMapImageryProvider,
  ScreenSpaceEventType,
  Ion
} from "cesium";

import locationsData from '../assets/data/locations.json';
import pinImg from '../assets/pin.png';

const MapScene = () => {
  const navigate = useNavigate();
  const viewerRef = useRef(null);

  const [hoveredId, setHoveredId] = useState(null);
  const [mapStyle, setMapStyle] = useState('satellite');

  const [topoProvider, setTopoProvider] = useState(null);
  const [osmProvider, setOsmProvider] = useState(null);
  const [satelliteProvider, setSatelliteProvider] = useState(null);

  const [isRotating, setIsRotating] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const isPortrait = window.innerHeight > window.innerWidth;
  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  // LOAD PROVIDERS
  useEffect(() => {
    Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwODUzNGE2NC0xYTlkLTRmMTMtYWY1MS05MDU5MTFmYzY4YmMiLCJpZCI6MjYwNDEyLCJpYXQiOjE3MzM0Mjk4MzV9.cTs6ZaNFG04EXAA5qXz1A61V3zHhbMjE1jCVGKXXBF8";

    setOsmProvider(new OpenStreetMapImageryProvider({ url: "https://tile.openstreetmap.org/" }));

    ArcGisMapServerImageryProvider.fromUrl(
      "https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer"
    ).then(setTopoProvider);

    ArcGisMapServerImageryProvider.fromUrl(
      "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"
    ).then(setSatelliteProvider);
  }, []);

  // VIEWER CONFIG – MOBILE SAFE + ANIMATED START
  useEffect(() => {
    if (viewerRef.current?.cesiumElement) {
      const viewer = viewerRef.current.cesiumElement;

      viewer.scene.useBrowserRecommendedResolution = true;
      viewer.scene.fog.enabled = false;
      viewer.scene.globe.depthTestAgainstTerrain = true;

      viewer.scene.screenSpaceCameraController.minimumZoomDistance = 500;
      viewer.scene.screenSpaceCameraController.maximumZoomDistance = isMobile ? 3000000 : 20000000;

      // 1) START — blisko, żeby imagery się załadowało
      viewer.camera.setView({
        destination: Cartesian3.fromDegrees(0, 0, isMobile ? 800000 : 15000000),
        orientation: {
          heading: 0,
          pitch: CesiumMath.toRadians(-90),
          roll: 0
        }
      });

      // 2) ANIMOWANE ODDALENIE — po 1 sekundzie
      setTimeout(() => {
        viewer.camera.flyTo({
          destination: Cartesian3.fromDegrees(0, 0, isMobile ? 1500000 : 15000000),
          duration: 2.5,
          easingFunction: EasingFunction.QUADRATIC_IN_OUT
        });
      }, 1000);
    }
  }, [isMobile]);

  // AUTO ROTATION
  useEffect(() => {
    let removeListener;
    const startRotation = () => {
      if (viewerRef.current?.cesiumElement) {
        const viewer = viewerRef.current.cesiumElement;
        removeListener = viewer.scene.preRender.addEventListener(() => {
          if (isRotating) {
            viewer.camera.rotate(Cartesian3.UNIT_Z, 0.0015);
          }
        });
      }
    };
    const timeout = setTimeout(startRotation, 1000);
    return () => {
      clearTimeout(timeout);
      if (removeListener) removeListener();
    };
  }, [isRotating]);

  // FLY TO LOCATION
  const handleFlyTo = (lng, lat) => {
    if (viewerRef.current?.cesiumElement) {
      setIsRotating(false);
      const viewer = viewerRef.current.cesiumElement;

      viewer.camera.flyTo({
        destination: Cartesian3.fromDegrees(lng, lat, isMobile ? 250000 : 450000),
        orientation: {
          heading: CesiumMath.toRadians(0),
          pitch: CesiumMath.toRadians(-90),
          roll: 0
        },
        duration: 2.5,
        easingFunction: EasingFunction.QUADRATIC_IN_OUT
      });
    }
  };

  // HOVER
  const handleMouseMove = (movement) => {
    const scene = viewerRef.current?.cesiumElement?.scene;
    if (!scene) return;
    const pickedObject = scene.pick(movement.endPosition);
    if (pickedObject?.id) {
      setHoveredId(pickedObject.id.id);
    } else {
      setHoveredId(null);
    }
  };

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden', backgroundColor: 'black' }}>

      {/* MENU ICON MOBILE */}
      {isPortrait && !menuOpen && (
        <motion.div
          onClick={() => setMenuOpen(true)}
          whileTap={{ scale: 0.9 }}
          style={{
            position: 'fixed',
            top: '20px',
            left: '20px',
            width: '55px',
            height: '55px',
            background: 'rgba(0,0,0,0.6)',
            border: '2px solid #00ff00',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#00ff00',
            fontSize: '2.2rem',
            zIndex: 999,
            cursor: 'pointer'
          }}
        >
          ≡
        </motion.div>
      )}

      {/* SIDEBAR */}
      <motion.div
        initial={{ x: isPortrait ? -320 : 0 }}
        animate={{ x: isPortrait ? (menuOpen ? 0 : -320) : 0 }}
        transition={{ duration: 0.25 }}
        style={{
          position: isPortrait ? 'fixed' : 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '320px',
          zIndex: 100,
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(15px)',
          borderRight: '1px solid #00ff00',
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'Bebas Neue, sans-serif',
          color: 'white'
        }}
      >

        {/* BACK */}
        <button
          onClick={() => navigate('/')}
          style={{
            width: '100%',
            padding: '20px',
            backgroundColor: 'transparent',
            border: 'none',
            borderBottom: '1px solid rgba(0, 255, 0, 0.5)',
            color: '#888',
            fontSize: '1.2rem',
            cursor: 'pointer',
            textAlign: 'left',
            fontFamily: 'Bebas Neue'
          }}
        >
          [ ESC ] BACK TO HUB
        </button>

        {/* TITLE */}
        <div style={{ padding: '30px', borderBottom: '1px solid #00ff0033' }}>
          <h2 style={{ color: '#00ff00', fontSize: '24px', margin: 0 }}>PLACES OF WORK</h2>
          <div style={{ fontSize: '10px', color: '#00ff00', opacity: 0.5, marginTop: '5px' }}>
            {isRotating ? "SCANNING MODE: ACTIVE" : "STATIONARY: LOCKED"}
          </div>
        </div>

        {/* CLOSE */}
        <div
          style={{
            padding: '20px',
            fontSize: '24px',
            cursor: 'pointer',
            color: '#ff0000'
          }}
          onClick={() => setMenuOpen(false)}
        >
          Close Menu
        </div>

        {/* LOCATIONS LIST */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '10px' }}>
          {locationsData?.map((loc) => (
            <div
              key={loc.id}
              onClick={() => handleFlyTo(loc.lng, loc.lat)}
              onMouseEnter={() => setHoveredId(loc.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                cursor: 'pointer',
                padding: '15px',
                borderBottom: '1px solid #ffffff11',
                color: hoveredId === loc.id ? '#00ff00' : 'white',
                backgroundColor: hoveredId === loc.id ? '#00ff0011' : 'transparent',
                transition: '0.2s'
              }}
            >
              <div style={{ fontSize: '18px' }}>{(loc.name || "").toUpperCase()}</div>
              <div style={{ fontSize: '11px', color: '#00ff00', opacity: 0.8 }}>{loc.comment || ""}</div>
            </div>
          ))}
        </div>

        {/* RESET GLOBE */}
        <button
          onClick={() => {
            setIsRotating(true);
            if (viewerRef.current?.cesiumElement) {
              viewerRef.current.cesiumElement.camera.flyTo({
                destination: Cartesian3.fromDegrees(0, 0, isMobile ? 1500000 : 15000000),
                duration: 2.0,
                easingFunction: EasingFunction.QUADRATIC_IN_OUT
              });
            }
          }}
          style={{
            width: 'calc(100% - 20px)',
            margin: '10px',
            padding: '12px',
            backgroundColor: 'rgba(0, 255, 0, 0.05)',
            border: '1px dashed #00ff00',
            color: '#00ff00',
            fontFamily: 'Bebas Neue',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          ↺ RESET VIEW // BACK TO GLOBE
        </button>

        {/* MAP STYLE SWITCH */}
        <div style={{ padding: '15px', display: 'flex', gap: '5px', backgroundColor: 'rgba(0,0,0,0.3)' }}>
          {['satellite', 'topo', 'osm'].map(style => (
            <button
              key={style}
              onClick={() => setMapStyle(style)}
              style={{
                flex: 1,
                padding: '10px',
                cursor: 'pointer',
                fontFamily: 'Bebas Neue',
                backgroundColor: mapStyle === style ? '#00ff00' : 'black',
                color: mapStyle === style ? 'black' : 'white',
                border: '1px solid #00ff00'
              }}
            >
              {style.toUpperCase()}
            </button>
          ))}
        </div>

      </motion.div>

      {/* CESIUM VIEWER */}
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
        <Viewer
          full
          timeline={false}
          animation={false}
          baseLayerPicker={false}
          baseLayer={false}
          requestRenderMode={true}
          maximumRenderTimeChange={Infinity}
          ref={viewerRef}
          selectionIndicator={false}
          infoBox={false}
          style={{ width: '100%', height: '100%' }}
        >

          <ScreenSpaceEventHandler>
            <ScreenSpaceEvent action={handleMouseMove} type={ScreenSpaceEventType.MOUSE_MOVE} />
          </ScreenSpaceEventHandler>

          {/* IMAGERY */}
          {mapStyle === 'satellite' && satelliteProvider && (
            <ImageryLayer
              imageryProvider={satelliteProvider}
              brightness={1.6}
              contrast={1.2}
              gamma={0.8}
              minimumTerrainLevel={1}
              maximumTerrainLevel={18}
            />
          )}

          {mapStyle === 'topo' && topoProvider && (
            <ImageryLayer
              imageryProvider={topoProvider}
              brightness={1.6}
              contrast={1.2}
              gamma={0.8}
              minimumTerrainLevel={1}
              maximumTerrainLevel={18}
            />
          )}

          {mapStyle === 'osm' && osmProvider && (
            <ImageryLayer
              imageryProvider={osmProvider}
              brightness={1.6}
              contrast={1.2}
              gamma={0.8}
              minimumTerrainLevel={1}
              maximumTerrainLevel={18}
            />
          )}

          {/* PINS */}
          {locationsData?.map((loc) => {
            const isHovered = hoveredId === loc.id;
            const labelText = (loc.name || "").toUpperCase() + "\n" + (loc.comment || "");

            return (
              <Entity
                key={loc.id}
                id={loc.id}
                position={Cartesian3.fromDegrees(loc.lng, loc.lat)}
                onClick={() => {
                  handleFlyTo(loc.lng, loc.lat);
                  setMenuOpen(false);
                }}
                billboard={{
                  image: pinImg,
                  width: isHovered ? 45 : 30,
                  height: isHovered ? 45 : 30,
                  verticalOrigin: VerticalOrigin.BOTTOM
                }}
                label={{
                  text: labelText,
                  font: isHovered ? '16px Bebas Neue' : '12px Bebas Neue',
                  fillColor: Color.WHITE,
                  outlineColor: Color.BLACK,
                  outlineWidth: 3,
                  style: LabelStyle.FILL_AND_OUTLINE,
                  verticalOrigin: VerticalOrigin.BOTTOM,
                  pixelOffset: new Cartesian2(0, isHovered ? -60 : -45),
                  showBackground: true,
                  backgroundColor: isHovered ? Color.LIME.withAlpha(0.5) : Color.BLACK.withAlpha(0.7),
                  backgroundPadding: new Cartesian2(10, 8)
                }}
              />
            );
          })}

        </Viewer>
      </div>

    </div>
  );
};

export default MapScene;
