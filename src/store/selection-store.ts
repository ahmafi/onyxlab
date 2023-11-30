import { Key } from "@/utils/keys";
import { create } from "zustand";

type KeyPosition = {
  row: number;
  col: number;
};

export type KeyParts = "clicked" | "held";

type State = {
  changingKey: {
    position: KeyPosition;
    part: KeyParts;
    key: Key | undefined;
  } | null;
  layer: number;
};

type Action = {
  updateChangingKey: (changingKey: State["changingKey"]) => void;
  updateLayer: (layer: State["layer"]) => void;
  unsetChangingKey: () => void;
};

const useSelectionStore = create<State & Action>((set) => ({
  changingKey: null,
  layer: 0,
  updateChangingKey: (changingKey) => set(() => ({ changingKey })),
  unsetChangingKey: () => set(() => ({ changingKey: null })),
  updateLayer: (layer) => set(() => ({ layer })),
}));

export default useSelectionStore;
