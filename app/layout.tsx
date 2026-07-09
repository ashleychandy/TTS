import type { Metadata } from "next";
import "./globals.css";
import FloatingHeader from "@/components/FloatingHeader";

export const metadata: Metadata = {
  title: "Thirst Trap Studios",
  description:
    "We turn ideas into bold visual identities and digital experiences that stand out and sell. Independent creative agency based on Earth.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <FloatingHeader />
        {children}
      </body>
    </html>
  );
}
