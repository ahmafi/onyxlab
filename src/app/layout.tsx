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

export const metadata: Metadata = {
  applicationName: "OnyxLab",
};

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
      <head>
        <GoogleAnalytics />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1d232a" />
        <meta name="apple-mobile-web-app-title" content="OnyxLab" />
        <meta name="msapplication-TileColor" content="#1d232a" />
      </head>
      <body className="w-full h-full font-persian flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
