import { motion } from "framer-motion";
import * as React from "react";
import { Component, useEffect, useState } from "react";
import { enemiesGenerate } from "../helpers/enemiesReducer";
import { enemiesType } from "../types/enemiesType";
function BattleDialog() {
  return (
    <>
      <div style={wrapperStyle} onClick={() => console.log("object")}>
        <div style={containerStyle}>
          <motion.div
            whileHover={{
              border: "white 6px solid",
              borderRadius: "9px",
              cursor: "pointer",
            }}
            style={{
              color: "white",
              fontSize: "1.5rem",
              padding: "15px",
              borderRadius: "9px",
            }}
            onClick={() => console.log("asl")}
          >
            こうげき
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default BattleDialog;

const wrapperStyle: React.CSSProperties = {
  width: "100%",
  height: "30%",
  position: "absolute",
  bottom: "0px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const containerStyle: React.CSSProperties = {
  width: "98%",
  height: "90%",
  backgroundColor: "black",
  borderRadius: "15px",
  border: "white solid 7px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
