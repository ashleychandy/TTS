/**
 * Application-wide constants and configuration
 */

export const SITE_CONFIG = {
  name: "neighbr studios",
  url: "http://localhost:3000",
  contactEmail: "neighbrstudios@gmail.com",
  description:
    "We turn ideas into bold visual identities and digital experiences that stand out and sell. Independent creative agency based on Earth.",
} as const;

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/neighbr.studios/",
  linkedin: "https://www.linkedin.com/company/neighbr-studios/",
} as const;

export const COLORS = {
  primaryRedDark: "#6e0505",
  primaryRedMedium: "#8a0000",
  brandRed: "#a80015",
  accent: "#ff6b6b",
  background: "#fdfdfd",
  textDark: "#333333",
  textGrey: "#999999",
  white: "#ffffff",
} as const;

export const SPACING = {
  base: "2.5vw",
  small: "1vw",
  medium: "3vw",
  large: "4vw",
} as const;

export const BREAKPOINTS = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
} as const;

export const MEDIA_QUERIES = {
  mobile: `(max-width: ${BREAKPOINTS.mobile}px)`,
  tablet: `(max-width: ${BREAKPOINTS.tablet}px)`,
  desktop: `(max-width: ${BREAKPOINTS.desktop}px)`,
  wide: `(min-width: ${BREAKPOINTS.desktop + 1}px)`,
} as const;
