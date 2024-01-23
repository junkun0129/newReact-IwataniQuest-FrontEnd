import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fieldStateType } from "../../types/gameStateTypes";
import { dialogType } from "../../types/playerTypes";

type initialStateType = {
  fieldState: fieldStateType;
  dialog: dialogType;
};

const initialState: initialStateType = {
  fieldState: "walk",
  dialog: [""],
};
export const fieldStateSlice = createSlice({
  name: "fieldState",
  initialState,
  reducers: {
    startTalking: (state, action: PayloadAction<dialogType>) => {
      return {
        fieldState: "talk",
        dialog: action.payload,
      };
    },
    endTalking: (state, action: PayloadAction) => {
      return {
        fieldState: "walk",
        dialog: [""],
      };
    },
  },
});

export const fieldStateReducer = fieldStateSlice.reducer;
export const { startTalking, endTalking } = fieldStateSlice.actions;
