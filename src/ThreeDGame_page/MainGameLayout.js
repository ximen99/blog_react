import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Lights from "ThreeDGame_page/Lights";
import { OrbitControls, Sky, Cloud } from "@react-three/drei";
import Road from "ThreeDGame_page/Road";
import SportsCar from "ThreeDGame_page/SportsCar";
import Floor from "ThreeDGame_page/Floor";
import Mountain1 from "ThreeDGame_page/Mountain1";
import Mountain2 from "ThreeDGame_page/Mountain2";
import PoliceCars from "ThreeDGame_page/PoliceCars";

function MainGameLayout() {
  let driveSpeed = 2;
  return (
    <div className="h-screen w-screen">
      <Canvas
        camera={{
          position: [0, 20, 40],
          fov: 80,
        }}
      >
        <Sky distance={5000} sunPosition={[-4, 0.5, -1]} rayleigh={0.3} />
        <Floor />
        <OrbitControls />
        <Lights />
        <SportsCar />
        <PoliceCars speed={driveSpeed} />
        <Mountain2 />
        <Mountain1 />
        <Suspense>
          <Road position={[0, -10, -450]} speed={driveSpeed} />
          <Road position={[0, -10, -1450]} speed={driveSpeed} />
          <Cloud
            position={[100, 80, -250]}
            opacity={1}
            speed={0.7}
            size={5}
            width={30}
            depth={0.2}
            segments={100}
          />
          <Cloud
            position={[-120, 80, -350]}
            opacity={1}
            speed={0.7}
            size={5}
            width={30}
            depth={0.2}
            segments={100}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default MainGameLayout;
