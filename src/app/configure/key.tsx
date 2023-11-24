"use client";

import useKeyboardStore from "@/store/keyboard-store";
import useSelectionStore from "@/store/selection-store";
import { Key, keys, keycodeToKey, getKey } from "@/utils/keys";
import clsx from "clsx";
import { useRef, useState } from "react";
import useFitText from "use-fit-text";
import { TextFit } from "react-textfit";

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

  const startChangingKey = async () => {
    updateChangingKey({ row: props.row, col: props.col });
    // await keyboard?.setKey(
    //   selectedLayer,
    //   props.row,
    //   props.col,
    //   keys["KC_BACKSPACE"].keycode,
    // );
    // updateKeyboard();
  };

  let key: Key | undefined = undefined;
  if (props.keycode !== null) {
    key = getKey(props.keycode);
    // console.log(key);
    if (key === undefined) {
      // console.log(props.row, props.col, props.keycode);
    }
    // console.log(key.click, keycode, props.keycode);
  }

  return (
    <div className="w-full h-full tooltip" data-tip={key?.description}>
      <button
        onClick={startChangingKey}
        className={clsx(
          "relative p-0 text-xl flex flex-col items-center justify-center leading-none w-full h-full font-medium btn btn-outline",
          changingKey?.row === props.row &&
            changingKey?.col === props.col &&
            "animate-pulse btn-info",
        )}
      >
        <div className="font-english text-xl">{key?.unicode ?? key?.click}</div>
        {key?.held !== undefined && (
          <div className="font-english text-sm">{key.held}</div>
        )}
        {/* {key?.persian !== undefined && ( */}
        {/*   <div className="absolute right-1.5 bottom-1.5 font-semibold"> */}
        {/*     {key.persian} */}
        {/*   </div> */}
        {/* )} */}

        {/* <div className="absolute top-0 left-0 right-0"> */}
        {/*   {bToK[props.keycode]} */}
        {/* </div> */}
      </button>
    </div>
  );
}
