import * as React from "react";
import { Component, useEffect, useState } from "react";
import * as Const from "./const";
import { useAppDispatch, useAppSelector } from "./store/store";
import { endTalking } from "./store/slices/fieldStateSlice";
function Dialog() {
  const fieldState = useAppSelector((state) => state.fieldStateReducer);
  const dispatch = useAppDispatch();
  const [textArrayCount, setTextArrayCount] = useState<number>(0);
  useEffect(() => {
    if (!fieldState.dialog) return;
    if (textArrayCount >= fieldState.dialog.length) {
      dispatch(endTalking());
      setTextArrayCount(0);
    }
  }, [textArrayCount]);
  useEffect(() => {
    addEventListener("keydown", handleDialog);
  }, []);

  const handleDialog = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      setTextArrayCount((pre) => pre + 1);
    }
  };

  return (
    <>
      {fieldState.dialog && (
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
            {fieldState.dialog && fieldState.dialog[textArrayCount]}
          </div>
        </div>
      )}
    </>
  );
}

export default Dialog;
