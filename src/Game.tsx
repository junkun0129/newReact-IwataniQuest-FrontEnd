import * as React from "react";
import { Component, useEffect, useRef, useState } from "react";
import Player from "./Player";
import useDirectionHandler from "./customhooks/useDirectionHandler";
type directionType = "up" | "down" | "left" | "right" | undefined;

function Game() {
  const gameLoopRef = useRef<any>(null);
  const playerRef = useRef<HTMLElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const playerSpeed = 1;
  const [playerPos, setPlayerPos] = useState({
    x: 10,
    y: 10,
  });
  const direction = useDirectionHandler();

  useEffect(() => {
    gameloop();
    return () => {
      cancelAnimationFrame(gameLoopRef.current);
    };
  }, [direction]);

  const gameloop = () => {
    directionHandler(direction);
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
      <Player x={playerPos.x} y={playerPos.y} ref={playerRef}></Player>
      <div
        ref={boxRef}
        style={{ width: "100px", height: "100px", backgroundColor: "red" }}
      ></div>
    </>
  );
}

export default Game;
