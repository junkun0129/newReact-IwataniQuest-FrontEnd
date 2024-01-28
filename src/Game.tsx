import * as React from "react";
import { Component, useEffect, useRef, useState } from "react";
import Map from "./Map";
import usePlayer from "./customhooks/usePlayer";
import usePictureChange from "./customhooks/usePictureChange";
import useNPCs from "./customhooks/useNPCs";
import * as Const from "./const";
import Dialog from "./Dialog";
import BattleScene from "./components/BattleScene";
import { motion } from "framer-motion";
import { encounter } from "./helpers/functions";
import useEncounter from "./customhooks/useEncouner";
import { useAppDispatch, useAppSelector } from "./store/store";
import {
  battleStart,
  enemiesAttack,
  playerAttack,
} from "./store/slices/BattleSystemSlice";
import { enemiesGenerate } from "./helpers/enemiesReducer";
import { changeFieldState } from "./store/slices/fieldStateSlice";

function Game() {
  //values -----------------------------------------------------------------------
  const gameLoopRef = useRef<any>(null);
  const { NPCs, npcArray } = useNPCs();
  const { direction, isMoving, playerPos, Player, playerUpdate } =
    usePlayer(npcArray);
  let encounterCoolDown = 0;
  const fieldState = useAppSelector(
    (state) => state.fieldStateReducer.fieldState
  );
  const battleState = useAppSelector(
    (state) => state.battleSystemReducer.sequence
  );
  const dispatch = useAppDispatch();
  // useEffects -----------------------------------------------------------------------
  useEffect(() => {
    gameloop();
    return () => {
      cancelAnimationFrame(gameLoopRef.current);
    };
  }, [direction, isMoving]);

  //const functions -----------------------------------------------------------------------
  const gameloop = () => {
    //encounter
    if (fieldState === "walk") {
      encounterCoolDown -= 10;
      encounter(encounterCoolDown, (encountSetNum) => {
        encounterCoolDown = encountSetNum;
        const enemiesGenerated = enemiesGenerate();
        dispatch(changeFieldState("battle"));
        dispatch(battleStart({ enemiesStats: enemiesGenerated }));
      });
    }

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
          <BattleScene />
        </motion.div>

        <motion.div
          drag
          style={{
            position: "absolute",
            width: "500px",
            height: "100px",
            border: "1px black solid",
          }}
        >
          <button onClick={() => dispatch(changeFieldState("battle"))}>
            to Battle
          </button>
          <button onClick={() => dispatch(changeFieldState("walk"))}>
            to Field
          </button>
          <h1>current state : {fieldState}</h1>
          <button
            onClick={() =>
              dispatch(battleStart({ enemiesStats: enemiesGenerate() }))
            }
          >
            battleStart
          </button>
          <button onClick={() => dispatch(playerAttack(0))}>
            playerattack
          </button>
          <button onClick={() => dispatch(enemiesAttack())}>
            enemiesAttack
          </button>
          <h1>{battleState}</h1>
        </motion.div>
      </div>
    </>
  );
}

export default Game;
