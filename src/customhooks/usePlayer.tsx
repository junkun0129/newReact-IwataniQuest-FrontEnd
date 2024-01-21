import * as React from "react";
import { Component, useEffect, useState } from "react";
import * as Const from "../const";
import {
  directionType,
  picturePxType,
  playerPosType,
} from "../types/playerTypes";
import useDirectionHandler from "./useDirectionHandler";
import { collisionArray } from "../assets/collisionTiles";
import { collisionChecker } from "../helpers/collisionChecker";
function usePlayer() {
  const direction = useDirectionHandler();
  const [playerPos, setPlayerPos] = useState<playerPosType>({
    x: 1000,
    y: 600,
  });
  const [isMoving, setIsMoving] = useState<boolean>(true);
  const [preCollisionDirection, setPreCollisionDirection] =
    useState<directionType>();

  const [frameCount, setFrameCount] = useState<number>(0);
  const [picturePx, setPicturePx] = useState<picturePxType>({
    column: 0,
    row: 0,
  });

  const [prePictureDirection, setPrePictureDirection] =
    useState<directionType>();

  //observe collision by player's position on the DOM
  useEffect(() => {
    collisionArray.forEach((collisionBlock, i) => {
      collisionChecker({
        direction,
        passive: collisionBlock,
        active: playerPos,
        callback: () => {
          setIsMoving(false);
          setPreCollisionDirection(direction);
        },
      });
    });
  }, [playerPos]);

  //observe collision when player's direction changes
  useEffect(() => {
    let isCollision = false;
    if (direction) {
      setPrePictureDirection(direction);
      collisionArray.forEach((collisionBlock, i) => {
        collisionChecker({
          direction,
          passive: collisionBlock,
          active: playerPos,
          callback: () => {
            setIsMoving(false);
            isCollision = true;
          },
        });
      });
    } else {
      isCollision = true;
    }

    if (!isCollision) {
      setIsMoving(true);
    }
  }, [direction]);

  const directionHandler = (direction: directionType) => {
    let isCalled: boolean = false;
    if (!isMoving) return;
    if (preCollisionDirection === direction) {
      collisionArray.forEach((collisionBlock, i) => {
        collisionChecker({
          direction,
          passive: collisionBlock,
          active: playerPos,
          callback: () => {
            isCalled = true;
          },
        });
      });
    }
    if (isCalled) return;
    switch (direction) {
      case "up":
        setPlayerPos((pre) => ({
          ...pre,
          y: pre.y - Const.playerSpeed,
        }));
        break;
      case "down":
        setPlayerPos((pre) => ({
          ...pre,
          y: pre.y + Const.playerSpeed,
        }));
        break;
      case "left":
        setPlayerPos((pre) => ({
          ...pre,
          x: pre.x - Const.playerSpeed,
        }));
        break;
      case "right":
        setPlayerPos((pre) => ({
          ...pre,
          x: pre.x + Const.playerSpeed,
        }));
        break;
    }
  };

  //sprite controll
  useEffect(() => {
    setPicturePx(
      Const.spriteController(direction, frameCount, prePictureDirection)
    );
    if (frameCount > 20) {
      setFrameCount(0);
    }
  }, [frameCount]);

  useEffect(() => {
    console.log(prePictureDirection);
  }, [prePictureDirection]);

  const playerUpdate = () => {
    directionHandler(direction);
    setFrameCount((pre) => pre + 1);
  };

  const Player = () => {
    const playerStyle: React.CSSProperties = {
      position: "absolute",
      width: `${Const.screenTileSize}px`,
      height: `${Const.screenTileSize}px`,
      backgroundImage: "url(sample.png)",
      backgroundPosition: `${picturePx.row}px ${picturePx.column}px`,
      // backgroundSize: `300%`,
      transform: `translate(calc(50vw), calc(50vh))`,
    };
    return <div style={playerStyle}></div>;
  };

  return {
    direction,
    playerPos,
    isMoving,
    Player,
    playerUpdate,
  };
}

export default usePlayer;
