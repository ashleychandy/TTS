"use client";

import Image from "next/image";
import styles from "./product_page_2.module.css";

export default function ProductPage2() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={`${styles.container} ${styles.hero}`}>
        <div className={styles.heroImage}></div>

        <div className={styles.heroContent}>
          <div className={styles.logo}>glowy.</div>

          <div className={styles.about}>
            glowy is on a mission to make you look and feel confident. Our
            products are high performance, skin-loving and cruelty free.
          </div>

          <div>
            <div className={styles.titleSmall}>we are</div>
            <div className={styles.titleBig}>glowy.</div>
          </div>
        </div>
      </section>

      {/* BESTSELLERS */}
      <section className={styles.best}>
        <div className={styles.container}>
          <div className={styles.bestTop}>
            <h2>OUR BESTSELLERS</h2>

            <div className={styles.bestDesc}>
              <p>
                Explore our most loved products, trusted by thousands for
                glowing beauty skin. High performance formulas that deliver
                real results every time.
              </p>

              <a href="#" className={styles.shopBtn}>
                SHOP BESTSELLERS →
              </a>
            </div>
          </div>

          <div className={styles.productGrid}>
            <div className={styles.product}>
              <div className={styles.productImage}></div>
              <p>HYDRATING SERUM</p>
            </div>

            <div className={styles.product}>
              <div className={styles.productImage}></div>
              <p>NIACINAMIDE GLOW SERUM</p>
            </div>

            <div className={styles.product}>
              <div className={styles.productImage}></div>
              <p>DAILY GLOW SUNSCREEN</p>
            </div>

            <div className={styles.product}>
              <div className={styles.productImage}></div>
              <p>BARRIER REPAIR + CARE MOISTURIZER</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE */}
      <section className={`${styles.container} ${styles.feature}`}>
        <div className={styles.featureGrid}>
          <div className={styles.featureLeft}>
            <h2>
              FOR LIPS AND CHEEKS.
              <br />
              FOR KISS AND SAY.
            </h2>

            <div className={styles.smallImage}></div>
          </div>

          <div className={styles.largeImage}></div>
        </div>
      </section>
    </main>
  );
}
