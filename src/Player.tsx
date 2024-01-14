import * as React from "react";

const Player = React.forwardRef<HTMLDivElement, { tileSize: number }>(
  ({ tileSize }, ref) => {
    const playerStyle: React.CSSProperties = {
      position: "absolute",
      width: `${tileSize}px`,
      height: `${tileSize}px`,
      backgroundColor: "blue",
      transform: `translate(calc(50vw), calc(50vh))`,
    };

    return <div ref={ref} style={playerStyle}></div>;
  }
);

export default Player;
