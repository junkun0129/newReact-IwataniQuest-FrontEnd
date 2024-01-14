type mapGridNumType = {
  column: number;
  row: number;
};
export const mapGridNum: mapGridNumType = {
  column: 50,
  row: 30,
};
export const originalTilesSize: number = 32;
export const scale: number = 1;
export const screenTileSize: number = originalTilesSize * scale;
export const collisionIndex: number = 4;
export const playerSpeed: number = 10;