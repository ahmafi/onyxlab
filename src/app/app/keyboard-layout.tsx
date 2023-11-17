"use client";

import useKeyboardStore from "@/store/keyboard-store";
import { Fragment, useRef, useState } from "react";
import useMeasure from "react-use-measure";
import Key from "./key";
import { bToK } from "@/via/keycodes";
import _ from "lodash";

export default function KeyboardLayout(props: { layer: number }) {
  const [definition, matrix] = useKeyboardStore((state) => [
    state.definition,
    state.matrix,
  ]);
  const [containerRef, containerBounds] = useMeasure();

  let x = 0;
  let y = 0;
  let r = 0;
  const maxX = useRef(0);
  const maxY = useRef(0);
  const keySize = _.clamp(
    maxX.current === 0 ? 0 : containerBounds.width / (maxX.current + 1),
    52,
    84,
  );

  console.log(matrix?.[0].map((m) => bToK[m]));

  console.log(maxX, containerBounds.width);
  return (
    <div
      ref={containerRef}
      className="relative"
      dir="ltr"
      style={{ height: `${(maxY.current + 2) * keySize}px` }}
    >
      {definition?.layouts.keymap.map((row, rowIndex) => {
        let lastWasObject = true;
        if (typeof row[0] === "object") {
          if (row[0].y) {
            y += row[0].y;
          }
        }
        x = 0;
        return (
          <Fragment key={rowIndex}>
            {row.map((col, colIndex) => {
              if (typeof col === "object") {
                if (col.x) {
                  x += col.x;
                  if ("r" in col) {
                    r = col.r;
                  }
                  lastWasObject = true;
                }
                return null;
              }
              if (!lastWasObject) {
                x += 1;
              }
              lastWasObject = false;
              if (x > maxX.current) {
                maxX.current = x;
              }
              if (Math.abs(y) > maxY.current) {
                maxY.current = Math.abs(y);
              }
              const [keyRow, keyCol] = col.split(",").map((s) => parseInt(s));
              return (
                <div
                  key={colIndex}
                  className="absolute flex items-center justify-center p-1"
                  style={{
                    width: `${keySize}px`,
                    height: `${keySize}px`,
                    left: `${
                      x * keySize +
                      (containerBounds.width - (maxX.current + 1) * keySize) / 2
                    }px`,
                    top: `${-y * keySize}px`,
                    transform: `rotate(${r}deg)`,
                  }}
                >
                  <Key
                    keycode={
                      matrix?.[props.layer]?.[
                        keyRow * definition.matrix.cols + keyCol
                      ] ?? null
                    }
                  />
                  {/* {keyRow + '' + keyCol} */}
                </div>
              );
            })}
          </Fragment>
        );
      })}
    </div>
  );
}
