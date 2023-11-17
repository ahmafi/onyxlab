type categories = "Basic" | "Media" | "Layers" | "Special";

export type Key = {
  click?: string;
  persian?: string;
  description?: string;
  categories?: categories[];
};

// prettier-ignore
export const keys: { [key: string]: Key } = {
  "KC_NO": { click: "NO", categories: ["Basic"], description: "این کلید هیچ کاری نمی‌کنه!" },
  "KC_A": { click: "A", persian: "ش", categories: ["Basic"] },
  "KC_B": { click: "B", persian: "ذ", categories: ["Basic"] },
  "KC_C": { click: "C", persian: "ز", categories: ["Basic"] },
  "KC_D": { click: "D", persian: "ی", categories: ["Basic"] },
  "KC_E": { click: "E", persian: "ث", categories: ["Basic"] },
  "KC_F": { click: "F", persian: "ب", categories: ["Basic"] },
  "KC_G": { click: "G", persian: "ل", categories: ["Basic"] },
  "KC_H": { click: "H", persian: "ا", categories: ["Basic"] },
  "KC_I": { click: "I", persian: "ه", categories: ["Basic"] },
  "KC_J": { click: "J", persian: "ت", categories: ["Basic"] },
  "KC_K": { click: "K", persian: "ن", categories: ["Basic"] },
  "KC_L": { click: "L", persian: "م", categories: ["Basic"] },
  "KC_M": { click: "M", persian: "پ", categories: ["Basic"] },
  "KC_N": { click: "N", persian: "د", categories: ["Basic"] },
  "KC_O": { click: "O", persian: "خ", categories: ["Basic"] },
  "KC_P": { click: "P", persian: "ح", categories: ["Basic"] },
  "KC_Q": { click: "Q", persian: "ض", categories: ["Basic"] },
  "KC_R": { click: "R", persian: "ق", categories: ["Basic"] },
  "KC_S": { click: "S", persian: "س", categories: ["Basic"] },
  "KC_T": { click: "T", persian: "ف", categories: ["Basic"] },
  "KC_U": { click: "U", persian: "ع", categories: ["Basic"] },
  "KC_V": { click: "V", persian: "ر", categories: ["Basic"] },
  "KC_W": { click: "W", persian: "ص", categories: ["Basic"] },
  "KC_X": { click: "X", persian: "ط", categories: ["Basic"] },
  "KC_Y": { click: "Y", persian: "غ", categories: ["Basic"] },
  "KC_Z": { click: "Z", persian: "ظ", categories: ["Basic"] },
};
