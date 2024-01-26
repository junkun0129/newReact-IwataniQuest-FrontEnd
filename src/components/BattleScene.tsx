import * as React from "react";
import { Component, useEffect, useState } from "react";
import BattleDialog from "./BattleDialog";
import { enemiesType } from "../types/enemiesType";
import { battleSequenceType } from "../types/gameStateTypes";
function BattleScene() {
  const [enemies, setEnemies] = useState<enemiesType[]>();
  const [sequence, setSequence] = useState<battleSequenceType>("start");

  useEffect(() => {
    switch (sequence) {
      case "start":
        break;
      case "player":
        break;
      case "enemy":
        break;
      case "end":
        break;
    }
  }, [sequence]);
  return (
    <>
      <div style={wrapper}>
        <div style={container}>
          <BattleDialog />
        </div>
      </div>
    </>
  );
}

export default BattleScene;

const wrapper: React.CSSProperties = {
  position: "absolute",
  width: `100vw`,
  height: `100vh`,
  backgroundColor: "skyblue",
};

const container: React.CSSProperties = {
  width: "100%",
  height: "100%",
  position: "relative",
  backgroundColor: "beige",
};
