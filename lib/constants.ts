/**
 * Application-wide constants and configuration
 */

export const SITE_CONFIG = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "Thirst Trap Studios",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact.thirsttrapstudios@gmail.com",
  description: "We turn ideas into bold visual identities and digital experiences that stand out and sell. Independent creative agency based on Earth.",
} as const;

export const SOCIAL_LINKS = {
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/thirst.trap.studios/",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/company/thirst-trap-studios/",
} as const;

export const COLORS = {
  primaryRedDark: '#6e0505',
  primaryRedMedium: '#8a0000',
  brandRed: '#a80015',
  accent: '#ff6b6b',
  background: '#fdfdfd',
  textDark: '#333333',
  textGrey: '#999999',
  white: '#ffffff',
} as const;

export const SPACING = {
  base: '2.5vw',
  small: '1vw',
  medium: '3vw',
  large: '4vw',
} as const;

export const BREAKPOINTS = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
} as const;
