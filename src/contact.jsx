import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import liIcon from './assets/logos/li9.png';
import ghIcon from './assets/logos/git2.png'; 
import drIcon from './assets/logos/drive.png';
import background from './assets/backgrounds/backgr.jpg'; 

const Contact = () => {
  const navigate = useNavigate();
  const isMobile = window.innerWidth < 600;

  const fontStyle = {
    fontFamily: "'x-font', sans-serif",
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    margin: 0
  };

  const SocialLink = ({ icon, label, href }) => (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ x: 10 }}
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: isMobile ? '10px' : '20px',
        textDecoration: 'none', 
        marginBottom: '15px',
        width: 'fit-content'
      }}
    >
      <motion.div
        whileHover={{ scale: 1.2, rotate: 5 }}
        style={{
          width: isMobile ? '30px' : '40px',
          height: isMobile ? '30px' : '40px',
          backgroundColor: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid #00ff00',
          overflow: 'hidden'
        }}
      >
        <img 
          src={icon} 
          alt={label} 
          style={{ width: '80%', height: '80%', objectFit: 'contain' }} 
        />
      </motion.div>
      
      <motion.span
        whileHover={{ color: '#00ff00' }}
        transition={{ duration: 0.3 }}
        style={{ 
          ...fontStyle, 
          fontSize: isMobile ? '1.4rem' : '2rem'
        }}
      >
        {label}
      </motion.span>
    </motion.a>
  );

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
    background: 'rgba(0,0,0,0.55)',
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
            borderBottom: '2px solid #333' 
          }}
        >
          CONTACT 
        </h1>
        
        <div style={{ marginBottom: '40px' }}>
          <p style={{ ...fontStyle, color: '#00ff00', fontSize: isMobile ? '1.5rem' : '2rem', marginBottom: '10px' }}>
            @ EMAIL:
          </p>

          <motion.a 
            whileHover={{ color: '#00ff00', x: 5 }}
            href="mailto:office@nicetry.com.pl" 
            style={{ 
              ...fontStyle, 
              fontSize: isMobile ? '2rem' : '3rem', 
              textDecoration: 'none', 
              display: 'block', 
              marginBottom: '20px' 
            }}
          >
            OFFICE@NICETRY.COM.PL
          </motion.a>

          <motion.a 
            whileHover={{ color: '#00ff00', x: 5 }}
            href="mailto:maciek@gmail.com" 
            style={{ 
              ...fontStyle, 
              fontSize: isMobile ? '2rem' : '3rem', 
              textDecoration: 'none', 
              display: 'block', 
              marginBottom: '20px' 
            }}
          >
            MACIEK@GMAIL.COM
          </motion.a>

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
            marginBottom: '40px' 
          }}>
            +48 880 208 416
          </p>

          <p style={{ ...fontStyle, color: '#00ff00', fontSize: isMobile ? '1.5rem' : '2rem' }}>
            SOCIAL & ASSETS:
          </p>
          
          <SocialLink 
            icon={liIcon} 
            label="LINKEDIN PROFILE" 
            href="https://www.linkedin.com/in/maciejkrol-developer" 
          />
          <SocialLink 
            icon={ghIcon} 
            label="GITHUB REPOSITORY" 
            href="https://github.com/m-krol-github" 
          />
          <SocialLink 
            icon={drIcon} 
            label="GOOGLE DRIVE / PORTFOLIO" 
            href="https://drive.google.com/drive/folders/17aygvSt26eTNxYQ5y7_xZGtFa7lwZwh0?usp=drive_link" 
          />
        </div>

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
  }}
>
  [ CLICK ] RETURN TO HOME PAGE
</motion.button>

      </motion.div>
    </motion.div>
  );
};

export default Contact;
