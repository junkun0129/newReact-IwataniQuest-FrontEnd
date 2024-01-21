import * as React from "react";
import * as Const from "./const";
type PlayerProps = {};
const Player = React.forwardRef<HTMLDivElement, { tileSize: number }>(
  ({ tileSize }, ref) => {
    const playerStyle: React.CSSProperties = {
      position: "absolute",
      width: `${Const.screenTileSize}px`,
      height: `${Const.screenTileSize}px`,
      backgroundColor: "blue",
      transform: `translate(calc(50vw), calc(50vh))`,
    };

    return <div ref={ref} style={playerStyle}></div>;
  }
);

export default Player;
