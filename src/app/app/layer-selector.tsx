"use client";

import useKeyboardStore from "@/store/keyboard-store";

export default function LayerSelector(props: {
  layer: number;
  setLayer: (layer: number) => void;
}) {
  const layers = useKeyboardStore((state) => state.layers);

  return (
    <div className="flex mb-4" dir="ltr">
      {Array.from(Array(layers).keys()).map((layer) => (
        <div key={layer}>{layer}</div>
      ))}
    </div>
  );
}
