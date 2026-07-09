"use client"; // needed now — this component uses hooks

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

function useFitText(paddingPx = 24) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const [fontSize, setFontSize] = useState<number | null>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) return;

    const fit = () => {
      const available = container.clientWidth - paddingPx * 2;
      if (available <= 0) return;

      const prevFontSize = text.style.fontSize;
      text.style.fontSize = "100px"; // fixed reference size
      const natural = text.scrollWidth; // real width at 100px
      text.style.fontSize = prevFontSize;

      if (natural > 0) setFontSize((available / natural) * 100);
    };

    // measure only after the real font has loaded, not the fallback
    if (typeof document !== "undefined" && "fonts" in document) {
      document.fonts.ready.then(fit);
    } else {
      fit();
    }

    const observer = new ResizeObserver(fit);
    observer.observe(container);
    return () => observer.disconnect();
  }, [paddingPx]);

  return { containerRef, textRef, fontSize };
}

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