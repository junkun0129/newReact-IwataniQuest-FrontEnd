import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { mapAssetsType } from "../../types/mapTypes";
import {
  collisionArray,
  damiMapCollisionTilesArray,
  mapAssets,
  mapedDamiMapTilesArray,
} from "../../assets/collisionTiles";

type initialStateType = {
  mapAsset: mapAssetsType;
};

const initialState: initialStateType = {
  mapAsset: {
    name: "dami1",
    mapUrl: "DamiMap.png",
    collisionTileArray: mapedDamiMapTilesArray,
  },
};

export const mapStateSlice = createSlice({
  name: "mapState",
  initialState,
  reducers: {
    mapChange: (state, action: PayloadAction<string>) => {
      const newMapAssets: mapAssetsType = mapAssets.filter(
        (asset) => asset.name === action.payload
      )[0];
      return {
        mapAsset: newMapAssets,
      };
    },
  },
});

export const mapStateReducer = mapStateSlice.reducer;
export const { mapChange } = mapStateSlice.actions;
