import { proxy } from "valtio";

const state = proxy({
  sportsCarPosX: 0,
  gameStart: false,
  gameStartPrevious: false,
});

export default state;
