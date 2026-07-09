/**
 * Global TypeScript type definitions
 */

export interface NavLink {
  label: string;
  href: string;
  disabled?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface ProductImage {
  src: string;
  alt: string;
  label?: string;
}

export interface Service {
  id: string;
  num: string;
  title: string;
  desc: string;
}

export interface Work {
  category: string;
  id: number;
  image: string;
  alt: string;
}

export interface IntroCard {
  id: string;
  src: string;
  alt: string;
}
