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
type directionType = "up" | "down" | "left" | "right" | undefined;

function Game() {
  //values -----------------------------------------------------------------------
  const screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  const screenHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

  const gameLoopRef = useRef<any>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const playerSpeed = 10;
  const [playerPos, setPlayerPos] = useState({
    x: 0,
    y: 0,
  });
  const direction = useDirectionHandler();
  let collisionGlobalArray: collisionMapType[] | null = null;

  // useEffects -----------------------------------------------------------------------
  useEffect(() => {
    gameloop();
    return () => {
      cancelAnimationFrame(gameLoopRef.current);
    };
  }, [direction]);

  useEffect(() => {}, []);

  //const functions -----------------------------------------------------------------------

  const gameloop = () => {
    directionHandler(direction);
    collisionArray.forEach((collisionBlock, i) => {
      collisionChecker({
        direction,
        passive: collisionBlock,
        active: playerPos,
        callback: () => {
          console.log("hit");
        },
      });
    });
    gameLoopRef.current = requestAnimationFrame(gameloop);
  };

  const directionHandler = (direction: directionType) => {
    switch (direction) {
      case "up":
        setPlayerPos((pre) => ({
          ...pre,
          y: pre.y - playerSpeed,
        }));
        break;
      case "down":
        setPlayerPos((pre) => ({
          ...pre,
          y: pre.y + playerSpeed,
        }));
        break;
      case "left":
        setPlayerPos((pre) => ({
          ...pre,
          x: pre.x - playerSpeed,
        }));
        break;
      case "right":
        setPlayerPos((pre) => ({
          ...pre,
          x: pre.x + playerSpeed,
        }));
        break;
    }
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
        <div
          style={{
            position: "absolute",
            width: `${Const.screenTileSize * Const.mapGridNum.column}px`,
            height: `${Const.screenTileSize * Const.mapGridNum.row}px`,
            backgroundColor: "lightskyblue",
            transform: `translate(${-playerPos.x + screenWidth / 2}px, ${
              -playerPos.y + screenHeight / 2
            }px)`,
            backgroundImage: `url(DamiMap.png)`,
            backgroundSize: "cover",
          }}
        ></div>
        <Player ref={playerRef} tileSize={Const.screenTileSize}></Player>
      </div>
    </>
  );
}

export default Game;
