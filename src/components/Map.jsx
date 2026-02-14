import React from 'react';
import { motion } from 'framer-motion';
import { Viewer, Entity } from "resium";
import { Cartesian3 } from "cesium";

const MapScene = () => {
  return (
    <motion.div 
      className="map-container"
      layoutId="map-tile" // Ważne: ten sam layoutId co w kafelku na Home
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
    <div className="h-screen w-full">
      <Viewer full timeline={false} animation={false} baseLayerPicker={false}>
        <Entity
          name="My code base :)"
          position={Cartesian3.fromDegrees(22.01, 50.04)} // Okolice Rzeszowa
          point={{ pixelSize: 15, color: "blue" }}
          description="R3F Projects are built here!"
        />
      </Viewer>
    </div>
    </motion.div>
  );

};

export default MapScene;