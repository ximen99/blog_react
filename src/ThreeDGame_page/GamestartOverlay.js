import { Link } from "react-router-dom";
import state from "ThreeDGame_page/appState";

function GamestartOverlay() {
  const handleClick = () => {
    state.gameStart = true;
    state.gameStartPrevious = false;
    state.speed = 2;
  };
  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-teal-600 bg-opacity-60 flex justify-center">
      <div className="mt-[20vh] h-[50vh] grid grid-cols-4 grid-rows-5">
        <h1
          className="text-6xl text-white italic font-mono font-semibold hover:cursor-pointer hover:text-orange-600 col-span-4 m-auto"
          onClick={handleClick}
        >
          Click to Start
        </h1>
        <p className="text-base text-yellow-300 font-semibold col-start-2 col-span-2 m-auto flex-col justify-center align-middle">
          <span className="block">
            Avoid all the incoming traffic by dodging left or right.
          </span>
          <span className="block text-center">
            Test how far can you go! Good Luck!
          </span>
        </p>

        <h2 className="text-3xl text-white font-semibold col-start-2 col-span-2 m-auto">
          Controls
        </h2>
        <p className="text-xl text-white font-semibold col-start-2 col-span-2 m-auto">
          ← a / d →
        </p>
        <Link
          className="italic text-2xl text-white font-semibold row-start-5 col-start-2 col-span-2 m-auto hover:text-orange-600"
          to="/blog"
        >
          Cheng's Blog
        </Link>
      </div>
    </div>
  );
}

export default GamestartOverlay;
