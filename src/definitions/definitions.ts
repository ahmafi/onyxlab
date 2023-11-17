import mini from "./mini.json";

export type Definition = typeof mini;

const definitions: { [key: string]: Definition } = {
  [mini.productId]: mini,
};

export default definitions;
