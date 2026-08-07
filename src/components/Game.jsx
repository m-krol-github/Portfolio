"use client";
import { useEffect, useState } from "react";
import "./winter-game/src/style.css";
import { Canvas } from "@react-three/fiber";
import Experience from "../components/winter-game/src/game/Experience.jsx";
import Interface from "../components/winter-game/src/game/Interface.jsx";
import { Environment } from "@react-three/drei";
import * as THREE from "three";
import { Suspense } from "react";
import envMap from "../components/winter-game/src/assets/textures/GlazedPatio_BW.exr";
import { KeyboardControls } from "@react-three/drei";

const Game = () => {
  return (
    <div className="game-container" style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0 }}>
      <KeyboardControls map={[{ name: "grip", keys: ["Space"] }]}>
        <Canvas
          shadows
          dpr={[1, 2]} 
          gl={{ antialias: true }}
          style={{
            width: '100vw',
            height: '100vh',
            position: 'absolute',
            top: 0,
            left: 0,
            pointerEvents: 'none',
          }}
        >
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
          <Environment files={envMap} resolution={512} />
        </Canvas>
        <Interface />
      </KeyboardControls>
    </div>
  );
};

export default Game;