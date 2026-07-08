import styles from "./Intro.module.css";
import Image from "next/image";

export default function Intro() {
  return (
    <section className={styles.intro}>
      {/* Corner Star Logo */}
      <div className={styles.cornerStar}>
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          {/* Cubic bezier path to draw a sharp 4-pointed sparkle star */}
          <path
            d="M 50,0 C 50,35 35,50 0,50 C 35,50 50,65 50,100 C 50,65 65,50 100,50 C 65,50 50,35 50,0 Z"
            fill="var(--red)"
          />
        </svg>
      </div>

      {/* Top Right Text */}
      <div className={`${styles.cornerText} ${styles.topRight}`}>
        CREATE
        <br />
        THE FUTURE
      </div>

      {/* Bottom Left Text */}
      <div className={`${styles.cornerText} ${styles.bottomLeft}`}>
        THIS IS OUR
        <br />
        PLAYGROUND
      </div>

      {/* Center Layout Container */}
      <div className={styles.mainContainer}>
        {/* Typography Section */}
        <div className={styles.textSection}>
          <div className={styles.headlineBlock}>
            <div className={`${styles.line} ${styles.line1}`}>
              WE HELP AMBITIOUS
            </div>
            <div className={styles.line}>TURN BOLD IDEAS INTO BRANDS</div>
            <div className={styles.line}>
              <span className={styles.textGrey}>POWERFUL VISUAL</span>

              {/* Inline Circle-Star Icon */}
              <span className={styles.inlineIcon}>
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                  <defs>
                    <mask id="star-mask">
                      <rect width="100" height="100" fill="white" />
                      {/* Slightly thicker star path for the cutout mask */}
                      <path
                        d="M 50,18 C 50,38 38,50 18,50 C 38,50 50,62 50,82 C 50,62 62,50 82,50 C 62,50 50,38 50,18 Z"
                        fill="black"
                      />
                    </mask>
                  </defs>
                  <circle
                    cx="50"
                    cy="50"
                    r="48"
                    fill="var(--red)"
                    mask="url(#star-mask)"
                  />
                </svg>
              </span>

              <span className={styles.textGrey}>IDENTITIES</span>
            </div>
            <div className={styles.line}>AND DIGITAL EXPERIENCES</div>
          </div>

          <div className={styles.subText}>
            WE CREATE BRANDS, VISUAL SYSTEMS AND DIGITAL EXPERIENCES
            <br />
            THAT HELP COMPANIES STAND OUT IN A FAST-MOVING WORLD.
          </div>
        </div>

        {/* 4 Gradient Cards Section */}
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <Image
              src="/LandingPage/Intro 1.png"
              alt="Brand identity showcase"
              fill
              className={styles.cardImage}
            />
          </div>
          <div className={styles.card}>
            <Image
              src="/LandingPage/Intro 2.png"
              alt="Digital design example"
              fill
              className={styles.cardImage}
            />
          </div>
          <div className={styles.card}>
            <Image
              src="/LandingPage/Intro 3.png"
              alt="Creative direction work"
              fill
              className={styles.cardImage}
            />
          </div>
          <div className={styles.card}>
            <Image
              src="/LandingPage/Intro 4.png"
              alt="Visual system design"
              fill
              className={styles.cardImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
