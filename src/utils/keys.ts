type categories = "Basic" | "Media" | "Layers" | "Special";

export type Key = {
  keycode: number;
  click?: string;
  unicode?: string;
  shift?: string;
  persian?: string;
  persianShift?: string;
  description?: string;
  categories?: categories[];
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
};

export const nameToKeycode: { [key: number]: string } = {};
Object.entries(keys).forEach(
  ([keyName, { keycode }]) => (nameToKeycode[keycode] = keyName),
);
