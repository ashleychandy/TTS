/**
 * Tests for constants
 */

import { describe, it, expect } from 'vitest';
import { SITE_CONFIG, SOCIAL_LINKS, COLORS, BREAKPOINTS } from '@/lib/constants';

describe('Constants', () => {
  describe('SITE_CONFIG', () => {
    it('should have required properties', () => {
      expect(SITE_CONFIG.name).toBeDefined();
      expect(SITE_CONFIG.url).toBeDefined();
      expect(SITE_CONFIG.contactEmail).toBeDefined();
      expect(SITE_CONFIG.description).toBeDefined();
    });

    it('should have valid email format', () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      expect(emailRegex.test(SITE_CONFIG.contactEmail)).toBe(true);
    });
  });

  describe('SOCIAL_LINKS', () => {
    it('should have instagram and linkedin', () => {
      expect(SOCIAL_LINKS.instagram).toBeDefined();
      expect(SOCIAL_LINKS.linkedin).toBeDefined();
    });

    it('should have valid URLs', () => {
      expect(SOCIAL_LINKS.instagram).toMatch(/^https?:\/\//);
      expect(SOCIAL_LINKS.linkedin).toMatch(/^https?:\/\//);
    });
  });

  describe('COLORS', () => {
    it('should have all required colors', () => {
      expect(COLORS.primaryRedDark).toBe('#6e0505');
      expect(COLORS.brandRed).toBe('#a80015');
      expect(COLORS.background).toBe('#fdfdfd');
    });

    it('should have valid hex format', () => {
      const hexRegex = /^#[0-9A-Fa-f]{6}$/;
      Object.values(COLORS).forEach(color => {
        expect(hexRegex.test(color)).toBe(true);
      });
    });
  });

  describe('BREAKPOINTS', () => {
    it('should have mobile, tablet, and desktop breakpoints', () => {
      expect(BREAKPOINTS.mobile).toBe(480);
      expect(BREAKPOINTS.tablet).toBe(768);
      expect(BREAKPOINTS.desktop).toBe(1024);
    });

    it('should have ascending values', () => {
      expect(BREAKPOINTS.mobile).toBeLessThan(BREAKPOINTS.tablet);
      expect(BREAKPOINTS.tablet).toBeLessThan(BREAKPOINTS.desktop);
    });
  });
});
