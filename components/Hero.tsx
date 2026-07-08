import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Top Navigation */}
        <header className={styles.header}>
          <div className={styles.logo}>
            <span className={styles.logoStar}>✸</span>
            <span>RUFAU</span>
          </div>
          <div>
            DIGITAL
            <br />
            DESIGN
          </div>
          <div>
            ART
            <br />
            DIRECTION
          </div>
          <div className={styles.headerItemRight}>
            BASED IN EUROPE
            <br />
            WORKING WORLDWIDE
          </div>
        </header>

        {/* Middle Content */}
        <main className={styles.middleSection}>
          <div className={styles.projectsInfo}>
            SELECTED PROJECTS
            <br />
            2022 — 2025
          </div>

          <div className={styles.agencyInfo}>
            <div className={styles.agencyDescription}>
              CREATIVE AGENCY
              <br />
              TURNING BOLD IDEAS,
              <br />
              VISUAL SYSTEMS AND
              <br />
              DIGITAL EXPERIENCES.
            </div>

            <div className={styles.services}>
              <div>
                CREATIVE
                <br />
                STUDIO
              </div>
              <div>
                BRAND
                <br />
                IDENTITY
              </div>
            </div>
          </div>
        </main>

        {/* Bottom Huge Text */}
        <footer className={styles.footerText}>
          <h1 className={styles.hugeText}>CREATE</h1>
        </footer>
      </div>
    </section>
  );
}
