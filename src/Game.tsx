import * as React from "react";
import { Component, useEffect, useRef, useState } from "react";
import Player from "./Player";
import useDirectionHandler from "./customhooks/useDirectionHandler";
import {
  collisionArray,
  collisionMapType,
  damiMapCollisionTilesArray,
  getCollisionArrayByColumn,
} from "./assets/collisionTiles";
import * as Const from "./const";
import { collisionChecker } from "./helpers/collisionChecker";
import { delay } from "./helpers/delay";
import Map from "./Map";
import { directionType, playerPosType } from "./types/playerTypes";
import usePlayer from "./customhooks/usePlayer";

function Game() {
  //values -----------------------------------------------------------------------

  const gameLoopRef = useRef<any>(null);
  const { direction, isMoving, playerPos, Player, playerUpdate } = usePlayer();
  // useEffects -----------------------------------------------------------------------
  useEffect(() => {
    gameloop();
    return () => {
      cancelAnimationFrame(gameLoopRef.current);
    };
  }, [direction, isMoving]);

  //const functions -----------------------------------------------------------------------
  const gameloop = () => {
    playerUpdate();
    gameLoopRef.current = requestAnimationFrame(gameloop);
  };

  return (
    <>
      <div
        style={{
          width: `100vw`,
          height: `100vh`,
          position: "relative",
          backgroundColor: "black",
          overflow: "hidden",
        }}
      >
        <Map x={playerPos.x} y={playerPos.y}></Map>
        <Player></Player>
      </div>
    </>
  );
}

export default Game;
