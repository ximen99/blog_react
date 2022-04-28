import React, { Suspense, useState } from "react";
import Road from "ThreeDGame_page/Road";
import SportsCar from "ThreeDGame_page/SportsCar";
import PoliceCars from "ThreeDGame_page/PoliceCars";
import { useSnapshot } from "valtio";
import state from "ThreeDGame_page/appState";

function ResetComponents() {
  const [resetToggle, resetToggleApi] = useState(0);
  const snap = useSnapshot(state);
  const speed = snap.speed;

  if (snap.gameStart && !snap.gameStartPrevious) {
    resetToggleApi(resetToggle + 1);
    state.gameStartPrevious = true;
  }

  return (
    <Suspense key={resetToggle}>
      <SportsCar />
      <PoliceCars speed={speed} />
      <Road position={[0, -10, -450]} speed={speed} />
      <Road position={[0, -10, -1450]} speed={speed} />
    </Suspense>
  );
}

export default ResetComponents;
