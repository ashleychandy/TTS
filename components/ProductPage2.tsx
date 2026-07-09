/**
 * ProductPage2 component - Coming Soon placeholder
 * Displays a professional coming soon page for future product
 */

"use client";

import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import StarIcon from "@/components/ui/StarIcon";
import styles from "./ProductPage2.module.css";

export default function ProductPage2() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={`${styles.container} ${styles.hero}`}>
        <div className={styles.heroContent}>
          <div className={styles.starWrapper}>
            <StarIcon className={styles.star} fill="#a80015" />
          </div>

          <h1 className={styles.comingSoon}>COMING SOON</h1>

          <p className={styles.subtitle}>
            This project is currently in development. Check back soon to see our
            work with innovative beauty brands pushing boundaries.
          </p>

          <div className={styles.actions}>
            <Link href="/" className={styles.btnPrimary}>
              Back to Home
            </Link>
            <Link href="/products/product-1" className={styles.btnSecondary}>
              View Other Projects
            </Link>
          </div>

          <div className={styles.info}>
            <p>Questions about this project?</p>
            <a href={`mailto:${SITE_CONFIG.contactEmail}`} className={styles.emailLink}>
              {SITE_CONFIG.contactEmail}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
