import * as React from "react";
import { Component, useEffect, useRef, useState } from "react";
import Player from "./Player";
import useDirectionHandler from "./customhooks/useDirectionHandler";
import {
  damiMapCollisionTilesArray,
  getCollisionArrayByColumn,
} from "./assets/collisionTiles";
type directionType = "up" | "down" | "left" | "right" | undefined;
type mapGridNum = {
  column: number;
  row: number;
};

function Game() {
  //values -----------------------------------------------------------------------
  const originalTilesSize: number = 32;

  const mapGridNum: mapGridNum = {
    column: 50,
    row: 30,
  };
  const scale: number = 2;
  const screenTilesize: number = originalTilesSize * scale;
  const collisionIndex: number = 4;
  const gameLoopRef = useRef<any>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const playerSpeed = 10;
  const [playerPos, setPlayerPos] = useState({
    x: 0,
    y: 0,
  });
  const direction = useDirectionHandler();

  // useEffects -----------------------------------------------------------------------
  useEffect(() => {
    gameloop();
    return () => {
      cancelAnimationFrame(gameLoopRef.current);
    };
  }, [direction]);

  useEffect(() => {
    const a = getCollisionArrayByColumn(
      damiMapCollisionTilesArray,
      mapGridNum.column,
      4
    );
    console.log(damiMapCollisionTilesArray.filter((e) => e === 4));
    console.log(a);
  }, []);

  //const functions -----------------------------------------------------------------------

  const gameloop = () => {
    directionHandler(direction);
    gameLoopRef.current = requestAnimationFrame(gameloop);
  };

  const directionHandler = (direction: directionType) => {
    switch (direction) {
      case "up":
        setPlayerPos((pre) => ({
          ...pre,
          y: pre.y + playerSpeed,
        }));
        break;
      case "down":
        setPlayerPos((pre) => ({
          ...pre,
          y: pre.y - playerSpeed,
        }));
        break;
      case "left":
        setPlayerPos((pre) => ({
          ...pre,
          x: pre.x + playerSpeed,
        }));
        break;
      case "right":
        setPlayerPos((pre) => ({
          ...pre,
          x: pre.x - playerSpeed,
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
            width: `${screenTilesize * mapGridNum.column}px`,
            height: `${screenTilesize * mapGridNum.row}px`,
            backgroundColor: "lightskyblue",
            transform: `translate(${playerPos.x}px, ${playerPos.y}px)`,
            backgroundImage: `url(DamiMap.png)`,
            backgroundSize: "cover",
          }}
        >
          <div
            style={{
              width: `${screenTilesize}px`,
              height: `${screenTilesize}px`,
              backgroundColor: "red",
            }}
          ></div>
          <div
            style={{
              width: `${screenTilesize}px`,
              height: `${screenTilesize}px`,
              backgroundColor: "red",
            }}
          ></div>
          <div
            style={{
              width: `${screenTilesize}px`,
              height: `${screenTilesize}px`,
              backgroundColor: "red",
            }}
          ></div>
        </div>
        <Player ref={playerRef} tileSize={screenTilesize}></Player>
      </div>
    </>
  );
}

export default Game;
