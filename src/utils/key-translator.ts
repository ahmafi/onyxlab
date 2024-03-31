import { Key, keycodeToKey, keys } from "./keys";

const funcs = {
  // _QK_MODS: 0x0100,
  // _QK_MODS_MAX: 0x1fff,
  _QK_MOD_TAP: 0x2000,
  // _QK_MOD_TAP_MAX: 0x3fff,
  _QK_LAYER_TAP: 0x4000,
  // _QK_LAYER_TAP_MAX: 0x4fff,
  _QK_LAYER_MOD: 0x5000,
  // _QK_LAYER_MOD_MAX: 0x51ff,
  _QK_TO: 0x5200,
  // _QK_TO_MAX: 0x521f,
  _QK_MOMENTARY: 0x5220,
  // _QK_MOMENTARY_MAX: 0x523f,
  _QK_DEF_LAYER: 0x5240,
  // _QK_DEF_LAYER_MAX: 0x525f,
  _QK_TOGGLE_LAYER: 0x5260,
  // _QK_TOGGLE_LAYER_MAX: 0x527f,
  _QK_ONE_SHOT_LAYER: 0x5280,
  // _QK_ONE_SHOT_LAYER_MAX: 0x529f,
  _QK_ONE_SHOT_MOD: 0x52a0,
  // _QK_ONE_SHOT_MOD_MAX: 0x52bf,
  _QK_LAYER_TAP_TOGGLE: 0x52c0,
  // _QK_LAYER_TAP_TOGGLE_MAX: 0x52df,
  _QK_LAYER_MOD_MASK: 0x1f,
  _QK_MACRO: 0x7700,
  // _QK_MACRO_MAX: 0x770f,
  _QK_KB: 0x7e00,
  // _QK_KB_MAX: 0x7eff,
};

export const MT_HELD: Record<string, Key> = {
  MOD_LCTL: { keycode: 0x0100, held: "Left Ctrl" },
  MOD_LSFT: { keycode: 0x0200, held: "Left Shift", heldUnicode: "⇧" },
  MOD_LALT: { keycode: 0x0400, held: "Left Alt" },
  MOD_LGUI: { keycode: 0x0800, held: "Left Meta" },
  MOD_RCTL: { keycode: 0x1100, held: "Right Ctrl" },
  MOD_RSFT: { keycode: 0x1200, held: "Right Shift" },
  MOD_RALT: { keycode: 0x1400, held: "Right Alt" },
  MOD_RGUI: { keycode: 0x1800, held: "Right Meta" },
  // MOD_HYPR: {keycode: },
  // MOD_MEH : {keycode: },
};

type MT_HELD_KEYS = keyof typeof MT_HELD;
type KEYS_NAMES = keyof typeof keys;

export function getKey(keycode: number): Key {
  const func = Object.entries(funcs)
    .slice()
    .reverse()
    .find(([funcName, funcKeycode]) =>
      (funcKeycode & keycode) === funcKeycode ? [funcName, funcKeycode] : false
    );
  if (func) {
    const basicKeyCode = 0xff & keycode;

    if (func[1] === funcs._QK_MOD_TAP) {
      const modifier = Object.entries(MT_HELD)
        .slice()
        .reverse()
        .find(([modKeyName, { keycode: modKeycode }]) =>
          (modKeycode & keycode) === modKeycode
            ? [modKeyName, modKeycode]
            : false
        );

      return {
        ...keycodeToKey[basicKeyCode],
        ...modifier?.[1],
        heldKeyName: modifier?.[0],
        keycode: keycode,
      };
    } else if (func[1] === funcs._QK_MOMENTARY) {
      const layer = 0xf & keycode;
      return {
        held: `MO(${layer})`,
        keycode,
      };
    }
  }
  return keycodeToKey[keycode] ?? undefined;
}

export function setModTap(clicked: KEYS_NAMES, held: MT_HELD_KEYS) {
  console.log("clicked", clicked);
  console.log("held", held);
  // if (clicked > 0xff) {
  //   throw new Error("can't set this key for clicked (>0xFF)");
  // }

  const keycode =
    funcs._QK_MOD_TAP | MT_HELD[held].keycode | keys[clicked].keycode;
  // 100 00000 000000 MT
  //      1000 000000 LSFT
  //              100 A

  console.log("final", keycode);
  return keycode;
}

export function setLayerTap(clicked: KEYS_NAMES, held: MT_HELD_KEYS) {
  console.log("clicked", clicked);
  console.log("held", held);
  // if (clicked > 0xff) {
  //   throw new Error("can't set this key for clicked (>0xFF)");
  // }

  const keycode =
    funcs._QK_LAYER_TAP | MT_HELD[held].keycode | keys[clicked].keycode;
  // 100 00000 000000 MT
  //      1000 000000 LSFT
  //              100 A

  console.log("final", keycode);
  return keycode;
}
