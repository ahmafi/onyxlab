"use client";

import useKeyboardStore from "@/store/keyboard-store";
import { HID } from "@/via/usb-hid";
import { PropsWithChildren, ReactNode, useEffect, useState } from "react";

export default function SetupConnection(props: PropsWithChildren<{}>) {
  const [hasHIDSupport, setHasHIDSupport] = useState<boolean | null>(null);
  const connectedDevice = useKeyboardStore((state) => state.connectedDevice);
  const updateConnectedDevice = useKeyboardStore(
    (state) => state.updateConnectedDevice,
  );

  useEffect(() => {
    setHasHIDSupport("hid" in window.navigator);
  }, []);

  useEffect(() => {
    if (!hasHIDSupport) return;

    (async () => {
      const alreadyConnectedDevices = await HID.getFilteredDevices();
      if (alreadyConnectedDevices.length === 0) {
        updateConnectedDevice(null);
        return;
      }
      const devices = await HID.devices(false);
      if (devices.length > 0) {
        updateConnectedDevice(devices[0]);
      }
    })();
    // TODO; run this check multiple times
  }, [hasHIDSupport]);

  const connectToHID = async () => {
    const alreadyConnectedDevices = await HID.devices(false);
    if (alreadyConnectedDevices.length > 0) {
      updateConnectedDevice(alreadyConnectedDevices[0]);
      return;
    }
    const devices = await HID.devices(true);
    if (devices.length > 0) {
      updateConnectedDevice(devices[0]);
    }
  };

  if (hasHIDSupport === false) {
    return (
      <div className="flex flex-col items-center justify-center fixed inset-0 w-screen h-screen bg-gray-700 opacity-80 text-xl">
        <div>مرورگر شما از این برنامه پشتیبانی نمی‌کند</div>
        <div>ترجیحا از آخرین نسخه‌ی مرورگر گوگل کروم استفاده کنید.</div>
      </div>
    );
  }

  if (connectedDevice === undefined) {
    return (
      <div className="h-full items-center self-center loading loading-spinner loading-lg text-primary">
        Loading
      </div>
    );
  }

  if (connectedDevice === null) {
    return (
      <div className="w-full grow flex items-center justify-center">
        <button className="" onClick={connectToHID}>
          اتصال کیبورد
        </button>
      </div>
    );
  }

  return <>{props.children}</>;
}
