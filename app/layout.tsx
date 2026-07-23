/**
 * Root layout component
 * Provides global HTML structure, metadata, and error handling
 */

import type { Metadata, Viewport } from "next";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";
import ConditionalHeader from "@/components/ConditionalHeader";
import ImagePreloader from "@/components/ImagePreloader";
import { SITE_CONFIG } from "@/lib/constants";
import { getAllImages } from "@/lib/imagePreloader";
import "./globals.css";

export const metadata: Metadata = {
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  keywords: [
    "creative agency",
    "brand identity",
    "digital design",
    "art direction",
    "web design",
    "visual systems",
    "creative studio",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#a80015",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const images = getAllImages();

  return (
    <html lang="en">
      <head>
        {/* DNS Prefetch and Preconnect for external resources */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Prefetch all app routes for instant navigation */}
        <link rel="prefetch" href="/" />
        <link rel="prefetch" href="/contact" />
        <link rel="prefetch" href="/lakme" />
        <link rel="prefetch" href="/privacy" />

        {/* Preload critical images */}
        {images.map((src) => (
          <link
            key={src}
            rel="preload"
            as="image"
            href={src}
          />
        ))}
      </head>
      <body>
        <ErrorBoundary>
          <ConditionalHeader />
          <ImagePreloader />
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
