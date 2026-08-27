import { Canvas } from '@react-three/fiber';
import { XR, VRButton, Controllers } from '@react-three/xr';
import { ambientLight, directionalLight } from 'three';

export default function VrDemo() {
  return (
    <>
      <VRButton />

      <Canvas style={{ width: '100vw', height: '100vh', background: '#000' }}>
        <XR>
          <Controllers />

          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} />

          <mesh position={[0, 1.6, -2]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="hotpink" />
          </mesh>
        </XR>
      </Canvas>
    </>
  );
}
