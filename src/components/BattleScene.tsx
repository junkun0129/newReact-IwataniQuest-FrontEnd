import * as React from "react";
import { Component } from "react";
import BattleDialog from "./BattleDialog";
function BattleScene() {
  return (
    <>
      <div
        style={{
          position: "absolute",
          width: `100vw`,
          height: `100vh`,
          backgroundColor: "skyblue",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            backgroundColor: "beige",
          }}
        >
          <BattleDialog />
        </div>
      </div>
    </>
  );
}

export default BattleScene;
