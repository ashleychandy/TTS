import styles from "./SelectedWorks.module.css";

export default function SelectedWorks() {
  return (
    <section className={styles.selectedWorks}>
      {/* Header */}
      <div className={`${styles.headerItem} ${styles.headerLeft}`}>
        SELECTED WORKS
      </div>
      <div className={`${styles.headerItem} ${styles.headerCenter}`}>
        OCEANIC AGENCY
      </div>
      <div className={`${styles.headerItem} ${styles.headerRight}`}>
        2022 — 2025
      </div>

      {/* Main Title */}
      <h1 className={styles.mainTitle}>
        SELECTED
        <br />
        WORKS
      </h1>

      {/* Scattered Portfolio Elements */}
      <div className={`${styles.workItem} ${styles.item1}`}>
        <div className={styles.cardVisual}></div>
        <div className={styles.uppercaseLabel}>DIGITAL DESIGN</div>
      </div>

      <div className={`${styles.workItem} ${styles.item2}`}>
        <div className={styles.cardVisual}></div>
        <div className={styles.uppercaseLabel}>BRAND IDENTITY</div>
      </div>

      <div className={`${styles.workItem} ${styles.item3}`}>
        <div className={styles.cardVisual}></div>
        <div className={styles.uppercaseLabel}>DIGITAL DESIGN</div>
      </div>

      <div className={`${styles.workItem} ${styles.item4}`}>
        <div className={styles.cardVisual}></div>
        <div className={styles.uppercaseLabel}>BRAND IDENTITY</div>
      </div>

      <div className={`${styles.workItem} ${styles.item5}`}>
        <div className={styles.cardVisual}></div>
        <div className={styles.uppercaseLabel}>DIGITAL DESIGN</div>
      </div>

      <div className={`${styles.workItem} ${styles.item6}`}>
        <div className={styles.cardVisual}></div>
        <div className={styles.uppercaseLabel}>BRAND IDENTITY</div>
      </div>

      {/* Bottom Left Text */}
      <div className={styles.bottomInfo}>
        12+ PROJECTS DELIVERED
        <br />
        ACROSS 4 DISCIPLINES
      </div>
    </section>
  );
}
