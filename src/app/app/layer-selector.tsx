"use client";

import useKeyboardStore from "@/store/keyboard-store";
import clsx from "clsx";

export default function LayerSelector(props: {
  layer: number;
  setLayer: (layer: number) => void;
}) {
  const layers = useKeyboardStore((state) => state.layers);

  return (
    <div className="flex tabs tabs-bordered mb-4" dir="ltr">
      {Array.from(Array(layers).keys()).map((layer) => (
        <button
          key={layer}
          className={clsx("tab", layer === props.layer && "tab-active")}
          onClick={() => props.setLayer(layer)}
        >
          {layer + 1}
        </button>
      ))}
    </div>
  );
}
