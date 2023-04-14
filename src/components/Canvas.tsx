import type * as THREE from "three";
import { Children, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
export default function About({ children }: { children: JSX.Element[] | JSX.Element }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 15] }}
      style={{
        height: "100vh",
        width: "100vw",
        // background: "black",
        position: "absolute",
        top: 0,
        left: 0,
        // zIndex: -1,
        overflow: "hidden",
      }}
    >
      <OrbitControls />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <color args={["#030202"]} attach="background" />
      {children}
    </Canvas>
  );
}
