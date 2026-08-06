import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom';
import GameScene from './components/winter-game/src/game/index.jsx';
import GeoScene from './components/Map.jsx';
import './App.css'
import Home from "./Home.jsx"; 
import Contcact from './contact.jsx';
import { motion } from 'framer-motion';
import { AnimatePresence, LayoutGroup } from 'framer-motion'

function App() {
  return (
    <Router>
      <LayoutGroup> 
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<GameScene />} />
            { <Route path="/map" element={<GeoScene />} /> }
            <Route path="/contact" element={<Contcact />} />
          </Routes>
        </AnimatePresence>
      </LayoutGroup>
    </Router>
  );
}

export default App;
