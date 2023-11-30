"use client";

import Drawer from "@/components/drawer";
import KeyShape from "@/components/key-shape";
import useKeyboardStore from "@/store/keyboard-store";
import useSelectionStore, { KeyParts } from "@/store/selection-store";
import { MT_HELD, setModTap } from "@/utils/key-translator";
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

  const changeKey = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const id = event.currentTarget.dataset["id"];

    if (changingKey === null || typeof id !== "string") return;

    const clickedKeycode = await keyboard?.getKey(
      selectedLayer,
      changingKey.position.row,
      changingKey.position.col,
    );

    if (clickedKeycode === undefined) return;

    await keyboard?.setKey(
      selectedLayer,
      changingKey.position.row,
      changingKey.position.col,
      // keys[id].keycode,
      setModTap(clickedKeycode, id),
    );

    updateChangingKey({
      position: changingKey.position,
      part: "clicked",
      key: keys[id],
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
              changingKey?.part === "clicked" && "animate-pulse text-info",
            )}
          >
            {changingKey?.key?.unicode ?? changingKey?.key?.click}
          </button>
          <button
            data-part="held"
            onClick={setChangingPart}
            className={clsx(
              "px-3 py-1 rounded-lg border-2 border-current",
              changingKey?.part === "held" && "animate-pulse text-info",
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
