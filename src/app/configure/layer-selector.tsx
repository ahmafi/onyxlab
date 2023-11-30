"use client";

import useKeyboardStore from "@/store/keyboard-store";
import useSelectionStore from "@/store/selection-store";
import { localizeDigits } from "@/utils/i18n";
import clsx from "clsx";

export default function LayerSelector() {
  const layers = useKeyboardStore((state) => state.layers);
  const { updateChangingKey, selectedLayer, updateLayer } = useSelectionStore(
    (state) => ({
      updateChangingKey: state.updateChangingKey,
      updateLayer: state.updateLayer,
      selectedLayer: state.layer,
    }),
  );

  const changeLayer = (event: React.MouseEvent<HTMLButtonElement>) => {
    const layer = parseInt(event.currentTarget.dataset.layer as string);
    // TODO: should we hide changing key when layer changes?
    // updateChangingKey(null);
    updateLayer(layer);
  };

  return (
    <div className="flex tabs tabs-bordered mb-4" dir="ltr">
      {Array.from(Array(layers).keys()).map((layer) => (
        <button
          key={layer}
          className={clsx("tab", layer === selectedLayer && "tab-active")}
          onClick={changeLayer}
          data-layer={layer}
        >
          {localizeDigits((layer + 1).toString())}
        </button>
      ))}
    </div>
  );
}
