/**
 * Product 1 (Lakmé) data
 */

import type { ProductImage } from "@/types/index";

interface Product1Data {
  logo: string;
  title: string;
  about: string;
  heroImage: ProductImage;
  galleryImages: ProductImage[];
  featureImages: {
    small: ProductImage;
    large: ProductImage;
  };
  galleryTitle?: string;
  galleryDescription?: string;
  featureHeading?: string;
}

export const product1Data: Product1Data = {
  logo: "Lakmé.",
  title: "Lakmé Lip Balm.",
  about: "A premium campaign created to showcase the Lakmé Lip Balm through clean beauty visuals, expressive portraits, and product-focused storytelling. Every frame highlights hydration, softness, and effortless everyday beauty.",
  heroImage: {
    src: "/ProductPage1/4.png",
    alt: "Lakmé Lip Balm hero showcasing the premium product",
  },
  galleryImages: [
    { 
      src: "/ProductPage1/3.png", 
      alt: "Beauty Portrait showcasing natural look", 
      label: "Beauty Portrait" 
    },
    { 
      src: "/ProductPage1/2.png", 
      alt: "Close-Up Campaign highlighting product detail", 
      label: "Close-Up Campaign" 
    },
    { 
      src: "/ProductPage1/6.png", 
      alt: "Natural Glow beauty shot", 
      label: "Natural Glow" 
    },
    { 
      src: "/ProductPage1/5.png", 
      alt: "Editorial Beauty Shot with artistic styling", 
      label: "Editorial Beauty Shot" 
    }
  ],
  featureImages: {
    small: {
      src: "/ProductPage1/lip balm 2.png",
      alt: "Product close-up showcasing texture and quality",
    },
    large: {
      src: "/ProductPage1/1.png",
      alt: "Featured product in elegant setting",
    }
  },
  galleryTitle: "CAMPAIGN GALLERY",
  galleryDescription: "A curated collection of lifestyle portraits featuring the Lakmé Lip Balm. The campaign combines soft lighting, minimal styling, and premium product placement to create engaging marketing visuals across digital and social platforms.",
  featureHeading: "BEAUTY THAT\nFEELS EFFORTLESS."
} as const;
