import * as React from "react";
import { Component, useEffect } from "react";
import * as Const from "../const";
import { playerPosType } from "../types/playerTypes";
const npcInstances = [{ id: 123123 }, { id: 21232 }];
function useNPCs() {
  const npcStyle: React.CSSProperties = {
    position: "absolute",
    width: `${Const.screenTileSize}px`,
    height: `${Const.screenTileSize}px`,
    backgroundImage: "url(sample.png)",
    backgroundPosition: `${0}px ${0}px`,
    // backgroundSize: `300%`,
    transform: `translate(calc(50vw), calc(50vh))`,
  };

  const NPCs = ({ x, y }: playerPosType) => {
    useEffect(() => {
      console.log("x :>> ", x);
      console.log("y :>> ", y);
    }, [x, y]);
    const playerStyle: React.CSSProperties = {
      position: "absolute",
      width: `${Const.screenTileSize}px`,
      height: `${Const.screenTileSize}px`,
      backgroundImage: "url(sample.png)",
      backgroundPosition: `${0}px ${0}px`,
      transform: `translate(${-x + Const.screenWidth / 2 + 700}px, ${
        -y + Const.screenHeight / 2 + 300
      }px)`,
      backgroundColor: "red",
    };
    return <div style={playerStyle}></div>;
  };

  return { NPCs };
}

export default useNPCs;
