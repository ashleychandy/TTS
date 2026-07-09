/**
 * Navigation and menu configuration
 */

import type { NavLink } from '@/types';

export const mainNavigation: NavLink[] = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '#', disabled: true },
  { label: 'SERVICES', href: '#', disabled: true },
  { label: 'SELECTED WORK', href: '#', disabled: true },
  { label: 'PROCESS', href: '#', disabled: true },
  { label: 'CONTACT', href: '/contact' },
];

export const projectsNavigation: NavLink[] = [
  { label: 'LAKME', href: '/products/product-1' },
  { label: 'PLUM', href: '/products/product-2', disabled: true },
  { label: 'YOGA BAR', href: '#', disabled: true },
];

export const footerNavigation = {
  legal: [
    { label: 'PRIVACY POLICY', href: '#', disabled: true },
    { label: 'COOKIE POLICY', href: '#', disabled: true },
  ],
};
