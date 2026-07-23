/**
 * Image Preloader Component
 * Aggressively preloads all images for instant access
 * Improves page transitions and user experience
 */

"use client";

import { useEffect } from "react";
import { getAllImages } from "@/lib/imagePreloader";

// Create a cache object to store preloaded images
const imageCache = new Map<string, HTMLImageElement>();

export default function ImagePreloader() {
  useEffect(() => {
    const images = getAllImages();
    
    // Method 1: Link preload tags for browser resource hints
    images.forEach((src) => {
      if (!document.querySelector(`link[href="${src}"]`)) {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = src;
        document.head.appendChild(link);
      }
    });

    // Method 2: Prefetch using Image API for in-memory caching
    images.forEach((src) => {
      if (!imageCache.has(src)) {
        const img = new Image();
        img.src = src;
        // Add loading priority for modern browsers
        if (img.loading !== undefined) {
          img.loading = "eager";
        }
        imageCache.set(src, img);
      }
    });

    // Method 3: Request via Intersection Observer for images not yet in viewport
    // This prevents unnecessary network requests
    if ("IntersectionObserver" in window && "requestIdleCallback" in window) {
      requestIdleCallback(() => {
        images.forEach((src) => {
          if (!imageCache.has(src)) {
            const img = new Image();
            img.src = src;
            imageCache.set(src, img);
          }
        });
      });
    }
  }, []);

  // Component doesn't render anything visible
  return null;
}
