import { create } from "zustand";

type KeyPosition = {
  row: number;
  col: number;
};

type State = {
  changingKey: KeyPosition | null;
  layer: number;
};

type Action = {
  updateChangingKey: (changingKey: State["changingKey"]) => void;
  updateLayer: (layer: State["layer"]) => void;
};

const useSelectionStore = create<State & Action>((set) => ({
  changingKey: null,
  layer: 0,
  updateChangingKey: (changingKey) => set(() => ({ changingKey })),
  updateLayer: (layer) => set(() => ({ layer })),
}));

export default useSelectionStore;
