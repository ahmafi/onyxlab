"use client";

import { Canvas } from "@react-three/fiber";
import { KS1Model } from "./assets/ks1-model";
import { OrbitControls } from "@react-three/drei";

export default function KeyboardCanvas(props: { className?: string }) {
  return (
    <div className={props.className}>
      <Canvas>
        <KS1Model />
        <ambientLight intensity={100} />
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
}
