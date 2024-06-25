import * as React from "react";
import { Component, useEffect, useState } from "react";
import { useAppSelector } from "../store/store";
import BattleSelectPanel from "./BattleSelectPanel";
import { enemiesType } from "../types/enemiesType";
import { Player } from "../types/playerTypes";
import { enemiesGenerate } from "../helpers/enemiesReducer";
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
    if (sequence === "enemiesAttack") {
      // write the code for enemies attack
    }
  }, [sequence]);

  const handleMove = (selectedStats: {
    label: string;
    ap: number;
    targetIndex: number;
  }) => {
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
    const newSelectedDialogIndex = selectedDialogIndex + 1;
    if (selectedDialogIndex < dialog.length) {
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
          {sequence === "playerAttackResult" && (
            <div onClick={handleDialogClick} className="">
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
