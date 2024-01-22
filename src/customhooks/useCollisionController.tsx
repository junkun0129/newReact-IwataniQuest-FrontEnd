import * as React from "react";
import { Component, useState } from "react";
import { collisionArray } from "../assets/collisionTiles";
import { directionType, playerPosType } from "../types/playerTypes";
import { collisionChecker } from "../helpers/collisionChecker";

type useCollisionControllerProps = {
  active: playerPosType;
  direction: directionType;
};
function useCollisionController({
  active,
  direction,
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
  return { collisionController };
}

export default useCollisionController;
