import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import MatrixRain from './MatrixRain';
import backImg from './assets/futuristic-moon-background.jpg';
import backImg2 from './assets/corusant.jpg';
import world4K from './assets/world4K.png';
import mount4K from './assets/mount4K.png';
import li from './assets/li.png';

const Home = () => {
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);
  const [isLoading, setIsLoading] = useState(true); 
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
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
    fontFamily: "'Bebas Neue', sans-serif",
    color: 'white',
    textTransform: 'uppercase',
    margin: 0,
    fontStyle: 'italic',
    lineHeight: '0.9'
  };

  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#000', overflow: 'hidden', position: 'relative' }}>
      
      {/* --- Splash Screen --- */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }} // Efektowne wyjście
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
              style={{ textAlign: 'center' }}
            >
              <h2 style={{ ...fontStyle, fontSize: '4rem', letterSpacing: '10px', color: '#00ff00' }}>
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

      {/* --- curtain --- */}
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
            <h2 style={{ ...fontStyle, fontSize: '5rem', color: 'black' }}>INITIALIZING...</h2>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- main content --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        {/* HEADER */}
        <header style={{ height: '60px', backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', borderBottom: '1px solid #333', zIndex: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ width: '40px', height: '40px', backgroundColor: '#444' }}></div>
            <a href="#" style={{ ...fontStyle, fontSize: '1.2rem', color: '#888', textDecoration: 'none' }}>LINKEDIN PROFILE</a>
          </div>
          <div style={{ ...fontStyle, fontSize: '1.2rem', color: '#555' }}>HOME.JSX</div>
        </header>

        {/* MAIN With BARs */}
        <main style={{ flex: 1, position: 'relative', overflow: 'hidden', backgroundImage: `url(${backImg2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1 }} />
          
          {/* BAR L */}
          <Link to="/game" style={{ position: 'absolute', left: 0, width: '50%', height: '100%', zIndex: 10 }}>
            <div style={{
              position: 'absolute', top: 0, left: '-50px', width: '200px', height: '180%',
              transform: 'rotate(-35deg)', transformOrigin: 'top left', zIndex: 5,
              overflow: 'hidden', borderRight: '2px solid rgba(255,255,255,0.3)'
            }}>
              <div style={{
                position: 'absolute', width: '2548px', height: '4048px', top: '-50%', left: '-1500px',
                backgroundImage: `url(${mount4K})`, backgroundSize: '2048px 2048px',
                transform: 'rotate(35deg) scale(0.75) translate(150px, 250px)',
                transformOrigin: 'center center'
              }} />
            </div>
            <div style={{ padding: '10% 20%', height: '100%', display: 'flex', alignItems: 'center' }}>
              <h1 style={{ ...fontStyle, fontSize: '5rem', position: 'relative', zIndex: 11 }}>GAME<br />GRA</h1>
            </div>
          </Link>

          {/* BAR R */}
          <Link to="/map" style={{ position: 'absolute', right: 0, width: '50%', height: '100%', zIndex: 10, textDecoration: 'none' }}>
            <div style={{
              position: 'absolute', top: 0, right: '-50px', width: '200px', height: '180%',
              transform: 'rotate(35deg)', transformOrigin: 'top right', zIndex: 5,
              overflow: 'hidden', borderLeft: '2px solid rgba(255,255,255,0.3)'
            }}>
              <div style={{
                position: 'absolute', width: '2048px', height: '4048px',
                backgroundImage: `url(${world4K})`, backgroundSize: '2048px 2048px',
                transform: 'rotate(-35deg) scale(0.74) translate(60px, -1100px)',
                transformOrigin: 'center center'
              }} />
            </div>
            <div style={{ padding: '10% 20%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', textAlign: 'right' }}>
              <h1 style={{ ...fontStyle, fontSize: '5rem', position: 'relative', zIndex: 11 }}>CESIUM<br />MAPA</h1>
            </div>
          </Link>
        </main>

        {/* FOOTER */}
        <footer style={{ height: '100px', position: 'relative', backgroundColor: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center', borderTop: '1px solid #ff0000', zIndex: 20, overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.4 }}>
            <MatrixRain />
          </div>
          <div style={{ position: 'relative', display: 'flex', gap: '10px' }}>
            {/* <button onClick={() => handleNavigation('projects')} style={{ background: 'none', border: 'none', cursor: 'pointer', ...fontStyle, fontSize: '2.5rem', letterSpacing: '5px' }}>PROJECTS</button> */}
            {/* <span style={{ ...fontStyle, fontSize: '5rem', opacity: 0.5 }}>/</span> */}
            <button onClick={() => handleNavigation('contact')} style={{ background: 'none', border: 'none', cursor: 'pointer', ...fontStyle, fontSize: '2.5rem', letterSpacing: '10px' }}>KONTAKT</button>
          </div>
        </footer>
      </motion.div>
    </div>
    
  );
};

export default Home;