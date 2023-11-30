"use client";

import useKeyboardStore from "@/store/keyboard-store";
import { useRef } from "react";
import useMeasure from "react-use-measure";
import Key from "./key";
import _ from "lodash";
import useSelectionStore from "@/store/selection-store";
import KeySelector from "./key-selector";

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
              ...(key.r !== null && { transform: `rotate(${key.r}deg)` }),
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
      <KeySelector />
    </div>
  );
}
