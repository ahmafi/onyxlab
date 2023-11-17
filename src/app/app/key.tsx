import { Key, keys } from "@/utils/keys";
import { bToK } from "@/via/keycodes";

export default function Key(props: { keycode: number | null }) {
  let key: Key = { click: "" };
  if (props.keycode !== null) {
    const keycode: string = bToK[props.keycode];
    key = keys[keycode] ?? { click: "??" };
    console.log(key.click, keycode, props.keycode);
  }
  return (
    <div className="w-full h-full tooltip" data-tip={key?.description}>
      <button className="select-none relative flex items-center justify-center w-full h-full border border-gray-50 text-sm rounded-md hover:bg-gray-700">
        <div>{key?.click}</div>
        <div className="absolute right-2 bottom-2">{key?.persian}</div>
        {/* <div className="absolute text-xs top-0 left-0 right-0"> */}
        {/*   {bToK[props.keycode]} */}
        {/* </div> */}
      </button>
    </div>
  );
}
