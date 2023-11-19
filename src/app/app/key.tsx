import useKeyboardStore from "@/store/keyboard-store";
import useSelectionStore from "@/store/selection-store";
import { Key, keys, nameToKeycode } from "@/utils/keys";
import clsx from "clsx";

export default function Key(props: {
  keycode: number | null;
  row: number;
  col: number;
}) {
  const changingKey = useSelectionStore((state) => state.changingKey);
  const updateChangingKey = useSelectionStore(
    (state) => state.updateChangingKey,
  );
  const keyboard = useKeyboardStore((state) => state.keyboard);
  const selectedLayer = useSelectionStore((state) => state.layer);
  const updateKeyboard = useKeyboardStore((state) => state.updateKeyboard);

  const startChangingKey = async () => {
    updateChangingKey({ row: props.row, col: props.col });
    await keyboard?.setKey(
      selectedLayer,
      props.row,
      props.col,
      keys["KC_BACKSPACE"].keycode,
    );
    updateKeyboard();
  };

  let key: Key = { click: "", keycode: 0 };
  if (props.keycode !== null) {
    const keycode: string = nameToKeycode[props.keycode];
    key = keys[keycode] ?? { click: "??" };
    // console.log(key.click, keycode, props.keycode);
  }

  return (
    <div className="w-full h-full tooltip" data-tip={key?.description}>
      <button
        onClick={startChangingKey}
        className={clsx(
          "relative flex items-center justify-center w-full h-full text-2xl font-medium btn btn-outline",
          changingKey?.row === props.row &&
            changingKey?.col === props.col &&
            "animate-pulse btn-info",
        )}
      >
        <div className="">{key.unicode ?? key.click}</div>
        <div className="absolute right-1.5 bottom-1.5 text-lg font-semibold">
          {key?.persian}
        </div>
        {/* <div className="absolute text-xs top-0 left-0 right-0"> */}
        {/*   {bToK[props.keycode]} */}
        {/* </div> */}
      </button>
    </div>
  );
}
