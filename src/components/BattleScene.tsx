import * as React from "react";
import { Component, useEffect, useState } from "react";
import BattleDialog from "./BattleDialog";
function BattleScene() {
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
