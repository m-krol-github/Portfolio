import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import gameThumbnail from './assets/thumbnails/game-thumbnail.jpg';
import mapThumbnail from './assets/thumbnails/map-thumbnail.jpg';  

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.3 
    } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
  hover: { 
    scale: 1.05, 
    boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
    transition: { duration: 0.3 }
  },
  tap: { scale: 0.95 }
};

const Home = () => {
  return (
    <motion.div
      className="home-page-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        gap: '40px',
        padding: '20px',
        background: 'linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)', // Fajna gradientowa poświata
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <h1 style={{ color: 'white', fontSize: '3em', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Moje Portfolio 3D</h1>

      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {/* Game */}
        <Link to="/game" style={{ textDecoration: 'none' }}>
          <motion.div
            className="portfolio-tile"
            variants={itemVariants}
            whileHover="hover"
            whileTap="tap"
            layoutId="game-tile"
            style={{
              width: '320px',
              height: '220px',
              borderRadius: '15px',
              overflow: 'hidden',
              cursor: 'pointer',
              position: 'relative',
              boxShadow: '0px 5px 15px rgba(0,0,0,0.2)',
              backgroundColor: '#333'
            }}
          >
            <img 
              src={gameThumbnail} 
              alt="Miniaturka Gry 3D" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease-in-out' }} 
              onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
            />
            <div style={{ 
              position: 'absolute', 
              bottom: 0, 
              left: 0, 
              right: 0, 
              background: 'rgba(0,0,0,0.6)', 
              color: 'white', 
              padding: '10px', 
              fontSize: '1.2em', 
              fontWeight: 'bold' 
            }}>
              🎮 3D in R3F
            </div>
          </motion.div>
        </Link>

        {/* Cesium */}
        <Link to="/map" style={{ textDecoration: 'none' }}>
          <motion.div
            className="portfolio-tile"
            variants={itemVariants}
            whileHover="hover"
            whileTap="tap"
            layoutId="map-tile" // Ważne dla Framer Motion - unikalny ID
            style={{
              width: '320px',
              height: '220px',
              borderRadius: '15px',
              overflow: 'hidden',
              cursor: 'pointer',
              position: 'relative',
              boxShadow: '0px 5px 15px rgba(0,0,0,0.2)',
              backgroundColor: '#333'
            }}
          >
             <img 
              src={mapThumbnail} 
              alt="Miniaturka Mapy 3D" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease-in-out' }} 
              onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
            />
            <div style={{ 
              position: 'absolute', 
              bottom: 0, 
              left: 0, 
              right: 0, 
              background: 'rgba(0,0,0,0.6)', 
              color: 'white', 
              padding: '10px', 
              fontSize: '1.2em', 
              fontWeight: 'bold' 
            }}>
              🌍 Interactive 3D Map
            </div>
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
};

export default Home;