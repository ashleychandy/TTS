/**
 * Navigation and menu configuration
 */

import type { NavLink } from "@/types";

export const mainNavigation: NavLink[] = [
  { label: "HOME", href: "/" },
  { label: "PORTFOLIO", href: "/portfolio" },
  { label: "CONTACT", href: "/contact" },
];

export const footerNavigation = {
  legal: [{ label: "PRIVACY POLICY", href: "/privacy" }],
};
