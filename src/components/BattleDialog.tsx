import { motion } from "framer-motion";
import * as React from "react";
import { Component } from "react";
function BattleDialog() {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "30%",
          //   backgroundColor: "salmon",
          position: "absolute",
          bottom: "0px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "98%",
            height: "90%",
            backgroundColor: "black",
            borderRadius: "15px",
            border: "white solid 7px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
