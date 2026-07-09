"use client";

import styles from "./CTA.module.css";
import Image from "next/image";

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
              href="mailto:contact.thirsttrapstudios@gmail.com" 
              className={styles.btnPrimary}
              aria-label="Start a project - Contact us via email"
            >
              START A PROJECT
            </a>
          </div>
        </div>

        <svg
          className={`${styles.starIcon} ${styles.redStar}`}
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          <path d="M50 0 C50 35 35 50 0 50 C35 50 50 65 50 100 C50 65 65 50 100 50 C65 50 50 35 50 0 Z" />
        </svg>
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
