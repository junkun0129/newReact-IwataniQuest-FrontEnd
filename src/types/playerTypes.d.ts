import { mapNamesType } from "./mapTypes";

export type directionType = "up" | "down" | "left" | "right" | undefined;
export type playerPosType = {
  x: number;
  y: number;
};

export type picturePxType = {
  column: number;
  row: number;
};

export type dialogType = string[];
export type npcInstaceType = {
  id: number;
  x: number;
  y: number;
  dialog: dialogType;
  locatedMap: mapNamesType;
};

export type playerStatsType = {
  name: string;
  hp: number;
  at: number;
};
