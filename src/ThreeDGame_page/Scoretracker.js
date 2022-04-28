import { useFrame } from "@react-three/fiber";
import state from "ThreeDGame_page/appState";
import { useSnapshot } from "valtio";

function Scoretracker() {
  const snap = useSnapshot(state);
  const speedIncreaseRate = 1;
  const timeGaptoIncreaseSpeed = 10;
  const baseSpeed = 2;

  useFrame((threeState) => {
    if (!snap.gameStart) {
      threeState.clock.start();
    } else {
      state.timelapse = Math.floor(threeState.clock.elapsedTime);
      state.speed =
        Math.floor(threeState.clock.elapsedTime / timeGaptoIncreaseSpeed) *
          speedIncreaseRate +
        baseSpeed;
    }
  });
}

export default Scoretracker;
