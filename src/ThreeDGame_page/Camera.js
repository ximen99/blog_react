import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useSnapshot } from "valtio";
import state from "ThreeDGame_page/appState";
import { MathUtils, Vector3 } from "three";

function Camera() {
  const startPos = [0, 20, 80];
  const startFov = 40;
  const gamePos = [0, 20, 40];
  const gameFov = 80;
  const snap = useSnapshot(state);
  const v = new Vector3();
  useFrame((state) => {
    state.camera.fov = MathUtils.lerp(
      state.camera.fov,
      snap.gameStart ? 80 : 40,
      0.05
    );
    state.camera.position.lerp(
      v.set(
        snap.gameStart ? 0 : 0,
        snap.gameStart ? 20 : 20,
        snap.gameStart ? 40 : 80
      ),
      0.05
    );
    state.camera.lookAt(0, 0, 0);
    state.camera.updateProjectionMatrix();
  });

  return <PerspectiveCamera makeDefault position={[0, 20, 80]} fov={40} />;
}

export default Camera;
