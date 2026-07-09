"use client";

import Image from "next/image";
import styles from "./product_page_1.module.css";

export default function ProductPage1() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={`${styles.container} ${styles.hero}`}>
        <div className={styles.heroImage}>
          <Image
            src="/ProductPage1/4.png"
            alt="Lakmé Lip Balm hero"
            fill
            className={styles.image}
          />
        </div>

        <div className={styles.heroContent}>
          <div className={styles.logo}>Lakmé.</div>

          <div className={styles.about}>
            A premium campaign created to showcase the Lakmé Lip Balm through
            clean beauty visuals, expressive portraits, and product-focused
            storytelling. Every frame highlights hydration, softness, and
            effortless everyday beauty.
          </div>

          <div>
            <div className={styles.titleSmall}>Campaign Spotlight</div>
            <div className={styles.titleBig}>Lakmé Lip Balm.</div>
          </div>
        </div>
      </section>

      {/* CAMPAIGN GALLERY */}
      <section className={styles.best}>
        <div className={styles.container}>
          <div className={styles.bestTop}>
            <h2>CAMPAIGN GALLERY</h2>

            <div className={styles.bestDesc}>
              <p>
                A curated collection of lifestyle portraits featuring the Lakmé
                Lip Balm. The campaign combines soft lighting, minimal styling,
                and premium product placement to create engaging marketing
                visuals across digital and social platforms.
              </p>

              <a href="#" className={styles.shopBtn}>
                VIEW CAMPAIGN →
              </a>
            </div>
          </div>

          <div className={styles.productGrid}>
            <div className={styles.product}>
              <div className={styles.productImage}>
                <Image
                  src="/ProductPage1/3.png"
                  alt="Beauty Portrait"
                  fill
                  className={styles.image}
                />
              </div>
              <p>Beauty Portrait</p>
            </div>

            <div className={styles.product}>
              <div className={styles.productImage}>
                <Image
                  src="/ProductPage1/2.png"
                  alt="Close-Up Campaign"
                  fill
                  className={styles.image}
                />
              </div>
              <p>Close-Up Campaign</p>
            </div>

            <div className={styles.product}>
              <div className={styles.productImage}>
                <Image
                  src="/ProductPage1/6.png"
                  alt="Natural Glow"
                  fill
                  className={styles.image}
                />
              </div>
              <p>Natural Glow</p>
            </div>

            <div className={styles.product}>
              <div className={styles.productImage}>
                <Image
                  src="/ProductPage1/5.png"
                  alt="Editorial Beauty Shot"
                  fill
                  className={styles.image}
                />
              </div>
              <p>Editorial Beauty Shot</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE */}
      <section className={`${styles.container} ${styles.feature}`}>
        <div className={styles.featureGrid}>
          <div className={styles.featureLeft}>
            <h2>
              BEAUTY THAT
              <br />
              FEELS EFFORTLESS.
            </h2>

            <div className={styles.smallImage}>
              <Image
                src="/ProductPage1/lip balm 2.png"
                alt="Product close-up"
                fill
                className={styles.image}
              />
            </div>
          </div>

          <div className={styles.largeImage}>
            <Image
              src="/ProductPage1/1.png"
              alt="Feature product"
              fill
              className={styles.image}
            />
          </div>
        </div>
      </section>
    </main>
  );
}