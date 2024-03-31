import { Metadata } from "next";
import Link from "next/link";
import KeyboardCanvas from "./KeyboardCanvas";

export const metadata: Metadata = {
  title: "OnyxLabs",
};

export default function Home() {
  return (
    <div className="grow">
      <KeyboardCanvas className="w-full h-full" />
    </div>
  );
}
