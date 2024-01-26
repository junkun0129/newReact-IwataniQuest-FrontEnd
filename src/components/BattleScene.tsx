import * as React from "react";
import { Component, useState } from "react";
import BattleDialog from "./BattleDialog";
function BattleScene() {
  const playerState = 0;
  const enemyState = 1;
  const [state, setState] = useState(playerState);
  const [count, setCount] = useState(0);
  const dialog = [
    "敵が現れた",
    "おまえのターン",
    "戦うとか",
    "敵のターン",
    "敵の攻撃！、３のダメージ",
    "お前のターン",
  ];
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
