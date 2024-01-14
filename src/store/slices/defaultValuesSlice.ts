// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// type mapGridNumType = {
//   column: number;
//   row: number;
// };
// type initialStatetype = {
//   originalTileSize: number;
//   mapScale: number;
//   screenTileSize: number;
//   collisionIndex: number;
//   mapGridNum: mapGridNumType;
// };
// const originalTileSize = 32;
// const mapScale = 2;
// const collisionIndex = 4;
// const mapGridNum = {
//   column: 50,
//   row: 30,
// };

// const initialState: initialStatetype = {
//   originalTileSize,
//   mapScale,
//   screenTileSize: originalTileSize * mapScale,
//   collisionIndex,
//   mapGridNum,
// };
// export const mapConfigSlice = createSlice({
//   name: "mapConfig",
//   initialState,
//   reducers: {
//     createUser: (state, action: PayloadAction<userType>) => {
//       state = action.payload;
//     },
//   },
// });
// export const userReducer = userSlice.reducer;
// export const { createUser } = userSlice.actions;
