import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  const fontStyle = {
    fontFamily: "'Bebas Neue', sans-serif",
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: '2px'
  };

  return (
    <motion.div
      // BCKGRND ANIM
      initial={{ backgroundColor: "#00ff00" }}
      animate={{ backgroundColor: "#000000" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }} // Czekamy aż zieleń zniknie
        style={{ textAlign: 'left', zIndex: 10 }}
      >
        <h1 style={{ ...fontStyle, fontSize: '5rem', marginBottom: '40px' }}>
          CONTACT // KONTAKT
        </h1>
        
        <div style={{ marginBottom: '30px' }}>
          <p style={{ ...fontStyle, color: '#555', fontSize: '1rem' }}>DIRECT LINK</p>
          <a href="mailto:maciek@domain.com" style={{ ...fontStyle, fontSize: '3rem', textDecoration: 'none' }}>
            MACIEK@DOMAIN.COM
          </a>
        </div>

        {/* BACKbtn */}
        <motion.button
          whileHover={{ color: '#00ff00', x: -5 }}
          onClick={() => navigate('/')}
          style={{
            background: 'none', border: 'none', color: '#444',
            cursor: 'pointer', ...fontStyle, fontSize: '1.2rem', marginTop: '50px'
          }}
        >
          [ ESC ] RETURN TO HUB
        </motion.button>
      </motion.div>

      {/* BACKGROUND ANIMATION */}
      <motion.div 
        animate={{ 
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.2, 1] 
        }}
        transition={{ duration: 5, repeat: Infinity }}
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(0,255,0,0.15) 0%, rgba(0,0,0,0) 70%)',
          borderRadius: '50%',
          zIndex: 1
        }}
      />
    </motion.div>
  );
};

export default Contact;