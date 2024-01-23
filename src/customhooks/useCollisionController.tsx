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
  npcArray: npcInstaceType[];
};
function useCollisionController({
  active,
  direction,
  npcArray,
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

  let CollisionNpc: npcInstaceType | null;
  const npcCollisionController = () => {
    npcArray.forEach((collisionBlock, i) => {
      collisionChecker({
        direction,
        passive: collisionBlock,
        active,
        callback: () => {
          CollisionNpc = npcArray[i];
        },
      });
    });

    return CollisionNpc;
  };

  return { collisionController, npcCollisionController };
}

export default useCollisionController;
