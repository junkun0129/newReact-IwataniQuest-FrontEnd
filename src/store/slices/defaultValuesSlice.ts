// defaultValuesSlice.ts
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = 1;
export const defaultValueSlice = createSlice({
  name: "defaultValue",
  initialState,
  reducers: {
    change: (state, action: PayloadAction<number>) => {
      return action.payload;
    },
  },
});

export const defaultValueReducer = defaultValueSlice.reducer;
export const { change } = defaultValueSlice.actions;
