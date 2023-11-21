"use client";

import useKeyboardStore from "@/store/keyboard-store";
import { Fragment, useRef } from "react";
import useMeasure from "react-use-measure";
import Key from "./key";
import _, { parseInt } from "lodash";
import clsx from "clsx";
import useSelectionStore from "@/store/selection-store";

export default function KeyboardLayout() {
  const [definition, matrix] = useKeyboardStore((state) => [
    state.definition,
    state.matrix,
  ]);
  const [containerRef, containerBounds] = useMeasure();
  const selectedLayer = useSelectionStore((state) => state.layer);

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
          if (row[0].y !== undefined) {
            y += row[0].y;
          }
        }

        x = 0;
        return (
          <Fragment key={rowIndex}>
            {row.map((col, colIndex) => {
              if (typeof col === "object") {
                if (col.x !== undefined) {
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
                  className={clsx(
                    "absolute flex items-center justify-center p-1",
                    containerBounds.width === 0 && "invisible", // hide until width calculations is done
                  )}
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
                  {containerBounds.width !== 0 && (
                    <Key
                      keycode={
                        matrix?.[selectedLayer]?.[
                          keyRow * definition.matrix.cols + keyCol
                        ] ?? null
                      }
                      row={keyRow}
                      col={keyCol}
                    />
                  )}
                  {/* {keyRow + "" + keyCol} */}
                </div>
              );
            })}
          </Fragment>
        );
      })}
    </div>
  );
}
