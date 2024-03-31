"use client";

import Drawer from "@/components/drawer";
import KeyShape from "@/components/key-shape";
import useKeyboardStore from "@/store/keyboard-store";
import useSelectionStore, { KeyParts } from "@/store/selection-store";
import { MT_HELD, getKey, setModTap } from "@/utils/key-translator";
import { keys } from "@/utils/keys";
import clsx from "clsx";

export default function KeySelector() {
  const { selectedLayer, changingKey, updateChangingKey, unsetChangingKey } =
    useSelectionStore((state) => ({
      selectedLayer: state.layer,
      changingKey: state.changingKey,
      updateChangingKey: state.updateChangingKey,
      unsetChangingKey: state.unsetChangingKey,
    }));
  const { keyboard, updateKeyboard } = useKeyboardStore((state) => ({
    keyboard: state.keyboard,
    updateKeyboard: state.updateKeyboard,
  }));

  console.log("changingKey", changingKey);

  const changeKey = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const selectedKeyName = event.currentTarget.dataset["id"];

    if (changingKey === null || typeof selectedKeyName !== "string") return;

    console.log(selectedKeyName);

    // const clickedKeycode = await keyboard?.getKey(
    //   selectedLayer,
    //   changingKey.position.row,
    //   changingKey.position.col
    // );
    //
    // if (clickedKeycode === undefined) return;

    // 1. clicked + held +
    // 2. clicked + held -
    // 3. clicked - held +
    // 4. clicked - held -
    //
    // a. clicked
    // b. held

    let newKeyCode = changingKey.key?.keycode;

    if (changingKey.part === "clicked") {
      if (
        changingKey.key?.keyName !== undefined &&
        changingKey.key?.heldKeyName !== undefined
      ) {
        newKeyCode = setModTap(selectedKeyName, changingKey.key.heldKeyName);
        await keyboard?.setKey(
          selectedLayer,
          changingKey.position.row,
          changingKey.position.col,
          newKeyCode
        );
      }
      if (
        changingKey.key?.keyName !== undefined &&
        changingKey.key?.heldKeyName === undefined
      ) {
        newKeyCode = keys[selectedKeyName].keycode;
        await keyboard?.setKey(
          selectedLayer,
          changingKey.position.row,
          changingKey.position.col,
          newKeyCode
        );
      }
      if (
        changingKey.key?.keyName === undefined &&
        changingKey.key?.heldKeyName !== undefined
      ) {
        newKeyCode = setModTap(selectedKeyName, changingKey.key.heldKeyName);
        await keyboard?.setKey(
          selectedLayer,
          changingKey.position.row,
          changingKey.position.col,
          newKeyCode
        );
      }
      if (
        changingKey.key?.keyName === undefined &&
        changingKey.key?.heldKeyName !== undefined
      ) {
        newKeyCode = keys[selectedKeyName].keycode;
        await keyboard?.setKey(
          selectedLayer,
          changingKey.position.row,
          changingKey.position.col,
          newKeyCode
        );
      }
    }

    if (changingKey.part === "held") {
      if (
        changingKey.key?.keyName !== undefined &&
        changingKey.key?.heldKeyName !== undefined
      ) {
        newKeyCode = setModTap(changingKey.key.keyName, selectedKeyName);
        await keyboard?.setKey(
          selectedLayer,
          changingKey.position.row,
          changingKey.position.col,
          newKeyCode
        );
      }
      if (
        changingKey.key?.keyName !== undefined &&
        changingKey.key?.heldKeyName === undefined
      ) {
        newKeyCode = setModTap(changingKey.key.keyName, selectedKeyName);
        await keyboard?.setKey(
          selectedLayer,
          changingKey.position.row,
          changingKey.position.col,
          newKeyCode
        );
      }
    }

    // console.log(changingKey.key);
    //
    // await keyboard?.setKey(
    //   selectedLayer,
    //   changingKey.position.row,
    //   changingKey.position.col,
    //   changingKey.key?.held !== undefined || changingKey.part === "held"
    //     ? setModTap(clickedKeycode, id)
    //     : keys[id].keycode
    // );
    //
    if (newKeyCode === undefined) return;

    updateChangingKey({
      position: changingKey.position,
      part: changingKey.part,
      key: getKey(newKeyCode),
    });
    updateKeyboard();
  };

  const setChangingPart = (event: React.MouseEvent<HTMLButtonElement>) => {
    const part = event.currentTarget.dataset.part as KeyParts;
    if (changingKey === null) return;
    updateChangingKey({
      ...changingKey,
      part,
    });
  };

  // console.log(changingKey?.key?.keyName);

  return (
    <Drawer open={changingKey !== null} onClose={unsetChangingKey}>
      <div className="flex gap-4 h-full items-center">
        <div className="flex w-40 h-40 gap-2 flex-shrink-0 border-2 text-2xl border-current rounded-2xl flex-col items-center justify-center">
          {/* <KeyShape keyData={changingKey?.key} /> */}
          <button
            data-part="clicked"
            onClick={setChangingPart}
            className={clsx(
              "px-3 py-1 rounded-lg border-2 border-current",
              changingKey?.part === "clicked" && "animate-pulse text-info"
            )}
          >
            {changingKey?.key?.unicode ?? changingKey?.key?.click}
          </button>
          <button
            data-part="held"
            onClick={setChangingPart}
            disabled={
              changingKey?.key?.keyName === undefined ||
              changingKey?.key.keyName === "KC_NO"
            }
            className={clsx(
              "px-3 py-1 rounded-lg border-2 border-current disabled:border-gray-600",
              changingKey?.part === "held" && "animate-pulse text-info"
            )}
          >
            {changingKey?.key?.heldUnicode ??
              changingKey?.key?.held ??
              "\u00A0\u00A0"}
          </button>
        </div>
        <ul className="overflow-y-auto h-full flex flex-wrap gap-2">
          {changingKey?.part === "clicked" &&
            Object.entries(keys).map(([keyName, key]) => (
              <li key={keyName} className="w-16 h-16">
                <KeyShape id={keyName} keyData={key} onClick={changeKey} />
              </li>
            ))}
          {changingKey?.part === "held" &&
            Object.entries(MT_HELD).map(([keyName, key]) => (
              <li key={keyName} className="w-16 h-16">
                <KeyShape id={keyName} keyData={key} onClick={changeKey} />
              </li>
            ))}
        </ul>
      </div>
    </Drawer>
  );
}
