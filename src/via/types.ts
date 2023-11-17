import { DefinitionVersion } from "@the-via/reader";

export type DeviceInfo = {
  vendorId: number;
  productId: number;
  productName: string;
  protocol?: number;
};

export type Device = DeviceInfo & {
  path: string;
  productName: string;
  interface: number;
};

export type Keymap = number[];

export type WebVIADevice = Device & {
  _device: HIDDevice;
};

// Refers to a device that may or may not have an associated definition but does have a valid protocol version
export type AuthorizedDevice = DeviceInfo & {
  path: string;
  vendorProductId: number;
  protocol: number;
  requiredDefinitionVersion: DefinitionVersion;
  hasResolvedDefinition: false;
};

export type ConnectedDevice = DeviceInfo & {
  path: string;
  vendorProductId: number;
  protocol: number;
  requiredDefinitionVersion: DefinitionVersion;
  hasResolvedDefinition: true;
};
