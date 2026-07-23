/**
 * Image preloading utility
 * Centralized list of all images for preloading
 */

export const IMAGES_TO_PRELOAD = {
  // Landing page images
  hero: "/LandingPage/hero.png",
  contact: "/LandingPage/contact.png",
  fourWays: "/LandingPage/Four Ways.png",
  
  // Intro section
  intro: [
    "/LandingPage/Intro 1.png",
    "/LandingPage/Intro 2.png",
    "/LandingPage/Intro 3.png",
    "/LandingPage/Intro 4.png",
  ],
  
  // Portfolio works
  works: [
    "/LandingPage/6.png",
    "/LandingPage/7.png",
    "/LandingPage/8.png",
    "/LandingPage/9.png",
    "/LandingPage/10.png",
    "/LandingPage/11.png",
  ],
  
  // Product page 1 (Lakmé)
  product1: [
    "/ProductPage1/1.png",
    "/ProductPage1/2.png",
    "/ProductPage1/3.png",
    "/ProductPage1/4.png",
    "/ProductPage1/5.png",
    "/ProductPage1/6.png",
    "/ProductPage1/lip balm 2.png",
  ],
  
  // Favicon
  favicon: "/favicon.png",
};

/**
 * Get all images as a flat array
 */
export function getAllImages(): string[] {
  return [
    IMAGES_TO_PRELOAD.hero,
    IMAGES_TO_PRELOAD.contact,
    IMAGES_TO_PRELOAD.fourWays,
    ...IMAGES_TO_PRELOAD.intro,
    ...IMAGES_TO_PRELOAD.works,
    ...IMAGES_TO_PRELOAD.product1,
    IMAGES_TO_PRELOAD.favicon,
  ];
}
