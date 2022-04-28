import { proxy } from "valtio";

const state = proxy({
  sportsCarPosX: 0,
  gameStart: false,
  gameStartPrevious: false,
  speed: 2,
  timelapse: 0,
});

export default state;
