/**
 * CTA component - Call-to-action section
 * Features headline, subtext, contact button, and visual gradient
 */

"use client";

import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import StarIcon from "@/components/ui/StarIcon";
import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.cta} aria-labelledby="cta-heading">
      <div className={styles.ctaLeft}>
        <div>
          <p className={styles.topLabel}>LET&apos;S WORK</p>
          <h2 id="cta-heading" className={styles.headline}>
            READY TO BUILD
            <br />
            SOMETHING GREAT?
          </h2>

          <div className={styles.indentedContent}>
            <p className={styles.subtext}>
              WE TURN IDEAS INTO BOLD VISUAL IDENTITIES AND DIGITAL
              EXPERIENCES THAT STAND OUT AND SELL.
            </p>
            <a 
              href={`mailto:${SITE_CONFIG.contactEmail}`}
              className={styles.btnPrimary}
              aria-label="Start a project - Contact us via email"
            >
              START A PROJECT
            </a>
          </div>
        </div>

        <StarIcon 
          className={`${styles.starIcon} ${styles.redStar}`}
          fill="var(--red)"
        />
      </div>

      <div className={styles.ctaRight}>
        <div className={styles.gradientBox}>
          <Image
            src="/LandingPage/contact.png"
            alt="Contact page visual"
            fill
            className={styles.imageContent}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
