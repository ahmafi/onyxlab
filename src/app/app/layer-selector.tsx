"use client";

import useKeyboardStore from "@/store/keyboard-store";
import useSelectionStore from "@/store/selection-store";
import clsx from "clsx";

export default function LayerSelector() {
  const layers = useKeyboardStore((state) => state.layers);
  const selectedLayer = useSelectionStore((state) => state.layer);
  const updateLayer = useSelectionStore((state) => state.updateLayer);

  return (
    <div className="flex tabs tabs-bordered mb-4" dir="ltr">
      {Array.from(Array(layers).keys()).map((layer) => (
        <button
          key={layer}
          className={clsx("tab", layer === selectedLayer && "tab-active")}
          onClick={() => updateLayer(layer)}
        >
          {layer + 1}
        </button>
      ))}
    </div>
  );
}
