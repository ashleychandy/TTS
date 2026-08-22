/**
 * Image preloading utility
 * Centralized list of all images for preloading
 */

export const IMAGES_TO_PRELOAD = {
  hero: "/LandingPage/hero.png",
  contact: "/LandingPage/contact.png",
  fourWays: "/LandingPage/Four Ways.png",

  intro: [
    "/LandingPage/Intro 1.png",
    "/LandingPage/Intro 2.png",
    "/LandingPage/Intro 3.png",
    "/LandingPage/Intro 4.png",
  ],

  works: [
    "/LandingPage/6.png",
    "/LandingPage/7.png",
    "/LandingPage/8.png",
    "/LandingPage/9.png",
    "/LandingPage/10.png",
    "/LandingPage/11.png",
  ],

  portfolio: [
    "/Portfolio/1.png",
    "/Portfolio/2.png",
    "/Portfolio/3.png",
    "/Portfolio/4.png",
    "/Portfolio/5.png",
    "/Portfolio/6.png",
    "/Portfolio/7.png",
    "/Portfolio/8.png",
  ],

  favicon: "/favicon.png",
};

export function getAllImages(): string[] {
  const allImages = [
    IMAGES_TO_PRELOAD.hero,
    IMAGES_TO_PRELOAD.contact,
    IMAGES_TO_PRELOAD.fourWays,
    ...IMAGES_TO_PRELOAD.intro,
    ...IMAGES_TO_PRELOAD.works,
    ...IMAGES_TO_PRELOAD.portfolio,
    IMAGES_TO_PRELOAD.favicon,
  ];

  return [...new Set(allImages)];
}
