import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import MatrixRain from './MatrixRain';
import backImg2 from './assets/corusant.jpg';
import world4K from './assets/world4K.png';
import mount4K from './assets/mount4K.png';

const Home = () => {
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  const handleNavigation = (path) => {
    setIsExiting(true);
    setTimeout(() => {
      if (path === 'contact') {
        navigate('/contact');
      }
    }, 1200);
  };

  const fontStyle = {
    fontFamily: "'x-font', sans-serif",
    color: 'white',
    textTransform: 'uppercase',
    margin: 0,
    fontStyle: 'italic',
    lineHeight: '0.9'
  };

  <div style={{
    width: '100vw',
    minHeight: '100dvh',   // 🔥 dynamic viewport height
    overflowY: 'auto',     // 🔥 scroll palcem
    overflowX: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    backgroundColor: '#000'
  }}></div>

  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#000', overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      { /*------SPLASH------*/}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{
              position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
              backgroundColor: '#000', zIndex: 10000, display: 'flex',
              flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              style={{ textAlign: 'center', padding: '0 20px' }}
            >
              <h2 style={{ ...fontStyle, fontSize: isMobile ? '2.5rem' : '4rem', letterSpacing: '10px', color: '#00ff00' }}>
                MACIEK // PORTFOLIO
              </h2>
              <div style={{ width: '100%', height: '1px', backgroundColor: '#333', marginTop: '10px', position: 'relative' }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2, ease: "linear" }}
                  style={{ height: '100%', backgroundColor: '#00ff00', boxShadow: '0 0 10px #00ff00' }}
                />
              </div>
              <p style={{ ...fontStyle, fontSize: '0.8rem', marginTop: '15px', color: '#555', fontStyle: 'normal' }}>
                DECRYPTING ASSETS...
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- CONTACT COURTAIN --- */}
      <AnimatePresence>
        {isExiting && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
              backgroundColor: '#00ff00', zIndex: 9999, display: 'flex',
              alignItems: 'center', justifyContent: 'center', color: 'black'
            }}
          >
            <h2 style={{ ...fontStyle, fontSize: isMobile ? '3rem' : '5rem', color: 'black' }}>INITIALIZING...</h2>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MAIN --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        {/* HEADER */}
        <header
          style={{
            height: '70px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 20px',
            borderBottom: '1px solid #333',
            zIndex: 50,
            backgroundColor: '#000'
          }}
        >


          <button
            onClick={() => handleNavigation('contact')}
            style={{
              background: 'none',
              border: '2px solid #00ff00',
              cursor: 'pointer',
              ...fontStyle,
              color: '#ffffff',
              fontSize: isMobile ? '1.2rem' : '1.2rem',
              letterSpacing: isMobile ? '1.5px' : '3px',
              textShadow: '0 0 10px rgba(0,255,0,0.4)'
            }}
          >
            CONTACT.JSX
          </button>

          <div style={{ ...fontStyle, fontSize: '1.2rem', color: '#ffffff' }}>
            HOME.JSX
          </div>

        </header>

        {/* MAIN CONTENT */}
        <main style={{ flex: 1, position: 'relative', display: 'flex', flexDirection: isMobile ? 'column' : 'row', overflow: 'hidden' }}>

          {/* TŁO GŁÓWNE ŚRODKOWE */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: `url(${backImg2})`,
            backgroundSize: 'cover', backgroundPosition: 'center',
            zIndex: 1
          }}>
            <div style={{ width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)' }} />
          </div>

          {/* LGAME */}
          <Link to="/game" style={{
            position: 'relative', flex: isMobile ? '1' : '0 0 25%', zIndex: 10, textDecoration: 'none', overflow: 'hidden',
            borderRight: !isMobile ? '2px solid #00ff00' : 'none',
            borderBottom: isMobile ? '2px solid #00ff00' : 'none'
          }}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}
            >
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: `url(${mount4K})`, backgroundSize: 'cover', backgroundPosition: 'center',
                transform: isMobile ? 'none' : 'skewX(-5deg) translateX(-10%)',
                filter: 'grayscale(1) brightness(0.4)', transition: '0.3s'
              }} className="panel-bg" />
              <h1 style={{ ...fontStyle, fontSize: isMobile ? '3rem' : '4rem', zIndex: 11, textAlign: 'center', textShadow: '0 0 15px rgba(0,255,0,0.5)' }}>GAME<br />GRA</h1>
            </motion.div>
          </Link>

          {!isMobile && <div style={{ flex: 1, zIndex: 2 }} />}

          {/* RMAP */}
          <Link to="/map" style={{
            position: 'relative', flex: isMobile ? '1' : '0 0 25%', zIndex: 10, textDecoration: 'none', overflow: 'hidden',
            borderLeft: !isMobile ? '2px solid #00ff00' : 'none'
          }}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}
            >
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: `url(${world4K})`, backgroundSize: 'cover', backgroundPosition: 'center',
                transform: isMobile ? 'none' : 'skewX(5deg) translateX(10%)',
                filter: 'grayscale(1) brightness(0.4)', transition: '0.3s'
              }} className="panel-bg" />
              <h1 style={{ ...fontStyle, fontSize: isMobile ? '3rem' : '4rem', zIndex: 11, textAlign: 'center', textShadow: '0 0 15px rgba(0,255,0,0.5)' }}>CESIUM<br />MAPA</h1>
            </motion.div>
          </Link>
        </main>

        {/* FOOTER */}
        <footer style={{ height: isMobile ? '80px' : '100px', position: 'relative', borderTop: '1px solid #ff0000', zIndex: 50, backgroundColor: '#000' }}>
          <div style={{ position: 'absolute', inset: 0, opacity: 0.3 }}><MatrixRain /></div>
          {/* footer content
          <div style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button onClick={() => handleNavigation('contact')} style={{ background: 'none', border: 'none', cursor: 'pointer', ...fontStyle, fontSize: isMobile ? '2rem' : '2.5rem', letterSpacing: isMobile ? '5px' : '10px' }}>KONTAKT</button>
          </div>
           */}
        </footer>
      </motion.div>

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