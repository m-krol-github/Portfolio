import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import liIcon from './assets/logos/li9.png';
import ghIcon from './assets/logos/git2.png'; 
import drIcon from './assets/logos/drive.png';

const Contact = () => {
  const navigate = useNavigate();

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
        gap: '20px', 
        textDecoration: 'none', 
        marginBottom: '15px',
        width: 'fit-content'
      }}
    >
      <motion.div
        whileHover={{ scale: 1.2, rotate: 5 }}
        style={{
          width: '40px',
          height: '40px',
          backgroundColor: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid #00ff00',
          overflow: 'hidden'
        }}
      >
        <img src={icon} alt={label} style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
      </motion.div>
      
      <motion.span
        whileHover={{ color: '#00ff00' }}
        transition={{ duration: 0.3 }}
        style={{ ...fontStyle, fontSize: '2rem' }}
      >
        {label}
      </motion.span>
    </motion.a>
  );

  return (
    <motion.div
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
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        style={{ textAlign: 'left', zIndex: 10, width: '80%', maxWidth: '800px' }}
      >
        <h1 style={{ ...fontStyle, fontSize: '4rem', marginBottom: '50px', borderBottom: '2px solid #333' }}>
          CONTACT // KONTAKT
        </h1>
        
        <div style={{ marginBottom: '40px' }}>
          <p style={{ ...fontStyle, color: '#00ff00', fontSize: '0.9rem', marginBottom: '10px' }}>ADRES E-MAIL:</p>
          <motion.a 
            whileHover={{ color: '#00ff00', x: 5 }}
            href="mailto:maciek@gmail.com" 
            style={{ ...fontStyle, fontSize: '3rem', textDecoration: 'none', display: 'block', marginBottom: '20px' }}
          >
            MACIEK@GMAIL.COM
          </motion.a>

          <p style={{ ...fontStyle, color: '#00ff0000', fontSize: '0.9rem', marginBottom: '10px' }}>TELEFON:</p>
          <p style={{ ...fontStyle, fontSize: '2.5rem', marginBottom: '40px' }}>+48 600 004 064</p>

          <p style={{ ...fontStyle, color: '#00ff0000', fontSize: '0.9rem', marginBottom: '20px' }}>SOCIAL & ASSETS:</p>
          
          {/* SEKCCJA IKON W LINII */}
          <SocialLink 
            icon={liIcon} 
            label="LINKEDIN PROFILE" 
            href="https://www.linkedin.com/in/maciejkrol-developer" 
          />
          <SocialLink 
            icon={ghIcon} 
            label="GITHUB REPOSITORY" 
            href="https://github.com/TwojUser" 
          />
          <SocialLink 
            icon={drIcon} 
            label="GOOGLE DRIVE / PORTFOLIO" 
            href="https://drive.google.com/..." 
          />
        </div>

        {/* BACKbtn */}
        <motion.button
          whileHover={{ color: '#00ff00', x: -5 }}
          onClick={() => navigate('/')}
          style={{
            background: 'none', border: '1px solid #333', color: '#444',
            cursor: 'pointer', ...fontStyle, fontSize: '1rem', marginTop: '20px',
            padding: '10px 20px'
          }}
        >
          [ CLICK ] POWRÓT DO SYSTEMU
        </motion.button>
      </motion.div>

      {/* BACKGROUND DECORATION */}
      <motion.div 
        animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{
          position: 'absolute', right: '-10%', bottom: '-10%',
          width: '800px', height: '800px',
          background: 'radial-gradient(circle, rgba(0,255,0,0.1) 0%, rgba(0,0,0,0) 70%)',
          borderRadius: '50%', zIndex: 1
        }}
      />
    </motion.div>
  );
};

export default Contact;