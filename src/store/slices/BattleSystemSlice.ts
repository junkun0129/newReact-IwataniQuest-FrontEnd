import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { playerStatsType } from "../../types/playerTypes";
import { enemiesType } from "../../types/enemiesType";
import { battleSequenceType } from "../../types/gameStateTypes";
import {
  getRandomElementsFromArray,
  getRandomNumber,
} from "../../helpers/functions";

type initialStateType = {
  playerStats: playerStatsType;
  enemiesStats: enemiesType[] | null;
  sequence: battleSequenceType | null;
  battleDialog: string[] | null;
};

const initialState: initialStateType = {
  playerStats: { name: "junpei", hp: 20, at: 3 },
  enemiesStats: null,
  sequence: null,
  battleDialog: null,
};

export const battleSystemSlice = createSlice({
  name: "battleSystem",
  initialState,
  reducers: {
    battleStart: (state, action: PayloadAction<battleStartProps>) => {
      const nameArray = action.payload.enemiesStats.map((enemy, i) => {
        return enemy.name;
      });

      return {
        playerStats: state.playerStats,
        enemiesStats: action.payload.enemiesStats,
        sequence: "start",
        battleDialog: [`${nameArray.join(",")}が現れた！`],
      };
    },
    playerAttack: (state, action: PayloadAction<number>) => {
      if (!state.enemiesStats) return;
      state.enemiesStats[action.payload].hp -= state.playerStats.at;
      state.battleDialog = [
        `${state.playerStats.name}ののこうげき`,
        `${state.enemiesStats[action.payload].name}に${
          state.playerStats.at
        }のダメージ`,
      ];
      console.log(state.battleDialog);
      state.sequence = "player-move";
    },
    enemiesAttack: (state) => {
      if (!state.enemiesStats) return;
      state.sequence = "enemy-move";

      const attakEnemiesNum = getRandomNumber(0, state.enemiesStats.length);
      const selectedAttackEnemies = getRandomElementsFromArray(
        state.enemiesStats,
        attakEnemiesNum
      );
      const attackEnemiesDialog = selectedAttackEnemies.map((element, i) => {
        return [`${element.name}のこうげき!!`, `${element.at}ダメージ!!`];
      });
      const flattedattackEnemiesDialog = attackEnemiesDialog.flat();

      state.battleDialog =
        flattedattackEnemiesDialog.length !== 0
          ? flattedattackEnemiesDialog
          : ["敵は何もしなかった。"];
    },
    playerSelect: (state, action: PayloadAction) => {
      state.sequence = "player-select";
      state.battleDialog = ["playerSelect"];
    },
  },
});

export const battleSystemReducer = battleSystemSlice.reducer;
export const { battleStart, playerAttack, enemiesAttack, playerSelect } =
  battleSystemSlice.actions;

type battleStartProps = {
  enemiesStats: enemiesType[];
};
