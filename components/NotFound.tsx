/**
 * NotFound component - 404 error page
 * Features centered error message with navigation
 */

import Link from "next/link";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      {/* Massive Blurred Background */}
      <div className={styles.bgTextWrapper}>
        <div className={styles.bgText}>404</div>
      </div>

      {/* Header Navigation */}
      <header
        className={`${styles.cornerElement} ${styles.headerLogo} ${styles.uiText}`}
      >
        <span className={styles.star}>✸</span> {SITE_CONFIG.name}
      </header>

      <div
        className={`${styles.cornerElement} ${styles.headerInfo} ${styles.uiText}`}
      >
        BASED ON EARTH
        <br />
        WORKING WORLDWIDE
      </div>

      {/* Center Error Content */}
      <main className={styles.centerBlock}>
        <div className={styles.errorCode}>404</div>
        <h1 className={styles.errorTitle}>ERROR PAGE</h1>

        <Link href="/" className={styles.btnGoBack}>
          GO BACK <span>↗</span>
        </Link>
      </main>

      {/* Footer Links */}
      <div
        className={`${styles.cornerElement} ${styles.footerCopy} ${styles.uiText}`}
      >
        © 2026 {SITE_CONFIG.name}
      </div>

      <div
        className={`${styles.cornerElement} ${styles.footerSocials} ${styles.uiText}`}
      >
        <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer">INSTAGRAM ↗</a>
        <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">LINKEDIN ↗</a>
      </div>
    </div>
  );
}
