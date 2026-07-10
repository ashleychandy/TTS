/**
 * Footer component - Site footer with navigation, contact, and dynamic text sizing
 */

"use client";

import Link from "next/link";
import { useFitText } from "@/hooks/useFitText";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";
import { mainNavigation, footerNavigation } from "@/data/navigation";
import StarIcon from "@/components/ui/StarIcon";
import styles from "./Footer.module.css";

export default function Footer() {
  const { containerRef, textRef, fontSize } = useFitText(24); // 24px padding, each side (matching Hero)

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <p className={styles.footerDesc}>
          WE ARE AN INDEPENDENT CREATIVE AGENCY.
          <br />
          WE COMBINE BOLD VISION WITH SHARP
          <br />
          EXECUTION AND DELIVER WITH SPEED.
        </p>

        <StarIcon className={`${styles.starIcon} ${styles.whiteStar}`} fill="#ffffff" />
      </div>

      <div className={styles.footerGrid}>
        <div className={styles.footerCol}>
          <div className={styles.footerText}>{SITE_CONFIG.name}</div>
          <div className={styles.footerText}>BASED ON EARTH</div>

          <div className={styles.contactGroup}>
            <a href={`mailto:${SITE_CONFIG.contactEmail}`} className={styles.emailCTA}>
              {SITE_CONFIG.contactEmail}
            </a>
          </div>

          <div className={`${styles.footerText} ${styles.copyright}`}>
            © 2026 {SITE_CONFIG.name}
          </div>
        </div>

        <div className={styles.footerCol}>
          {mainNavigation.filter(link => !link.disabled).map((link, index) => (
            <Link 
              key={`nav-${link.label}-${index}`}
              href={link.href} 
              className={styles.footerLink}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className={styles.footerCol}>
          {footerNavigation.legal.filter(link => !link.disabled).map((link, index) => (
            <Link 
              key={`legal-${link.label}-${index}`}
              href={link.href} 
              className={styles.footerLink}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className={styles.footerCol}>
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
            INSTAGRAM ↗
          </a>
          
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
            LINKEDIN ↗
          </a>
        </div>
      </div>

      <div className={styles.footerBottom} ref={containerRef}>
        <h2
          className={styles.massiveText}
          ref={textRef}
          style={fontSize ? { fontSize: `${fontSize}px` } : undefined}
        >
          AGENCY
        </h2>
      </div>
    </footer>
  );
}
