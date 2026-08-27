import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import MatrixRain from './MatrixRain';
import mount from './assets/images/mount.png';
import golf from './assets/images/MaciejMiniGolf.png';
import webxr from './assets/images/webXR.png';
import world from './assets/images/world.png';

const Home = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavigation = () => {
    navigate('/contact');
  };

  const fontStyle = {
    fontFamily: "'x-font', sans-serif",
    color: 'white',
    textTransform: 'uppercase',
    margin: 0,
    fontStyle: 'italic',
    lineHeight: '0.9',
    textShadow: '0 0 15px rgba(0,255,0,0.5)'
  };

  // 🔥 osobne grafiki — możesz zmieniać pojedynczo
  const images = {
    game: mount,
    unity: golf,
    vr: webxr,
    map: world
  };

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: '#000',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }}>

      {/* --- HEADER --- */}
      <header style={{
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        borderBottom: '1px solid #333',
        backgroundColor: '#000',
        zIndex: 50
      }}>
        {/* LEWA STRONA — KONTAKT z neonowym outlinem */}
        <button
          onClick={handleNavigation}
          style={{
            background: 'none',
            border: '2px solid #00ff00',
            padding: '6px 14px',
            cursor: 'pointer',
            ...fontStyle,
            fontSize: '1.2rem',
            letterSpacing: '5px',
            borderRadius: '4px',
            boxShadow: '0 0 10px #00ff00'
          }}
        >
          CONTACT
        </button>

        {/* PRAWA STRONA — HOME.JSX */}
        <div style={{
          ...fontStyle,
          fontSize: '1.2rem',
          cursor: 'default'
        }}>
          HOME.JSX
        </div>
      </header>

      {/* --- MAIN PANELS --- */}
      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        overflow: 'hidden'
      }}>

        {/* PANEL 1 — GAME */}
        <Link to="/game" style={{
          position: 'relative',
          flex: isMobile ? '1' : '0 0 25%',
          textDecoration: 'none',
          overflow: 'hidden',
          borderRight: !isMobile ? '2px solid #00ff000b' : 'none',
          borderBottom: isMobile ? '2px solid #00ff00' : 'none'
        }}>
          <motion.div whileHover={{ scale: 1.02 }} style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${images.game})`,
              // backgroundImage: `{images.game}`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: isMobile ? 'none' : 'skewX(-5deg) translateX(-10%)',
              filter: 'grayscale(1) brightness(0.4)',
              transition: '0.3s'
            }} className="panel-bg" />
            <h1 style={{ ...fontStyle, fontSize: isMobile ? '3rem' : '4rem', zIndex: 11 }}>
              GAME<br />R3F
            </h1>
          </motion.div>
        </Link>

        {/* PANEL 2 — UNITY */}
        <Link to="/unity" style={{
          position: 'relative',
          flex: isMobile ? '1' : '0 0 25%',
          textDecoration: 'none',
          overflow: 'hidden',
          borderRight: !isMobile ? '2px solid #00ff0003' : 'none',
          borderLeft: !isMobile ? '2px solid #00ff0001' : 'none',
          borderBottom: isMobile ? '2px solid #00ff00' : 'none'
        }}>
          <motion.div whileHover={{ scale: 1.02 }} style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${images.unity})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: isMobile ? 'none' : 'skewX(5deg) translateX(10%)',
              filter: 'grayscale(1) brightness(0.4)',
              transition: '0.3s'
            }} className="panel-bg" />
            <h1 style={{ ...fontStyle, fontSize: isMobile ? '3rem' : '4rem', zIndex: 11 }}>
              UNITY<br />WEBGL
            </h1>
          </motion.div>
        </Link>

        {/* PANEL 3 — VR */}
        <Link to="/vr" style={{
          position: 'relative',
          flex: isMobile ? '1' : '0 0 25%',
          textDecoration: 'none',
          overflow: 'hidden',
          borderRight: !isMobile ? '2px solid #00ff0000' : 'none',
          borderLeft: !isMobile ? '2px solid #00ff000e' : 'none',
          borderBottom: isMobile ? '2px solid #00ff0011' : 'none'
        }}>
          <motion.div whileHover={{ scale: 1.02 }} style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${images.vr})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: isMobile ? 'none' : 'skewX(-5deg) translateX(-10%)',
              filter: 'grayscale(1) brightness(0.4)',
              transition: '0.3s'
            }} className="panel-bg" />
            <h1 style={{ ...fontStyle, fontSize: isMobile ? '3rem' : '4rem', zIndex: 11 }}>
              VR<br />OCULUS
            </h1>
          </motion.div>
        </Link>

        {/* PANEL 4 — MAP */}
        <Link to="/map" style={{
          position: 'relative',
          flex: isMobile ? '1' : '0 0 25%',
          textDecoration: 'none',
          overflow: 'hidden',
          borderLeft: !isMobile ? '2px solid #00ff0000' : 'none'
        }}>
          <motion.div whileHover={{ scale: 1.02 }} style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${images.map})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: isMobile ? 'none' : 'skewX(5deg) translateX(10%)',
              filter: 'grayscale(1) brightness(0.4)',
              transition: '0.3s'
            }} className="panel-bg" />
            <h1 style={{ ...fontStyle, fontSize: isMobile ? '3rem' : '4rem', zIndex: 11 }}>
              MAP<br />CESIUM
            </h1>
          </motion.div>
        </Link>

      </main>

      {/* --- FOOTER --- */}
      <footer style={{
        height: isMobile ? '80px' : '100px',
        position: 'relative',
        borderTop: '1px solid #ff0000',
        backgroundColor: '#000',
        zIndex: 50
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.3 }}>
          <MatrixRain />
        </div>
      </footer>


      {/* --- HOVER EFFECT --- */}
      <style>{`
        a:hover .panel-bg {
          filter: grayscale(0) brightness(0.7) !important;
          transform: scale(1.1) ${isMobile ? '' : 'skewX(0deg)'} !important;
        }
      `}</style>

    </div>
  );
};

export default Home;
