import * as React from "react";
import { Component, useEffect, useState } from "react";
import * as Const from "./const";
import { useAppSelector } from "./store/store";
function Dialog() {
  const fieldState = useAppSelector((state) => state.fieldStateReducer);
  const [dialogText, setDialogText] = useState<string>("");
  useEffect(() => {
    console.log("fieldState :>> ", fieldState);
    setDialogText(fieldState.dialog[0]);
  }, [fieldState]);
  return (
    <>
      <div
        style={{
          position: "absolute",
          width: Const.screenWidth,
          height: "250px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "95%",
            height: "85%",
            backgroundColor: "black",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "white solid 5px",
            color: "white",
          }}
        >
          {dialogText ? fieldState.dialog[0] : <div>nothing</div>}
        </div>
      </div>
    </>
  );
}

export default Dialog;
