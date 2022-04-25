/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Road by Poly by Google [CC-BY], via Poly Pizza
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model({ speed, ...props }) {
  const road = useRef();
  const { nodes, materials } = useGLTF("/game/Road.glb");
  useFrame((state, delta) => {
    if (road.current.position.z <= 550) {
      road.current.position.z += speed * 0.7;
    } else {
      road.current.position.z = -1445;
    }
  });
  return (
    <group
      receiveShadow
      ref={road}
      {...props}
      scale={[5, 1, 1.2]}
      rotation={[0, Math.PI / 2, 0]}
      dispose={null}
    >
      <mesh geometry={nodes.Road.geometry} material={materials.Mat} />
    </group>
  );
}

useGLTF.preload("/game/Road.glb");