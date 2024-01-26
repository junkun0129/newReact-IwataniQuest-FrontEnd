import { motion } from "framer-motion";
import * as React from "react";
import { Component, useState } from "react";
import { enemies } from "../assets/enemies";
import { enemiesType } from "../types/enemiesType";
function BattleDialog() {
  const maxEnemiesNum = getRandomNumber(1, 3);
  // console.log(maxEnemiesNum);
  let choseEnemies: enemiesType[] = [];
  for (let i = 1; i <= maxEnemiesNum; i++) {
    const enemyIndex = getRandomNumber(0, enemies.length - 1);
    choseEnemies.push(enemies[enemyIndex]);
  }
  // console.log("choseEnemies :>> ", choseEnemies);
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
function getRandomNumber(min: number, max: number): number {
  // Math.floorは小数点以下を切り捨てるため、結果は整数になります
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
