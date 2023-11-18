import { Key, keys } from "@/utils/keys";
import { bToK } from "@/via/keycodes";

export default function Key(props: { keycode: number | null }) {
  let key: Key = { click: "" };
  if (props.keycode !== null) {
    const keycode: string = bToK[props.keycode];
    key = keys[keycode] ?? { click: "??" };
    // console.log(key.click, keycode, props.keycode);
  }
  return (
    <div className="w-full h-full tooltip" data-tip={key?.description}>
      <button className="relative flex items-center justify-center w-full h-full text-2xl font-medium btn btn-outline">
        <div className="">{key?.click}</div>
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
