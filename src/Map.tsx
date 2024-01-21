import * as React from "react";
import { Component } from "react";
import * as Const from "./const";
type PlayerPosType = {
  x: number;
  y: number;
};
function Map({ x, y }: PlayerPosType) {
  return (
    <>
      <div
        style={{
          position: "absolute",
          width: `${Const.screenTileSize * Const.mapGridNum.column}px`,
          height: `${Const.screenTileSize * Const.mapGridNum.row}px`,
          backgroundColor: "lightskyblue",
          transform: `translate(${-x + Const.screenWidth / 2}px, ${
            -y + Const.screenHeight / 2
          }px)`,
          backgroundImage: `url(DamiMap.png)`,
          backgroundSize: "cover",
        }}
      ></div>
    </>
  );
}

export default Map;
