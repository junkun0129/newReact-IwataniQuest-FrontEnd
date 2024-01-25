import * as React from "react";
import { Component, useEffect, useState } from "react";
import * as Const from "../const";
import { npcInstaceType, playerPosType } from "../types/playerTypes";
import { npcInstances } from "../assets/npcs";
import { useAppSelector } from "../store/store";

function useNPCs() {
  const [npcArray, setNpcArray] = useState<npcInstaceType[]>(npcInstances);
  const mapState = useAppSelector((state) => state.mapStateReducer.mapAsset);
  const NPCs = (player: playerPosType) => {
    const npcStyle = (npcX: number, npcY: number): React.CSSProperties => {
      return {
        position: "absolute",
        width: `${Const.screenTileSize}px`,
        height: `${Const.screenTileSize}px`,
        backgroundImage: "url(sample.png)",
        // backgroundPosition: `${0}px ${0}px`,
        transform: `translate(${-player.x + Const.screenWidth / 2 + npcX}px, ${
          -player.y + Const.screenHeight / 2 + npcY
        }px)`,
      };
    };

    return (
      <>
        {npcArray.map((npc, i) => {
          return (
            mapState.name === npc.locatedMap && (
              <div key={i} style={npcStyle(npc.x, npc.y)}></div>
            )
          );
        })}
      </>
    );
  };

  return { NPCs, npcArray };
}

export default useNPCs;
