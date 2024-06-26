import * as React from "react";
import { Component, useEffect, useState } from "react";
import BattleSelectPanel from "./BattleSelectPanel";
import { enemiesType } from "../types/enemiesType";
import { Player } from "../types/playerTypes";
import { enemiesGenerate } from "../helpers/enemiesReducer";
import {
  getRandomElementsFromArray,
  getRandomUniqueNumbers,
} from "../helpers/functions";
type Props = {
  playerProp: Player;
};
type Sequence = "select" | "playerAttackResult" | "enemiesAttack";
function BattleScene({ playerProp }: Props) {
  const [enemies, setnemies] = useState<enemiesType[]>([]);
  const [player, setplayer] = useState<Player>(playerProp);
  const [sequence, setSequence] = useState<Sequence>("select");
  const [dialogStats, setdialogStats] = useState<{
    dialog: string[];
    nextSequence: Sequence | null;
    selectedDialogIndex: number;
  }>({ dialog: [], nextSequence: null, selectedDialogIndex: 0 });

  useEffect(() => {
    const newEnemeis = enemiesGenerate();
    setnemies(newEnemeis);
  }, []);

  useEffect(() => {
    console.log(sequence);
    handleSequence();
  }, [sequence]);

  useEffect(() => {
    console.log(dialogStats);
  }, [dialogStats]);
  const handleSequence = () => {
    if (sequence === "enemiesAttack") {
      enemiesAttack();
    }
  };

  const enemiesAttack = () => {
    const activeIndexs = getRandomUniqueNumbers(0, enemies?.length - 1);
    console.log(activeIndexs);
    activeIndexs.map((index) => {
      const activeEnemy = enemies[index];
      const newLines = [
        `${activeEnemy.name}のこうげき！`,
        `${activeEnemy.at}のダメージ！`,
      ];
      const newDialogs = [...dialogStats.dialog, ...newLines];
      setdialogStats((pre) => ({ ...pre, dialog: newDialogs }));
    });
    setdialogStats((pre) => ({ ...pre, nextSequence: "select" }));
  };

  const handleMove = (selectedStats: {
    label: string;
    ap: number;
    targetIndex: number;
  }) => {
    console.log("object");
    const { label, ap, targetIndex } = selectedStats;
    const targetName = enemies[targetIndex].name;
    setSequence("playerAttackResult");
    if (label === "attack") {
      setdialogStats({
        nextSequence: "enemiesAttack",
        dialog: [`${targetName}にこうげき！！`, `${ap}ダメージ！！`],
        selectedDialogIndex: 0,
      });
    } else {
      setdialogStats({
        nextSequence: "enemiesAttack",
        dialog: [`${targetName}に${label}を使用！`, `${ap}ダメージ！！`],
        selectedDialogIndex: 0,
      });
    }
  };
  const handleDialogClick = () => {
    const { selectedDialogIndex, dialog, nextSequence } = dialogStats;
    if (selectedDialogIndex < dialog.length - 1) {
      const newSelectedDialogIndex = selectedDialogIndex + 1;
      setdialogStats((pre) => ({
        ...pre,
        selectedDialogIndex: newSelectedDialogIndex,
      }));
    } else {
      if (!nextSequence) return;
      setSequence(nextSequence);
      resetDialogStats();
    }
  };

  const resetDialogStats = () => {
    setdialogStats({ dialog: [], nextSequence: null, selectedDialogIndex: 0 });
  };

  return (
    <>
      <div style={wrapper}>
        <div style={container}>
          <div style={{ display: "flex" }}>
            {enemies ? (
              enemies.map((enemy, i) => {
                return (
                  <h1
                    style={{ padding: "100px", border: "black 1px solid" }}
                    key={i}
                  >
                    {enemy.name}
                  </h1>
                );
              })
            ) : (
              <div>Loading Enemies.....</div>
            )}
          </div>
          {enemies && sequence === "select" && (
            <BattleSelectPanel
              player={player}
              enemies={enemies}
              onMove={handleMove}
            />
          )}
          {sequence !== "select" && (
            <div
              onClick={handleDialogClick}
              className="w-full h-full bg-blue-300"
            >
              {dialogStats.dialog[dialogStats.selectedDialogIndex]}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default BattleScene;

const wrapper: React.CSSProperties = {
  position: "absolute",
  width: `100vw`,
  height: `100vh`,
  backgroundColor: "skyblue",
};

const container: React.CSSProperties = {
  width: "100%",
  height: "100%",
  position: "relative",
  backgroundColor: "beige",
};
