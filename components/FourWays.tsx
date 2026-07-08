import styles from "./FourWays.module.css";

export default function FourWays() {
  return (
    <section className={styles.fourWays}>
      <div className={styles.posterCanvas}>
        {/* Top Right Star SVG */}
        <div className={styles.starIcon}>
          <svg viewBox="0 0 100 100" width="100%" height="100%">
            <path
              d="M 50,0 C 50,35 35,50 0,50 C 35,50 50,65 50,100 C 50,65 65,50 100,50 C 65,50 50,35 50,0 Z"
              fill="#ffffff"
            />
          </svg>
        </div>

        {/* Main Title */}
        <div className={styles.headline}>
          <div>FOUR WAYS TO</div>
          <div>MAKE YOUR BRAND</div>
          <div className={styles.line3}>UNFORGETTABLE</div>
        </div>

        {/* Detail Block 01 */}
        <div className={`${styles.textBlock} ${styles.item01}`}>
          <span className={styles.num}>01 —</span> BRAND IDENTITY. BRAND
          <br />
          LOGO, COLOR, TYPOGRAPHY, VOICE.
          <br />
          EVERYTHING THAT MAKES A BRAND
          <br />
          RECOGNIZABLE AT FIRST GLANCE.
        </div>

        {/* Detail Block 02 */}
        <div className={`${styles.textBlock} ${styles.item02}`}>
          <span className={styles.num}>02 —</span> DIGITAL DESIGN LANDING
          <br />
          PAGES, WEBSITES, UI/UX
          <br />
          INTERFACES THAT CONVERT
          <br />
          AND LEAVE AN IMPRESSION.
        </div>

        {/* Detail Block 03 */}
        <div className={`${styles.textBlock} ${styles.item03}`}>
          <span className={styles.num}>03 —</span> ART DIRECTION. FROM
          <br />
          CONCEPT TO FINAL OUTPUT. WE
          <br />
          OWN THE VISUAL IDEA AT EVERY
          <br />
          STAGE OF THE PROCESS.
        </div>

        {/* Detail Block 04 */}
        <div className={`${styles.textBlock} ${styles.item04}`}>
          <span className={styles.num}>04 —</span> CREATIVE STUDIO
          <br />
          CAMPAIGNS, CONTENT,
          <br />
          VISUAL SYSTEMS FOR
          <br />
          SOCIAL MEDIA AND BEYOND.
        </div>
      </div>
    </section>
  );
}
