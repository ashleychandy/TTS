/**
 * Navigation and menu configuration
 */

import type { NavLink } from '@/types';

export const mainNavigation: NavLink[] = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about', disabled: true },
  { label: 'SERVICES', href: '/services', disabled: true },
  { label: 'SELECTED WORK', href: '/work', disabled: true },
  { label: 'PROCESS', href: '/process', disabled: true },
  { label: 'CONTACT', href: '/contact' },
];

export const portfolioNavigation: NavLink[] = [
  { label: 'LAKME', href: '/lakme' },
];

export const footerNavigation = {
  legal: [
    { label: 'PRIVACY POLICY', href: '/privacy', disabled: true },
    { label: 'COOKIE POLICY', href: '/cookies', disabled: true },
  ],
};
