"use client";

import useKeyboardStore from "@/store/keyboard-store";
import { KeyboardAPI, KeyboardValue } from "@/via/keyboard-api";
import keycodes, { bToK } from "@/via/keycodes";
import { HID } from "@/via/usb-hid";
import { useEffect, useRef, useState } from "react";

const ONYX_LABS_VENDOR_ID = 0x444d;

const KEYBOARDS_USAGE_FILTER = {
  usagePage: 0xff60,
  usage: 0x61,
  vendorId: ONYX_LABS_VENDOR_ID,
};

export default function AuthorizeDevices() {
  const connectedDevice = useKeyboardStore((state) => state.connectedDevice);
  const updateConnectedDevice = useKeyboardStore(
    (state) => state.updateConnectedDevice,
  );
  const isConnectedRef = useRef<boolean>(false);

  const getDevices = async () => {
    const device = await HID.requestDevice();
    if (!device) return;

    await newDeviceAdded();
  };

  const disconnect = async () => {
    // connectedDevice?.removeEventListener
    await connectedDevice?.forget();
    updateConnectedDevice(null);
    isConnectedRef.current = false;
  };

  const newDeviceAdded = async () => {
    // const devices = await HID.devices();
    // const inputReportListener = (event: HIDInputReportEvent) => {
    //   console.log("event");
    //   console.log(event);
    // };
    // updateConnectedDevice(devices);
    // const promise = device.open();
    // console.log(HID._cache);
    // console.log(device);
    // console.log("adding event listener", device.opened);
    // device.addEventListener("inputreport", inputReportListener);
    // await promise;
    // return inputReportListener;
  };

  useEffect(() => {
    if (isConnectedRef.current) return;
    isConnectedRef.current = true;
    let listener = null as ((event: HIDInputReportEvent) => void) | null;
    let device = null as HIDDevice | null;
    (async () => {
      device = (await HID.getFilteredDevices())[0];
      if (!device) return;

      await newDeviceAdded();
    })();

    return () => {
      if (listener && device) {
        device.removeEventListener("inputreport", listener);
      }
    };
  }, []);

  const sendReport = async () => {
    // if (!connectedDevice) return;
    // console.log(connectedDevice.opened);
    const device = (await HID.devices())[0];
    const keyboard = new KeyboardAPI(device.path);
    const protocolVersion = await keyboard.getProtocolVersion();
    console.log(protocolVersion);
    console.log(await keyboard.getLayerCount());
    console.log(bToK[await keyboard.getKey(0, 0, 0)]);
    console.log(bToK[await keyboard.getKey(0, 0, 1)]);
    console.log(await keyboard.fastReadRawMatrix({ rows: 8, cols: 6 }, 0));
    // await connectedDevice.sendReport(0, new Uint8Array([0]));
  };

  return (
    <div>
      <button onClick={getDevices}>اتصال به کیبورد</button>
      {/* {connectedDevice && ( */}
      <div>
        <button onClick={disconnect}>قطع اتصال</button>
        <button onClick={sendReport}>ریپورت</button>
      </div>
      {/* )} */}
    </div>
  );
}
