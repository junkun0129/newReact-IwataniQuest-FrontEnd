import * as React from "react";
import { Component, useState } from "react";
import { collisionArray } from "../assets/collisionTiles";
import {
  directionType,
  npcInstaceType,
  playerPosType,
} from "../types/playerTypes";
import { collisionChecker } from "../helpers/collisionChecker";

type useCollisionControllerProps = {
  active: playerPosType;
  direction: directionType;
  npcPosArray: npcInstaceType[];
};
function useCollisionController({
  active,
  direction,
  npcPosArray,
}: useCollisionControllerProps) {
  let isCollision = false;

  const collisionController = () => {
    collisionArray.forEach((collisionBlock, i) => {
      collisionChecker({
        direction,
        passive: collisionBlock,
        active,
        callback: () => {
          isCollision = true;
        },
      });
    });

    return isCollision;
  };

  let isCollisionNpc = false;
  const npcCollisionController = () => {
    npcPosArray.forEach((collisionBlock, i) => {
      collisionChecker({
        direction,
        passive: collisionBlock,
        active,
        callback: () => {
          isCollisionNpc = true;
        },
      });
    });

    return isCollisionNpc;
  };

  return { collisionController, npcCollisionController };
}

export default useCollisionController;
