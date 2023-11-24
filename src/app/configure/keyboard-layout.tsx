"use client";

import useKeyboardStore from "@/store/keyboard-store";
import { Fragment, useRef } from "react";
import useMeasure from "react-use-measure";
import Key from "./key";
import _, { parseInt } from "lodash";
import clsx from "clsx";
import useSelectionStore from "@/store/selection-store";
import Drawer from "@/store/components/drawer";
import { keys } from "@/utils/keys";

export default function KeyboardLayout() {
  const [definition, matrix] = useKeyboardStore((state) => [
    state.definition,
    state.matrix,
  ]);
  const [containerRef, containerBounds] = useMeasure();
  const { selectedLayer, changingKey, unsetChangingKey } = useSelectionStore(
    (state) => ({
      selectedLayer: state.layer,
      changingKey: state.changingKey,
      unsetChangingKey: state.unsetChangingKey,
    }),
  );

  let x = 0;
  let y = 0;
  let r = 0;
  const maxX = useRef(0);
  const maxY = useRef(0);
  const keySize = _.clamp(
    maxX.current === 0 ? 0 : containerBounds.width / (maxX.current + 1),
    64,
    88,
  );

  return (
    <div
      ref={containerRef}
      className="relative"
      dir="ltr"
      style={{
        height: `${(maxY.current + 2) * keySize}px`,
        fontSize: `${keySize}px`,
      }}
    >
      {definition?.qmkLayout.map((key, keyIndex) => {
        maxX.current = Math.max(maxX.current, key.x);
        maxY.current = Math.max(maxY.current, key.y);
        console.log(key.r);
        return (
          <div
            className="absolute p-1 flex items-center justify-center"
            key={keyIndex}
            style={{
              left:
                key.x * keySize +
                (containerBounds.width - (maxX.current + 1) * keySize) / 2,
              top: key.y * keySize,
              width: keySize,
              height: keySize,
              transform: `rotate(${key.r}deg)`,
            }}
          >
            <Key
              keycode={
                matrix?.[selectedLayer]?.[
                  key.matrix[0] * definition.matrix.cols + key.matrix[1]
                ] ?? null
              }
              row={key.matrix[0]}
              col={key.matrix[1]}
              keySize={keySize}
            />
          </div>
        );
      })}
      <Drawer open={changingKey !== null} onClose={unsetChangingKey}>
        <ul className="overflow-y-auto">
          {Object.entries(keys).map(([keyName, key]) => (
            <li key={keyName}>{key.click}</li>
          ))}
        </ul>
      </Drawer>
    </div>
  );
}
