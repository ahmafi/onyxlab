import { bToK } from "@/via/keycodes";

export default function Key(props: { keycode: number | null }) {
  return (
    <div className="flex items-center justify-center w-full h-full border border-gray-50 text-xs rounded-md hover:bg-gray-700">
      <div>{props.keycode && bToK[props.keycode]}</div>
    </div>
  );
}
