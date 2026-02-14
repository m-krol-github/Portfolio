import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import gameThumbnail from './assets/thumbnails/game-thumbnail.jpg';
import mapThumbnail from './assets/thumbnails/map-thumbnail.jpg';

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.3
//     }
//   }
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" }
//   },
//   hover: {
//     scale: 1.05,
//     boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
//     transition: { duration: 0.3 }
//   },
//   tap: { scale: 0.95 }
// };

const Home = () => {
return (
<div style={{
width: '100vw',
height: '100vh',
overflow: 'hidden',
position: 'relative',
backgroundColor: '#000',
margin: 0,
padding: 0,
boxSizing: 'border-box'
}}>

     {/* SEKCJA LEWA GÓRA (GRA) */}
  <Link to="/game">
    <motion.div
      whileHover={{ scale: 1.02, zIndex: 10 }}
      transition={{ duration: 0.4 }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${gameThumbnail})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        clipPath: 'polygon(0 0, 100% 0, 0 100%)',
        cursor: 'pointer',
        display: 'flex',
        padding: '5%',
        boxSizing: 'border-box'
      }}
    >
      <h2 style={{ 
        color: 'white', 
        fontSize: 'clamp(1.5rem, 6vw, 4rem)', 
        fontWeight: '900',
        margin: 0,
        textShadow: '0 5px 15px rgba(0,0,0,0.5)' 
      }}>
        WINTER GAME
      </h2>
    </motion.div>
  </Link>

  {/* SEKCJA PRAWA DÓŁ (CESIUM) */}
  <Link to="/map">
    <motion.div
      whileHover={{ scale: 1.02, zIndex: 10 }}
      transition={{ duration: 0.4 }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${mapThumbnail})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        padding: '5%',
        boxSizing: 'border-box'
      }}
    >
      <h2 style={{ 
        color: 'white', 
        fontSize: 'clamp(1.5rem, 6vw, 4rem)', 
        fontWeight: '900',
        margin: 0,
        textAlign: 'right', // Gwarantuje wyrównanie do prawej
        textShadow: '0 5px 15px rgba(0,0,0,0.5)' 
      }}>
        CESIUM WORLD
      </h2>
    </motion.div>
  </Link>

</div>
  );
};

export default Home;