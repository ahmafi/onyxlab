import type { Metadata, Viewport } from "next";
import { Inter, Vazirmatn, Nunito } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import clsx from "clsx";
import GoogleAnalytics from "./google-analytics";

// https://dev.to/sdorra/nextjs-13-fonts-with-tailwind-2l4l
const inter = Nunito({ subsets: ["latin"], variable: "--english-font" });
const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--persian-font",
});

export const metadata: Metadata = {};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#1D232A" },
  ],
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={clsx("w-full h-full", vazirmatn.variable, inter.variable)}
    >
      <GoogleAnalytics />
      <body className="w-full h-full font-persian flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
