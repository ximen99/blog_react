/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/game/Mountain2.glb");
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={[20, 20, 20]}
      position={[-400, -10, -600]}
      rotation={[0, 0, 0]}
    >
      <mesh
        geometry={nodes["Mountain_Cube-Mesh"].geometry}
        material={materials["455A64"]}
      />
      <mesh
        geometry={nodes["Mountain_Cube-Mesh_1"].geometry}
        material={materials.FFFFFF}
      />
      <mesh
        geometry={nodes["Mountain_Cube-Mesh_2"].geometry}
        material={materials["8BC34A"]}
      />
    </group>
  );
}

useGLTF.preload("/game/Mountain2.glb");