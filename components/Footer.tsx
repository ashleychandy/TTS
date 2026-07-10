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
            <span className={styles.linkWrapper}>
              <a href={`mailto:${SITE_CONFIG.contactEmail}`} className={styles.footerLink}>
                {SITE_CONFIG.contactEmail}
              </a>
            </span>
          </div>

          <div className={`${styles.footerText} ${styles.copyright}`}>
            © 2026 {SITE_CONFIG.name}
          </div>
        </div>

        <div className={styles.footerCol}>
          <div className={styles.footerText} style={{ marginBottom: 'clamp(4px, 0.4vw, 8px)' }}>
            NAVIGATION
          </div>
          {mainNavigation.filter(link => !link.disabled).map((link, index) => (
            <span key={`nav-${link.label}-${index}`} className={styles.linkWrapper}>
              <Link 
                href={link.href} 
                className={styles.footerLink}
              >
                {link.label}
              </Link>
            </span>
          ))}
        </div>

        <div className={styles.footerCol}>
          <div className={styles.footerText} style={{ marginBottom: 'clamp(4px, 0.4vw, 8px)' }}>
            LEGAL
          </div>
          {footerNavigation.legal.map((link, index) => (
            <span key={`legal-${link.label}-${index}`} className={styles.linkWrapper}>
              <Link 
                href={link.href} 
                className={styles.footerLink}
              >
                {link.label}
              </Link>
            </span>
          ))}
        </div>

        <div className={styles.footerCol}>
          <div className={styles.footerText} style={{ marginBottom: 'clamp(4px, 0.4vw, 8px)' }}>
            SOCIAL
          </div>
          <span className={styles.linkWrapper}>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
              INSTAGRAM
            </a>
          </span>
          
          <span className={styles.linkWrapper}>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
              LINKEDIN
            </a>
          </span>
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
