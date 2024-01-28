import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fieldStateType } from "../../types/gameStateTypes";
import { dialogType } from "../../types/playerTypes";

type initialStateType = {
  fieldState: fieldStateType;
  dialog: dialogType | null;
};

const initialState: initialStateType = {
  fieldState: "walk",
  dialog: null,
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
        dialog: null,
      };
    },
    changeFieldState: (state, action: PayloadAction<fieldStateType>) => {
      state.fieldState = action.payload;
    },
  },
});

export const fieldStateReducer = fieldStateSlice.reducer;
export const { startTalking, endTalking, changeFieldState } =
  fieldStateSlice.actions;
