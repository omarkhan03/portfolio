import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import Ball from "./Ball";

export default function Balls(props: any) {
  const ball1 = useRef<THREE.Mesh>(null!);
  const ball2 = useRef<THREE.Mesh>(null!);
  const ball3 = useRef<THREE.Mesh>(null!);
  const ballGroup = useRef<THREE.Group>(null!);

  return (
    <group {...props} ref={ballGroup}>
      {/* hover only one ball at a time */}
      <Ball
        ballRef={ball1}
        ballGroup={ballGroup}
        // position={[-2, 0, 0]}
        tiltAxis={[Math.PI / 8, 0, 0]}
        initialAngle={[0, 0, 0]}
      />
      <Ball
        ballRef={ball2}
        ballGroup={ballGroup}
        // position={[5, 2, 3]}
        // tiltAxis={[0, Math.PI / 8, 0]}
        initialAngle={[0, 0, 0]}
      />
      <Ball
        ballRef={ball3}
        ballGroup={ballGroup}
        // position={[0, 0, 2]}
        tiltAxis={[0, 0, Math.PI / 8]}
        initialAngle={[0, 0, 0]}
      />
    </group>
  );
}
