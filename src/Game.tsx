import * as React from "react";
import { Component, useEffect, useRef, useState } from "react";
import Map from "./Map";
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
