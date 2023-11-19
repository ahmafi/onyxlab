"use client";

import { useState } from "react";
import KeyboardLayout from "./keyboard-layout";
import LayerSelector from "./layer-selector";

export default function LayoutEditor() {
  return (
    <div className="w-full flex flex-col">
      {/* <AuthorizeDevices></AuthorizeDevices> */}
      <div>Layout Editor</div>
      <div className="w-4/5 px-2 py-4 self-center">
        <LayerSelector />
        <KeyboardLayout></KeyboardLayout>
      </div>
    </div>
  );
}
