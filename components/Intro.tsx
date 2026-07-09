import styles from "./Intro.module.css";
import Image from "next/image";

export default function Intro() {
  return (
    <section className={styles.intro}>
      {/* Corner Star Logo */}
      <div className={styles.cornerStar} aria-hidden="true">
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
          <h2 className={styles.headlineBlock}>
            <span className={`${styles.line} ${styles.line1}`}>
              WE HELP AMBITIOUS
            </span>
            <span className={styles.line}>TURN BOLD IDEAS INTO BRANDS</span>
            <span className={styles.line}>
              <span className={styles.textGrey}>POWERFUL VISUAL</span>

              {/* Inline Circle-Star Icon */}
              <span className={styles.inlineIcon} aria-hidden="true">
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
            </span>
            <span className={styles.line}>AND DIGITAL EXPERIENCES</span>
          </h2>

          <p className={styles.subText}>
            WE CREATE BRANDS, VISUAL SYSTEMS AND DIGITAL EXPERIENCES
            <br />
            THAT HELP COMPANIES STAND OUT IN A FAST-MOVING WORLD.
          </p>
        </div>

        {/* 4 Gradient Cards Section */}
        <div className={styles.cardsContainer}>
          {[
            { id: "intro-1", src: "/LandingPage/Intro 1.png", alt: "Brand identity showcase example" },
            { id: "intro-2", src: "/LandingPage/Intro 2.png", alt: "Digital design portfolio piece" },
            { id: "intro-3", src: "/LandingPage/Intro 3.png", alt: "Creative direction work sample" },
            { id: "intro-4", src: "/LandingPage/Intro 4.png", alt: "Visual system design example" }
          ].map((item) => (
            <article key={item.id} className={styles.card}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className={styles.cardImage}
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
