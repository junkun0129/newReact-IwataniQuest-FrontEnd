import * as React from "react";
import { Component } from "react";
function Player({
  x,
  y,
  ref,
}: {
  x: number;
  y: number;
  ref: React.RefObject<HTMLElement> | null;
}) {
  const playerStyle: React.CSSProperties = {
    width: "100px",
    height: "100px",
    backgroundColor: "blue",

    transform: `translate(${x}px, ${y}px)`,
  };
  return (
    <>
      <div style={playerStyle}>player</div>
    </>
  );
}

export default Player;
