"use client"; // needed for hooks

import { useLayoutEffect, useRef, useState } from "react";
import styles from "./Footer.module.css";

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

        <svg
          className={`${styles.starIcon} ${styles.whiteStar}`}
          viewBox="0 0 100 100"
        >
          <path d="M50 0 C50 35 35 50 0 50 C35 50 50 65 50 100 C50 65 65 50 100 50 C65 50 50 35 50 0 Z" />
        </svg>
      </div>

      <div className={styles.footerGrid}>
        <div className={styles.footerCol}>
          <div className={styles.footerText}>Thirst Trap Studios</div>
          <div className={styles.footerText}>BASED ON EARTH</div>

          <div className={styles.contactGroup}>
            <a href="mailto:contact.thirsttrapstudios@gmail.com" className={styles.emailCTA}>
              contact.thirsttrapstudios@gmail.com
            </a>
          </div>

          <div className={`${styles.footerText} ${styles.copyright}`}>
            © 2026 Thirst Trap Studios
          </div>
        </div>

        <div className={styles.footerCol}>
          <a href="/" className={styles.footerLink}>
            HOME
          </a>
          <a href="#" className={styles.footerLink}>
            ABOUT
          </a>
          <a href="#" className={styles.footerLink}>
            SERVICES
          </a>
          <a href="#" className={styles.footerLink}>
            SELECTED WORK
          </a>
          <a href="#" className={styles.footerLink}>
            PROCESS
          </a>
          <a href="/contact" className={styles.footerLink}>
            CONTACT
          </a>
        </div>

        <div className={styles.footerCol}>
          <a href="#" className={styles.footerLink}>
            PRIVACY POLICY
          </a>
          <a href="#" className={styles.footerLink}>
            COOKIE POLICY
          </a>
        </div>

        <div className={styles.footerCol}>
          <a href="https://www.instagram.com/thirst.trap.studios/" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
            INSTAGRAM ↗
          </a>
          
          <a href="https://www.linkedin.com/company/thirst-trap-studios/" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
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
