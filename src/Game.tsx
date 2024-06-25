import * as React from "react";
import { Component, useEffect, useRef, useState } from "react";
import Map from "./Map";
import usePlayer from "./customhooks/usePlayer";
import useNPCs from "./customhooks/useNPCs";
import Dialog from "./Dialog";
import BattleScene from "./components/BattleScene";
import { motion } from "framer-motion";
import { encounter } from "./helpers/functions";
import { enemiesGenerate } from "./helpers/enemiesReducer";
import { enemiesType } from "./types/enemiesType";
import { Player } from "./types/playerTypes";
type Props = { player: Player };
function Game({ player }: Props) {
  //values -----------------------------------------------------------------------

  const gameLoopRef = useRef<any>(null);

  const { NPCs, npcArray } = useNPCs({ mapState: "dami1" });
  const { direction, isMoving, playerPos, Player, playerUpdate } = usePlayer(
    npcArray,
    player.position
  );
  let encounterCoolDown = 0;
  const [fieldState, setfieldState] = useState<"walk" | "battle">("walk");
  // useEffects -----------------------------------------------------------------------
  useEffect(() => {
    gameloop();
    return () => {
      cancelAnimationFrame(gameLoopRef.current);
    };
  }, [direction, isMoving]);

  //const functions -----------------------------------------------------------------------
  const gameloop = () => {
    if (fieldState !== "battle") {
      handleEncount();
    }
    playerUpdate();
    gameLoopRef.current = requestAnimationFrame(gameloop);
  };

  const handleEncount = () => {
    encounterCoolDown -= 10;
    encounter(encounterCoolDown, (encountSetNum) => {
      encounterCoolDown = encountSetNum;
      setfieldState("battle");
    });
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
        <motion.div
          animate={
            fieldState === "battle" ? { display: "none" } : { display: "block" }
          }
        >
          <Map x={playerPos.x} y={playerPos.y} />
          <NPCs x={playerPos.x} y={playerPos.y} />
          <Dialog></Dialog>
          <Player />
        </motion.div>
        <motion.div
          animate={
            fieldState === "battle" ? { display: "block" } : { display: "none" }
          }
        >
          <BattleScene player={player} />
        </motion.div>
      </div>
    </>
  );
}

export default Game;
