/**
 * Navigation and menu configuration
 */

import type { NavLink } from '@/types';

export const mainNavigation: NavLink[] = [
  { label: 'HOME', href: '/' },
  { label: 'CONTACT', href: '/contact' },
];

export const portfolioNavigation: NavLink[] = [
  { label: 'LAKME', href: '/lakme' },
];

export const footerNavigation = {
  legal: [
    { label: 'PRIVACY POLICY', href: '/privacy' },
  ],
};
