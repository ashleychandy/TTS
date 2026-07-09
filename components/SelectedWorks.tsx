import styles from "./SelectedWorks.module.css";

export default function SelectedWorks() {
  const works = [
    { category: "DIGITAL DESIGN", id: 1 },
    { category: "BRAND IDENTITY", id: 2 },
    { category: "DIGITAL DESIGN", id: 3 },
    { category: "BRAND IDENTITY", id: 4 },
    { category: "DIGITAL DESIGN", id: 5 },
    { category: "BRAND IDENTITY", id: 6 }
  ];

  return (
    <section className={styles.selectedWorks} aria-labelledby="selected-works-heading">
      {/* Header */}
      <div className={`${styles.headerItem} ${styles.headerLeft}`}>
        SELECTED WORKS
      </div>
      <div className={`${styles.headerItem} ${styles.headerCenter}`} aria-hidden="true">
        Thirst Trap Studios
      </div>
      <div className={`${styles.headerItem} ${styles.headerRight}`} aria-hidden="true">
        2026 — BEYOND
      </div>

      {/* Main Title */}
      <h2 id="selected-works-heading" className={styles.mainTitle}>
        SELECTED
        <br />
        WORKS
      </h2>

      {/* Portfolio Grid */}
      {works.map((work) => (
        <article 
          key={work.id}
          className={`${styles.workItem} ${styles[`item${work.id}`]}`}
        >
          <div className={styles.cardVisual}></div>
          <p className={styles.uppercaseLabel}>{work.category}</p>
        </article>
      ))}

      {/* Bottom Info */}
      <div className={styles.bottomInfo}>
        4 PROJECTS
        <br />
        ACROSS 4 DISCIPLINES
      </div>
    </section>
  );
}
