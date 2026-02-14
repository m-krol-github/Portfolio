import {
  Billboard,
  Environment,
  GradientTexture,
  OrbitControls,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import TirePath from "./TirePath";
import GhostTirePath from "./GhostTirePath";
import FlowController from "./FlowController";
import { WinterComplete } from "./WinterComplete";
import Speed from "./Speed";

import envMap from "../assets/textures/GlazedPatio_BW.exr";
import { YellowZones } from "./YellowZones";

export default function Experience() {
  // ZAMIENNIKI ZA LEVA
  const envMapIntensity = 0.4;
  const envRotation = -3.1;
  const ambientIntensity = 1.15;

  return (
    <>
      {/* <Perf position="top-left" /> */}
      <OrbitControls />

      <ambientLight intensity={ambientIntensity} color={[0.9, 0.9, 1]} />

      <Environment
        files={envMap}
        backgroundBlurriness={0.8}
        environmentIntensity={envMapIntensity}
        resolution={32}
        environmentRotation={[0, envRotation, 0]}
        backgroundRotation={[0, envRotation, 0]}
      />

      <Billboard follow lockX={false} lockY={false} lockZ={false}>
        <mesh position={[0, 50, -620]}>
          <planeGeometry args={[3000, 800]} />
          <meshBasicMaterial>
            <GradientTexture
              stops={[0.2, 0.6]}
              colors={["#012567", "#fffbda"]}
              size={1024}
            />
          </meshBasicMaterial>
        </mesh>
      </Billboard>

      <TirePath />
      <GhostTirePath />
      <YellowZones position={[20, 40.3, 50]} />
      <FlowController />
      <WinterComplete />
      <Speed />
    </>
  );
}