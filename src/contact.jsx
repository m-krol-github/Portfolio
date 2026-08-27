import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import liIcon from './assets/logos/li9.png';
import ghIcon from './assets/logos/git2.png';
import drIcon from './assets/logos/drive.png';
import background from './assets/backgrounds/backgr.jpg';

const Contact = () => {
  const navigate = useNavigate();
  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  const fontStyle = {
    fontFamily: "'x-font', sans-serif",
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    margin: 0
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        overflowY: 'auto',
        overflowX: 'hidden',
        WebkitOverflowScrolling: 'touch',
        touchAction: 'pan-y',
        paddingTop: isMobile ? '40px' : '0',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >

      {/* DARK OVERLAY */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0, 0, 0, 0.88)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        style={{
          textAlign: 'left',
          zIndex: 10,
          width: '80%',
          maxWidth: '800px'
        }}
      >
        <h1
          style={{
            ...fontStyle,
            fontSize: isMobile ? '2.5rem' : '4rem',
            marginBottom: '50px',
            borderBottom: '2px solid #00ff00',
            paddingBottom: '10px',
            textShadow: '0 0 10px #00ff00'
          }}
        >
          CONTACT
        </h1>

        {/* EMAIL */}
        <div style={{ marginBottom: '40px' }}>
          <p style={{ ...fontStyle, color: '#00ff00', fontSize: isMobile ? '1.5rem' : '2rem', marginBottom: '10px' }}>
            @MAIL:
          </p>

          <motion.a
            whileHover={{ color: '#00ff00', x: 5 }}
            href="mailto:admin@nicetry.com.pl"
            style={{
              ...fontStyle,
              fontSize: isMobile ? '1.6rem' : '3rem',
              textDecoration: 'none',
              display: 'block',
              marginBottom: '20px',
              textShadow: '0 0 8px #00ff00'
            }}
          >
            ADMIN@NICETRY.COM.PL
          </motion.a>

          {/* PHONE */}
          <p style={{
            ...fontStyle,
            color: '#00ff00',
            fontSize: isMobile ? '1.5rem' : '2rem',
            marginBottom: '10px'
          }}>
            MOBILE:
          </p>

          <p style={{
            ...fontStyle,
            fontSize: isMobile ? '1.8rem' : '2.5rem',
            marginBottom: '40px',
            textShadow: '0 0 8px #00ff00'
          }}>
            +48 880 208 416
          </p>

          {/* SOCIAL */}
          <p style={{ ...fontStyle, color: '#00ff00', fontSize: isMobile ? '1.5rem' : '2rem', marginBottom: '20px' }}>
            SOCIAL NETWORKS:
          </p>

          {/* SOCIAL BUTTONS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

            {/* LINKEDIN */}
            <motion.a
              href="https://www.linkedin.com/in/maciejkrol-developer"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, x: 5 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                padding: '18px 22px',
                backgroundColor: 'rgba(0,255,0,0.06)',
                border: '2px solid #00ff00',
                borderRadius: '12px',
                textDecoration: 'none',
                color: '#00ff00',
                fontFamily: "'x-font', sans-serif",
                fontSize: isMobile ? '1.4rem' : '1.8rem',
                letterSpacing: '2px',
                boxShadow: '0 0 12px #00ff0044'
              }}
            >
              <img src={liIcon} style={{ width: '40px', height: '40px', filter: 'drop-shadow(0 0 6px #00ff00)' }} />
              LINKEDIN PROFILE
            </motion.a>

            {/* GITHUB */}
            <motion.a
              href="https://github.com/m-krol-github"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, x: 5 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                padding: '18px 22px',
                backgroundColor: 'rgba(0,255,0,0.06)',
                border: '2px solid #00ff00',
                borderRadius: '12px',
                textDecoration: 'none',
                color: '#00ff00',
                fontFamily: "'x-font', sans-serif",
                fontSize: isMobile ? '1.4rem' : '1.8rem',
                letterSpacing: '2px',
                boxShadow: '0 0 12px #00ff0044'
              }}
            >
              <img src={ghIcon} style={{ width: '40px', height: '40px', filter: 'drop-shadow(0 0 6px #00ff00)' }} />
              GITHUB REPOSITORY
            </motion.a>

            {/* DRIVE */}
            <motion.a
              href="https://drive.google.com/drive/folders/17aygvSt26eTNxYQ5y7_xZGtFa7lwZwh0?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, x: 5 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                padding: '18px 22px',
                backgroundColor: 'rgba(0,255,0,0.06)',
                border: '2px solid #00ff00',
                borderRadius: '12px',
                textDecoration: 'none',
                color: '#00ff00',
                fontFamily: "'x-font', sans-serif",
                fontSize: isMobile ? '1.4rem' : '1.8rem',
                letterSpacing: '2px',
                boxShadow: '0 0 12px #00ff0044'
              }}
            >
              <img src={drIcon} style={{ width: '40px', height: '40px', filter: 'drop-shadow(0 0 6px #00ff00)' }} />
              PORTFOLIO DRIVE
            </motion.a>

          </div>
        </div>

        {/* RETURN BUTTON */}
        <motion.button
          whileHover={{ color: '#00ff00', x: -5 }}
          onClick={() => navigate('/')}
          style={{
            background: 'none',
            border: '0px solid #00ff00',
            cursor: 'pointer',
            ...fontStyle,
            color: '#c4ff04',
            fontSize: isMobile ? '1.8rem' : '2rem',
            textShadow: '0 0 8px #00ff00'
          }}
        >
          [ CLICK ] RETURN TO HOME PAGE
        </motion.button>

      </motion.div>
    </motion.div>
  );
};

export default Contact;
