import { Canvas } from "@react-three/fiber";
import Lights from "ThreeDGame_page/Lights";
import { Sky, Cloud, Loader } from "@react-three/drei";
import Floor from "ThreeDGame_page/Floor";
import Mountain1 from "ThreeDGame_page/Mountain1";
import Mountain2 from "ThreeDGame_page/Mountain2";
import Camera from "ThreeDGame_page/Camera";
import { useSnapshot } from "valtio";
import state from "ThreeDGame_page/appState";
import GamestartOverlay from "ThreeDGame_page/GamestartOverlay";
import ResetComponents from "ThreeDGame_page/ResetComponents";

function MainGameLayout() {
  let driveSpeed = 2;
  const snap = useSnapshot(state);

  return (
    <div className="h-screen w-screen relative">
      <Canvas>
        <Camera />
        <Sky distance={5000} sunPosition={[-4, 0.5, -1]} rayleigh={0.3} />
        <Floor />
        <Lights />
        <Mountain2 />
        <Mountain1 />
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
        <ResetComponents speed={driveSpeed} />
      </Canvas>
      {!!snap.gameStart || <GamestartOverlay />}
      <Loader />
    </div>
  );
}

export default MainGameLayout;
