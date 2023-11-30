"use client";

import KeyShape from "@/components/key-shape";
import useKeyboardStore from "@/store/keyboard-store";
import useSelectionStore from "@/store/selection-store";
import { getKey } from "@/utils/key-translator";
import { Key, keys, keycodeToKey } from "@/utils/keys";
import clsx from "clsx";

export default function Key(props: {
  keycode: number | null;
  row: number;
  col: number;
  keySize: number;
}) {
  const { changingKey, updateChangingKey, selectedLayer } = useSelectionStore(
    (state) => ({
      changingKey: state.changingKey,
      updateChangingKey: state.updateChangingKey,
      selectedLayer: state.layer,
    }),
  );
  const { keyboard, updateKeyboard } = useKeyboardStore((state) => ({
    keyboard: state.keyboard,
    updateKeyboard: state.updateKeyboard,
  }));

  let key: Key | undefined = undefined;
  if (props.keycode !== null) {
    key = getKey(props.keycode);
    // console.log(key);
    if (key === undefined) {
      // console.log(props.row, props.col, props.keycode);
    }
    // console.log(key.click, keycode, props.keycode);
  }

  const startChangingKey = async () => {
    if (
      changingKey?.position.row === props.row &&
      changingKey?.position.col === props.col
    ) {
      updateChangingKey(null);
    } else {
      updateChangingKey({
        position: { row: props.row, col: props.col },
        key,
        part: "clicked",
      });
    }
  };

  return (
    <KeyShape
      keyData={key}
      onClick={startChangingKey}
      className={
        changingKey?.position.row === props.row &&
        changingKey?.position.col === props.col
          ? "animate-pulse btn-info"
          : undefined
      }
    />
  );
}
