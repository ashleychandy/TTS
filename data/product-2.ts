/**
 * Product 2 data - Sample skincare/cosmetics product
 */

import type { ProductImage } from "@/types/index";

interface Product2Data {
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

export const product2Data: Product2Data = {
  logo: "LUXE ESSENCE.",
  title: "Premium Skincare Line.",
  about: "A luxurious skincare campaign that celebrates natural radiance and skin transformation. Through carefully curated imagery, we showcase the effectiveness and elegance of our premium formulations. Each visual tells a story of confidence, wellness, and beauty.",
  heroImage: {
    src: "/ProductPage1/4.png",
    alt: "Luxe Essence skincare hero featuring premium product packaging",
  },
  galleryImages: [
    { 
      src: "/ProductPage1/3.png", 
      alt: "Skincare Application - Close-up of serum application technique", 
      label: "Application" 
    },
    { 
      src: "/ProductPage1/2.png", 
      alt: "Product Detail - Premium packaging and formula showcase", 
      label: "Product Details" 
    },
    { 
      src: "/ProductPage1/6.png", 
      alt: "Before & After - Skin transformation results", 
      label: "Results" 
    },
    { 
      src: "/ProductPage1/5.png", 
      alt: "Lifestyle Portrait - Model showcasing radiant skin", 
      label: "Lifestyle" 
    }
  ],
  featureImages: {
    small: {
      src: "/ProductPage1/lip balm 2.png",
      alt: "Product bottle featuring premium skincare formula",
    },
    large: {
      src: "/ProductPage1/1.png",
      alt: "Featured hero image showcasing skincare campaign aesthetics",
    }
  },
  galleryTitle: "SKINCARE EXCELLENCE",
  galleryDescription: "A comprehensive visual narrative of our premium skincare line. From product details to real skin transformations, this campaign celebrates the power of quality ingredients and expert formulation. Each image captures the essence of luxury wellness and natural beauty.",
  featureHeading: "REVEAL YOUR\nBEST SKIN."
} as const;
