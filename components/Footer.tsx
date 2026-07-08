import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <p className={styles.footerDesc}>
          WE ARE AN INDEPENDENT CREATIVE AGENCY BASED
          <br />
          IN EUROPE. WE COMBINE BOLD VISION WITH SHARP
          <br />
          EXECUTION AND DELIVER AT STARTUP SPEED.
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
            <div className={styles.footerText}>ksshlv@creativestudio.com</div>
            <div className={styles.footerText}>+38 000 000 000</div>
          </div>

          <div className={`${styles.footerText} ${styles.copyright}`}>
            © 2026 CREATIVE AGENCY
          </div>
        </div>

        <div className={styles.footerCol}>
          <a href="#" className={styles.footerLink}>
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
            TESTIMONIALS
          </a>
          <a href="#" className={styles.footerLink}>
            PROCESS
          </a>
          <a href="#" className={styles.footerLink}>
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
          <a href="#" className={styles.footerLink}>
            INSTAGRAM ↗
          </a>
          <a href="#" className={styles.footerLink}>
            BEHANCE ↗
          </a>
          <a href="#" className={styles.footerLink}>
            LINKEDIN ↗
          </a>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <h2 className={styles.massiveText}>AGENCY</h2>
      </div>
    </footer>
  );
}
