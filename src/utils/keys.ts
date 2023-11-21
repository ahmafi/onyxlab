type categories = "Basic" | "Media" | "Layers" | "Special";

export type Key = {
  keycode: number;
  keyName?: string;
  click?: string;
  clickMac?: string;
  clickWindows?: string;
  clickLinux?: string;
  unicode?: string;
  shift?: string;
  persian?: string;
  persianShift?: string;
  description?: string;
  categories?: categories[];
  num?: string;
  held?: string;
};

// TODO: better typing instead of key: string
// prettier-ignore
export const keys: Record<string, Key> = {
  "KC_NO": { keycode: 0x0000, click: "NO", categories: ["Basic"], description: "این کلید هیچ کاری نمی‌کنه!" },
  "KC_A": { keycode: 0x0004, click: "A", persian: "ش", persianShift: "ؤ", categories: ["Basic"] },
  "KC_B": { keycode: 0x0005, click: "B", persian: "ذ", persianShift: "‌", categories: ["Basic"] },
  "KC_C": { keycode: 0x0006, click: "C", persian: "ز", persianShift: "ژ", categories: ["Basic"] },
  "KC_D": { keycode: 0x0007, click: "D", persian: "ی", persianShift: "ي", categories: ["Basic"] },
  "KC_E": { keycode: 0x0008, click: "E", persian: "ث", persianShift: "ٍ", categories: ["Basic"] },
  "KC_F": { keycode: 0x0009, click: "F", persian: "ب", persianShift: "إ", categories: ["Basic"] },
  "KC_G": { keycode: 0x000a, click: "G", persian: "ل", persianShift: "أ", categories: ["Basic"] },
  "KC_H": { keycode: 0x000b, click: "H", persian: "ا", persianShift: "آ", categories: ["Basic"] },
  "KC_I": { keycode: 0x000c, click: "I", persian: "ه", persianShift: "ّ", categories: ["Basic"] },
  "KC_J": { keycode: 0x000d, click: "J", persian: "ت", persianShift: "ة", categories: ["Basic"] },
  "KC_K": { keycode: 0x000e, click: "K", persian: "ن", persianShift: "»", categories: ["Basic"] },
  "KC_L": { keycode: 0x000f, click: "L", persian: "م", persianShift: "«", categories: ["Basic"] },
  "KC_M": { keycode: 0x0010, click: "M", persian: "پ", persianShift: "ء", categories: ["Basic"] },
  "KC_N": { keycode: 0x0011, click: "N", persian: "د", persianShift: "ٔ", categories: ["Basic"] },
  "KC_O": { keycode: 0x0012, click: "O", persian: "خ", persianShift: "]", categories: ["Basic"] },
  "KC_P": { keycode: 0x0013, click: "P", persian: "ح", persianShift: "[", categories: ["Basic"] },
  "KC_Q": { keycode: 0x0014, click: "Q", persian: "ض", persianShift: "ْ", categories: ["Basic"] },
  "KC_R": { keycode: 0x0015, click: "R", persian: "ق", persianShift: "ً", categories: ["Basic"] },
  "KC_S": { keycode: 0x0016, click: "S", persian: "س", persianShift: "ئ", categories: ["Basic"] },
  "KC_T": { keycode: 0x0017, click: "T", persian: "ف", persianShift: "ُ", categories: ["Basic"] },
  "KC_U": { keycode: 0x0018, click: "U", persian: "ع", persianShift: "َ", categories: ["Basic"] },
  "KC_V": { keycode: 0x0019, click: "V", persian: "ر", persianShift: "ٰ", categories: ["Basic"] },
  "KC_W": { keycode: 0x001a, click: "W", persian: "ص", persianShift: "ٌ", categories: ["Basic"] },
  "KC_X": { keycode: 0x001b, click: "X", persian: "ط", persianShift: "ٓ", categories: ["Basic"] },
  "KC_Y": { keycode: 0x001c, click: "Y", persian: "غ", persianShift: "ِ", categories: ["Basic"] },
  "KC_Z": { keycode: 0x001d, click: "Z", persian: "ظ", persianShift: "ك", categories: ["Basic"] },
  "KC_1": { keycode: 0x001e, click: "1", shift: "!", persian: "۱", persianShift: "!", categories: ["Basic"] },
  "KC_2": { keycode: 0x001f, click: "2", shift: "@", persian: "۲", persianShift: "٬", categories: ["Basic"] },
  "KC_3": { keycode: 0x0020, click: "3", shift: "#", persian: "۳", persianShift: "٫", categories: ["Basic"] },
  "KC_4": { keycode: 0x0021, click: "4", shift: "$", persian: "۴", persianShift: "﷼", categories: ["Basic"] },
  "KC_5": { keycode: 0x0022, click: "5", shift: "%", persian: "۵", persianShift: "٪", categories: ["Basic"] },
  "KC_6": { keycode: 0x0023, click: "6", shift: "^", persian: "۶", persianShift: "×", categories: ["Basic"] },
  "KC_7": { keycode: 0x0024, click: "7", shift: "&", persian: "۷", persianShift: "،", categories: ["Basic"] },
  "KC_8": { keycode: 0x0025, click: "8", shift: "*", persian: "۸", persianShift: "*", categories: ["Basic"] },
  "KC_9": { keycode: 0x0026, click: "9", shift: "(", persian: "۹", persianShift: ")", categories: ["Basic"] },
  "KC_0": { keycode: 0x0027, click: "0", shift: ")", persian: "۰", persianShift: "(", categories: ["Basic"] },
  "KC_ENTER": { keycode: 0x0028, click: "Enter", unicode: '⏎' },
  "KC_ESCAPE": { keycode: 0x0029, click: "Esc" },
  "KC_BACKSPACE": { keycode: 0x002a, click: "Backspace", unicode: '⌫' },
  "KC_TAB": { keycode: 0x002b, click: "Tab", unicode: '⭾' },
  "KC_SPACE": { keycode: 0x002c, click: "Space", unicode: '␣' },
  "KC_MINUS": { keycode: 0x002d, click: "-", shift: "_" },
  "KC_EQUAL": { keycode: 0x002e, click: "=", shift: "+" },
  "KC_LEFT_BRACKET": { keycode: 0x002f, click: "[", shift: "{" },
  "KC_RIGHT_BRACKET": { keycode: 0x0030, click: "]", shift: "}" },
  "KC_BACKSLASH": { keycode: 0x0031, click: "\\", shift: "|" },
  // "KC_NONUS_HASH": { keycode: 0x0032, click: "ESC" },
  "KC_SEMICOLON": { keycode: 0x0033, click: ";", shift: ":" },
  "KC_QUOTE": { keycode: 0x0034, click: "'", shift: "\"" },
  "KC_GRAVE": { keycode: 0x0035, click: "`", shift: "~" },
  "KC_COMMA": { keycode: 0x0036, click: ",", shift: "<" },
  "KC_DOT": { keycode: 0x0037, click: ".", shift: ">" },
  "KC_SLASH": { keycode: 0x0038, click: "/", shift: "?" },
  "KC_CAPS_LOCK": { keycode: 0x0039, click: "Caps Lock" },
  "KC_F1": { keycode: 0x003a, click: "F1" },
  "KC_F2": { keycode: 0x003b, click: "F2" },
  "KC_F3": { keycode: 0x003c, click: "F3" },
  "KC_F4": { keycode: 0x003d, click: "F4" },
  "KC_F5": { keycode: 0x003e, click: "F5" },
  "KC_F6": { keycode: 0x003f, click: "F6" },
  "KC_F7": { keycode: 0x0040, click: "F7" },
  "KC_F8": { keycode: 0x0041, click: "F8" },
  "KC_F9": { keycode: 0x0042, click: "F9" },
  "KC_F10": { keycode: 0x0043, click: "F10" },
  "KC_F11": { keycode: 0x0044, click: "F11" },
  "KC_F12": { keycode: 0x0045, click: "F12" },
  "KC_PRINT_SCREEN": { keycode: 0x0046, click: "Print Screen" },
  "KC_SCROLL_LOCK": { keycode: 0x0047, click: "Scroll Lock", clickMac: 'Brightness Down' },
  "KC_PAUSE": { keycode: 0x0048, click: "Pause", clickMac: 'Brightness Up' },
  "KC_INSERT": { keycode: 0x0049, click: "Insert" },
  "KC_HOME": { keycode: 0x004a, click: "Home" },
  "KC_PAGE_UP": { keycode: 0x004b, click: "Page Up" },
  "KC_DELETE": { keycode: 0x004c, click: "Forward Delete" },
  "KC_END": { keycode: 0x004d, click: "End" },
  "KC_PAGE_DOWN": { keycode: 0x004e, click: "Page Down" },
  "KC_RIGHT": { keycode: 0x004f, click: "Right Arrow" },
  "KC_LEFT": { keycode: 0x0050, click: "Left Arrow" },
  "KC_DOWN": { keycode: 0x0051, click: "Down Arrow" },
  "KC_UP": { keycode: 0x0052, click: "Up Arrow" },
  "KC_NUM_LOCK": { keycode: 0x0053, click: "Num Lock" },
  "KC_KP_SLASH": { keycode: 0x0054, click: "/" },
  "KC_KP_ASTERISK": { keycode: 0x0055, click: "*" },
  "KC_KP_MINUS": { keycode: 0x0056, click: "-" },
  "KC_KP_PLUS": { keycode: 0x0057, click: "+" },
  "KC_KP_ENTER": { keycode: 0x0058, click: "Enter" },
  "KC_KP_1": { keycode: 0x0059, click: "1", num: "End" },
  "KC_KP_2": { keycode: 0x005a, click: "2", num: "Down Arrow" },
  "KC_KP_3": { keycode: 0x005b, click: "3", num: "Page Down" },
  "KC_KP_4": { keycode: 0x005c, click: "4", num: "Left Arrow" },
  "KC_KP_5": { keycode: 0x005d, click: "5" },
  "KC_KP_6": { keycode: 0x005e, click: "6", num: "Right Arrow" },
  "KC_KP_7": { keycode: 0x005f, click: "7", num: "Home" },
  "KC_KP_8": { keycode: 0x0060, click: "8", num: "Up Arrow" },
  "KC_KP_9": { keycode: 0x0061, click: "9", num: "Page Up" },
  "KC_KP_0": { keycode: 0x0062, click: "0", num: "Insert" },
  "KC_KP_DOT": { keycode: 0x0063, click: ".", num: "Delete" },
  "KC_NONUS_BACKSLASH": { keycode: 0x0064, click: "Non-US \\", num: "|" },
  "KC_APPLICATION": { keycode: 0x0065, click: "Application" },
  "KC_KB_POWER": { keycode: 0x0066, click: "System Power" },
  "KC_KP_EQUAL": { keycode: 0x0067, click: "=" },
  "KC_F13": { keycode: 0x0068, click: "13" },
  "KC_F14": { keycode: 0x0069, click: "14" },
  "KC_F15": { keycode: 0x006a, click: "15" },
  "KC_F16": { keycode: 0x006b, click: "16" },
  "KC_F17": { keycode: 0x006c, click: "17" },
  "KC_F18": { keycode: 0x006d, click: "18" },
  "KC_F19": { keycode: 0x006e, click: "19" },
  "KC_F20": { keycode: 0x006f, click: "20" },
  "KC_F21": { keycode: 0x0070, click: "21" },
  "KC_F22": { keycode: 0x0071, click: "22" },
  "KC_F23": { keycode: 0x0072, click: "23" },
  "KC_F24": { keycode: 0x0073, click: "24" },
  "KC_EXECUTE": { keycode: 0x0074, click: "Execute" },
  "KC_HELP": { keycode: 0x0075, click: "Help" },
  "KC_MENU": { keycode: 0x0076, click: "Menu" },
  "KC_SELECT": { keycode: 0x0077, click: "Select" },
  "KC_STOP": { keycode: 0x0078, click: "Stop" },
  "KC_AGAIN": { keycode: 0x0079, click: "Again" },
  "KC_UNDO": { keycode: 0x007a, click: "Undo" },
  "KC_CUT": { keycode: 0x007b, click: "Cut" },
  "KC_COPY": { keycode: 0x007c, click: "Copy" },
  "KC_PASTE": { keycode: 0x007d, click: "Paste" },
  "KC_FIND": { keycode: 0x007e, click: "Find" },
  "KC_KB_MUTE": { keycode: 0x007f, click: "Mute" },
  "KC_KB_VOLUME_UP": { keycode: 0x0080, click: "Volume Up" },
  "KC_KB_VOLUME_DOWN": { keycode: 0x0081, click: "Volume Down" },
  "KC_LOCKING_CAPS_LOCK": { keycode: 0x0082, click: "Caps Lock" },
  "KC_LOCKING_NUM_LOCK": { keycode: 0x0083, click: "Num Lock" },
  "KC_LOCKING_SCROLL_LOCK": { keycode: 0x0084, click: "Scroll Lock" },
  "KC_KP_COMMA": { keycode: 0x0085, click: "," },
  "KC_KP_EQUAL_AS400": { keycode: 0x0086, click: "Keypad = on AS/400 keyboards" },
  "KC_INTERNATIONAL_1": { keycode: 0x0087, click: "International 1" },
  "KC_INTERNATIONAL_2": { keycode: 0x0088, click: "International 2" },
  "KC_INTERNATIONAL_3": { keycode: 0x0089, click: "International 3" },
  "KC_INTERNATIONAL_4": { keycode: 0x008a, click: "International 4" },
  "KC_INTERNATIONAL_5": { keycode: 0x008b, click: "International 5" },
  "KC_INTERNATIONAL_6": { keycode: 0x008c, click: "International 6" },
  "KC_INTERNATIONAL_7": { keycode: 0x008d, click: "International 7" },
  "KC_INTERNATIONAL_8": { keycode: 0x008e, click: "International 8" },
  "KC_INTERNATIONAL_9": { keycode: 0x008f, click: "International 9" },
  "KC_LANGUAGE_1": { keycode: 0x0090, click: "Language 1" },
  "KC_LANGUAGE_2": { keycode: 0x0091, click: "Language 2" },
  "KC_LANGUAGE_3": { keycode: 0x0092, click: "Language 3" },
  "KC_LANGUAGE_4": { keycode: 0x0093, click: "Language 4" },
  "KC_LANGUAGE_5": { keycode: 0x0094, click: "Language 5" },
  "KC_LANGUAGE_6": { keycode: 0x0095, click: "Language 6" },
  "KC_LANGUAGE_7": { keycode: 0x0096, click: "Language 7" },
  "KC_LANGUAGE_8": { keycode: 0x0097, click: "Language 8" },
  "KC_LANGUAGE_9": { keycode: 0x0098, click: "Language 9" },
  "KC_ALTERNATE_ERASE": { keycode: 0x0099, click: "Alternate Erase" },
  "KC_SYSTEM_REQUEST": { keycode: 0x009a, click: "SysReq/Attention" },
  "KC_CANCEL": { keycode: 0x009b, click: "Cancel" },
  "KC_CLEAR": { keycode: 0x009c, click: "Clear" },
  "KC_PRIOR": { keycode: 0x009d, click: "Prior" },
  "KC_RETURN": { keycode: 0x009e, click: "Return" },
  "KC_SEPARATOR": { keycode: 0x009f, click: "Separator" },
  "KC_OUT": { keycode: 0x00a0, click: "Out" },
  "KC_OPER": { keycode: 0x00a1, click: "Oper" },
  "KC_CLEAR_AGAIN": { keycode: 0x00a2, click: "Clear/Again" },
  "KC_CRSEL": { keycode: 0x00a3, click: "CrSel/Props" },
  "KC_EXSEL": { keycode: 0x00a4, click: "ExSel" },
  "KC_SYSTEM_POWER": { keycode: 0x00a5, click: "System Power Down" },
  "KC_SYSTEM_SLEEP": { keycode: 0x00a6, click: "System Sleep" },
  "KC_SYSTEM_WAKE": { keycode: 0x00a7, click: "System Wake" },
  "KC_AUDIO_MUTE": { keycode: 0x00a8, click: "Mute" },
  "KC_AUDIO_VOL_UP": { keycode: 0x00a9, click: "Volume Up" },
  "KC_AUDIO_VOL_DOWN": { keycode: 0x00aa, click: "Volume Down" },
  "KC_MEDIA_NEXT_TRACK": { keycode: 0x00ab, click: "Next Track" },
  "KC_MEDIA_PREV_TRACK": { keycode: 0x00ac, click: "Previous Track" },
  "KC_MEDIA_STOP": { keycode: 0x00ad, click: "Stop Track" },
  "KC_MEDIA_PLAY_PAUSE": { keycode: 0x00ae, click: "Play/Pause Track" },
  "KC_MEDIA_SELECT": { keycode: 0x00af, click: "Media Player" },
  "KC_MEDIA_EJECT": { keycode: 0x00b0, click: "Eject" },
  "KC_MAIL": { keycode: 0x00b1, click: "Mail" },
  "KC_CALCULATOR": { keycode: 0x00b2, click: "Calculator" },
  "KC_MY_COMPUTER": { keycode: 0x00b3, click: "My Computer" },
  "KC_WWW_SEARCH": { keycode: 0x00b4, click: "Browser Search" },
  "KC_WWW_HOME": { keycode: 0x00b5, click: "Browser Home" },
  "KC_WWW_BACK": { keycode: 0x00b6, click: "Browser Back" },
  "KC_WWW_FORWARD": { keycode: 0x00b7, click: "Browser Forward" },
  "KC_WWW_STOP": { keycode: 0x00b8, click: "Browser Stop" },
  "KC_WWW_REFRESH": { keycode: 0x00b9, click: "Browser Refresh" },
  "KC_WWW_FAVORITES": { keycode: 0x00ba, click: "Browser Favorites" },
  "KC_MEDIA_FAST_FORWARD": { keycode: 0x00bb, click: "Next Track" },
  "KC_MEDIA_REWIND": { keycode: 0x00bc, click: "Previous Track" },
  "KC_BRIGHTNESS_UP": { keycode: 0x00bd, click: "Brightness Up" },
  "KC_BRIGHTNESS_DOWN": { keycode: 0x00be, click: "Brightness Down" },
  // "KC_CONTROL_PANEL": { keycode: 0x00bf, click: "Control Panel" },
  // "KC_ASSISTANT": { keycode: 0x00c0, click: "Context-Aware Assistant" },
  // "KC_MISSION_CONTROL": { keycode: 0x00c1, click: "Mission Control" },
  // "KC_LAUNCHPAD": { keycode: 0x00c2, click: "Launchpad" },
  "KC_LEFT_CTRL": { keycode: 0x00e0, click: "Left Control" },
  "KC_LEFT_SHIFT": { keycode: 0x00e1, click: "Left Shift" },
  "KC_LEFT_ALT": { keycode: 0x00e2, click: "Left Alt" },
  "KC_LEFT_GUI": { keycode: 0x00e3, clickWindows: "Windows", clickMac: "Command", clickLinux: "Meta" },
  "KC_RIGHT_CTRL": { keycode: 0x00e4, click: "Right Control" },
  "KC_RIGHT_SHIFT": { keycode: 0x00e5, click: "Right Shift" },
  "KC_RIGHT_ALT": { keycode: 0x00e6, click: "Right Alt" },
  "KC_RIGHT_GUI": { keycode: 0x00e7, clickWindows: "Windows", clickMac: "Command", clickLinux: "Meta" },

  // Quantum Keycodes
  // "QK_BOOTLOADER": { keycode: 0x00e6, click: "BOOT", description: 'Put the keyboard into bootloader mode for flashing' },
  // "QK_DEBUG_TOGGLE": { keycode: 0x00e6, click: "", description: 'Toggle debug mode' },
  // "QK_CLEAR_EEPROM": { keycode: 0x00e6, click: "", description: 'Reinitializes the keyboard\'s EEPROM (persistent memory)' },
  // "QK_MAKE": { keycode: 0x00e6, click: "", description: 'Sends qmk compile -kb (keyboard) -km (keymap), or qmk flash if shift is held. Puts keyboard into bootloader mode if shift & control are held' },
  // "QK_REBOOT": { keycode: 0x00e6, click: "", description: 'Resets the keyboard. Does not load the bootloader' },
};

export const keycodeToKey: { [key: number]: Key } = {};
Object.entries(keys).forEach(
  ([keyName, key]) => (keycodeToKey[key.keycode] = { ...key, keyName }),
);

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

const modCodes = {
  QK_LCTL: 0x0100,
  QK_LSFT: 0x0200,
  QK_LALT: 0x0400,
  QK_LGUI: 0x0800,
  // QK_RMODS_MIN: 0x1000,
  QK_RCTL: 0x1100,
  QK_RSFT: 0x1200,
  QK_RALT: 0x1400,
  QK_RGUI: 0x1800,
};

export function getKey(keycode: number): Key {
  const func = Object.entries(funcs)
    .slice()
    .reverse()
    .find(([funcName, funcKeycode]) =>
      (funcKeycode & keycode) === funcKeycode ? [funcName, funcKeycode] : false,
    );
  if (func) {
    const basicKeyCode = 0xff & keycode;

    console.log(func, keycode);
    if (func[1] === funcs._QK_MOD_TAP) {
      const modifier = Object.entries(modCodes)
        .slice()
        .reverse()
        .find(([modKeyName, modKeycode]) =>
          (modKeycode & keycode) === modKeycode
            ? [modKeyName, modKeycode]
            : false,
        );

      return {
        ...keycodeToKey[basicKeyCode],
        held: modifier?.[0],
      };
    } else if (func[1] === funcs._QK_MOMENTARY) {
      const layer = 0xf & keycode;
      return {
        click: `MO(${layer})`,
        keycode,
      };
    }
  }
  return keycodeToKey[keycode] ?? undefined;
}
//  1 00000 00000000
// 10 00000 00000000
