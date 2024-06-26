import mini from "./mini.json";
import ks1 from "./ks1.json";

export type Definition = {
  name: string;
  vendorId: string;
  productId: string;
  matrix: {
    rows: number;
    cols: number;
  };
  qmkLayout: { matrix: number[]; x: number; y: number; r?: number }[];
};

const definitions: { [key: number]: Definition } = {
  [Number(ks1.productId)]: ks1,
  [Number(mini.productId)]: mini,
};

export default definitions;
