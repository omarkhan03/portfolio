/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Bastien Genbrugge (https://sketchfab.com/bastienBGR)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/mini-macbook-pro-2b054523279747c8b5b2e5ed9ea7b311
title: Mini MacBook Pro
*/
import type * as THREE from "three";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";
import SUSpense from "../Suspense";

type GLTFResult = GLTF & {
  nodes: {
    MacBook_1_MacBook1_0: THREE.Mesh;
    Muis_1_Mat_2: THREE.Mesh;
    Muis_1_Mat_0: THREE.Mesh;
  };
  materials: {
    ["MacBook.1"]: THREE.MeshStandardMaterial;
    material: THREE.MeshStandardMaterial;
    Mat_0: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/mini_macbook_pro.glb") as GLTFResult;

  const group = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    // look at the camera
    group.current.lookAt(state.camera.position);
    // look 90 degrees left
    group.current.rotateY(-Math.PI / 2);
    // tilt down a bit
    group.current.rotateZ(-Math.PI / 10);
  });
  return (
    <group ref={group} {...props} dispose={null} scale={0.0075}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[8.58, 13.85, 134]} rotation={[0, Math.PI / 2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MacBook_1_MacBook1_0.geometry}
              material={materials["MacBook.1"]}
            />
          </group>
          <group position={[-8.58, -13.85, -134]} rotation={[Math.PI, -0.28, Math.PI]}>
            <mesh castShadow receiveShadow geometry={nodes.Muis_1_Mat_2.geometry} material={materials.material} />
            <mesh castShadow receiveShadow geometry={nodes.Muis_1_Mat_0.geometry} material={materials.Mat_0} />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/mini_macbook_pro.glb");
