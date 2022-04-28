import { useSnapshot } from "valtio";
import state from "ThreeDGame_page/appState";

function ScorePageOverlay() {
  const snap = useSnapshot(state);

  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-transparent flex justify-start">
      <div className="text-[#FF8300] text-3xl italic font-bold mt-[10vh] ml-[5vw] h-[20vh] w-[20vw] grid grid-rows-2">
        <p>{`Speed: ${snap.speed - 1}`}</p>
        <p>{`Time Lapse: ${snap.timelapse}`}</p>
      </div>
    </div>
  );
}

export default ScorePageOverlay;
