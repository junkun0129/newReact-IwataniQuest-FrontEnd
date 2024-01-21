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
export const screenWidth =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
export const screenHeight =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;
