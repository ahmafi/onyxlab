import definitions, { Definition } from "@/definitions/definitions";
import { KeyboardAPI } from "@/via/keyboard-api";
import { WebVIADevice } from "@/via/types";
import { HID } from "@/via/usb-hid";
import { create } from "zustand";

type State = {
  connectedDevice: WebVIADevice | null | undefined;
  definition: null | Definition;
  keyboard: KeyboardAPI | null;
  layers: number | null;
  matrix: number[][] | null;
};

type Action = {
  updateConnectedDevice: (connectedDevice: State["connectedDevice"]) => void;
};

const useKeyboardStore = create<State & Action>((set) => ({
  connectedDevice: undefined,
  definition: null,
  keyboard: null,
  layers: null,
  matrix: null,
  updateConnectedDevice: async (connectedDevice) => {
    if (!connectedDevice) {
      set(() => ({ connectedDevice }));
      return;
    }
    const definition =
      definitions[`0x${connectedDevice.productId.toString(16)}`];
    const keyboard = new KeyboardAPI(connectedDevice.path);
    const layers = await keyboard.getLayerCount();
    const matrix: number[][] = [];
    for (let layerIndex = 0; layerIndex < layers; layerIndex++) {
      matrix.push(
        await keyboard.fastReadRawMatrix(definition.matrix, layerIndex),
      );
    }
    set(() => ({ connectedDevice, definition, keyboard, layers, matrix }));
  },
}));

export default useKeyboardStore;
