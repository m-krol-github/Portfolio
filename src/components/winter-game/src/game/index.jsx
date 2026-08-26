"use client";
import "./style.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import Interface from "./Interface.jsx";
import { Environment, ScrollControls } from "@react-three/drei";
import * as THREE from "three";
import { Suspense } from "react";
import envMap from "../assets/textures/GlazedPatio_BW.exr";
import { KeyboardControls } from "@react-three/drei";
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

const Game = () => (
  // <motion.div
  //   className="game-container"
  //   layoutId="game-tile"
  //   initial={{ opacity: 0 }}
  //   animate={{ opacity: 1 }}
  //   exit={{ opacity: 0 }}
  //   transition={{ duration: 0.6 }}
  // >

  <KeyboardControls map={[{ name: "grip", keys: ["Space"] }]}>

    {/* BACK BUTTON */}
    <Link
      to="/"
      style={{
        position: "absolute",
        top: "20px",
        left: "20px",
        zIndex: 9999,
        padding: "10px 20px",
        background: "rgba(0,0,0,0.6)",
        border: "1px solid #00ff00",
        color: "#00ff00",
        fontFamily: "Bebas Neue, sans-serif",
        fontSize: "1.2rem",
        textDecoration: "none",
        backdropFilter: "blur(5px)",
      }}
    >
      ← HOME
    </Link>

    <Canvas shadows dpr={[1, 2]} style={{ width: '100vw', height: '100vh', position: 'absolute', top: 0, left: 0 }}
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        outputColorSpace: THREE.LinearSRGBColorSpace,
      }}
    >
      <color args={[0.05, 0.16, 0.37]} attach="background" />
      <fog attach="fog" color={[0.05, 0.14, 0.7]} near={100} far={250} />
      <Environment
        files={envMap}
        background={false}
        environmentIntensity={1}
        resolution={32}
        environmentRotation={[0, 2.16, 0]}
      />

      <color args={[0.05, 0.16, 0.37]} attach="background" />


      <Suspense fallback={null}>
        <Experience />
      </Suspense>
    </Canvas>

    <Interface />
  </KeyboardControls>

  // </motion.div>
);

export default Game;
