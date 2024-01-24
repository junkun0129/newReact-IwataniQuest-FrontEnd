import * as React from "react";
import { Component, useEffect } from "react";
import * as Const from "./const";
import { useAppSelector } from "./store/store";
type PlayerPosType = {
  x: number;
  y: number;
};
function Map({ x, y }: PlayerPosType) {
  const mapAsset = useAppSelector((state) => state.mapStateReducer.mapAsset);

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
          backgroundImage: `url(${mapAsset.mapUrl})`,
          backgroundSize: "cover",
        }}
      ></div>
    </>
  );
}

export default Map;
