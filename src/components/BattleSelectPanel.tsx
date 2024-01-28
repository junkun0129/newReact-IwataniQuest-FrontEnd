import * as React from "react";
import { Component, useEffect, useState } from "react";
import BattleSelectButton from "./BattleSelectButton";
import { useAppDispatch } from "../store/store";
import { playerAttack } from "../store/slices/BattleSystemSlice";
function BattleSelectPanel() {
  const dispatch = useAppDispatch();
  const [playerMove, setplayerMove] = useState<string>("");
  useEffect(() => {
    switch (playerMove) {
      case "こうげき":
        dispatch(playerAttack(0));
        break;
    }
  }, [playerMove]);
  return (
    <>
      <BattleSelectButton
        label={"こうげき"}
        onclick={(label) => setplayerMove(label)}
      />
      <BattleSelectButton
        label={"まほう"}
        onclick={(label) => setplayerMove(label)}
      />
      <BattleSelectButton
        label={"どうぐ"}
        onclick={(label) => setplayerMove(label)}
      />
      <BattleSelectButton
        label={"にげる"}
        onclick={(label) => setplayerMove(label)}
      />
    </>
  );
}

export default BattleSelectPanel;
