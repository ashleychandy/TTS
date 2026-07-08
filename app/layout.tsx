import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Creative Agency - Bold Visual Identities & Digital Experiences",
  description:
    "We turn ideas into bold visual identities and digital experiences that stand out and sell. Independent creative agency based on Earth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
