/**
 * Hero component - Main landing section with dynamic text sizing
 * Features full-viewport background, header navigation, and fitted text
 */

"use client";

import Image from "next/image";
import { useFitText } from "@/hooks/useFitText";
import styles from "./Hero.module.css";

export default function Hero() {
  const { containerRef, textRef, fontSize } = useFitText(24); // 24px padding, each side

  return (
    <section className={styles.hero}>
      <Image
        src="/LandingPage/hero.png"
        alt=""
        fill
        className={styles.heroImage}
        priority
        sizes="100vw"
      />
      <div className={styles.container}>
        <header className={styles.header}>
          <div></div>
          <div><br /></div>
          <div>ART<br />DIRECTION</div>
          <div className={styles.headerItemRight}>
            BASED ON EARTH<br />WORKING WORLDWIDE
          </div>
        </header>

        <div className={styles.middleSection}>
          <p className={styles.projectsInfo}>
            DIGITAL DESIGN
          </p>

          <div className={styles.agencyInfo}>
            <p className={styles.agencyDescription}>
              THIRST TRAP STUDIOS<br />
              TURNING BOLD IDEAS,<br />
              VISUAL SYSTEMS AND<br />
              DIGITAL EXPERIENCES.
            </p>

            <div className={styles.services}>
              <div>CREATIVE<br />STUDIO</div>
              <div>BRAND<br />IDENTITY</div>
            </div>
          </div>
        </div>

        <footer className={styles.footerText} ref={containerRef}>
          <h1
            className={styles.hugeText}
            ref={textRef}
            style={fontSize ? { fontSize: `${fontSize}px` } : undefined}
          >
            CREATE
          </h1>
        </footer>
      </div>
    </section>
  );
}