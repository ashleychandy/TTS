import type { Metadata } from "next";

// Self-hosted static font files (installed via npm, no external CDN calls)
import "@fontsource/archivo/700.css";
import "@fontsource/archivo/800.css";
import "@fontsource/archivo/900.css";

import "./globals.css";

export const metadata: Metadata = {
  title: "Bureau — Raw Creative Agency",
  description:
    "We turn ideas into bold visual identities and digital experiences that stand out and sell. Brand identity, digital design and art direction for ambitious companies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-pure-white text-deep-black">
        {children}
      </body>
    </html>
  );
}
