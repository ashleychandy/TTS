import Image from "next/image";
import { IMAGES_TO_PRELOAD } from "@/lib/imagePreloader";
import styles from "./ProductPage2.module.css";

export default function ProductPage2() {
  return (
    <main className={styles.page}>
      <section className={styles.topBanner}>
        <div className={styles.bannerImage}>
          <Image
            src={IMAGES_TO_PRELOAD.product2Landing[0]}
            alt="Plom Banner"
            fill
            className={styles.productImage}
            sizes="100vw"
          />
        </div>
      </section>

      <section className={styles.brandSection}>
        <div className={styles.imageLarge}>
          <Image
            src={IMAGES_TO_PRELOAD.product2[0]}
            alt="Plom Product Image"
            fill
            className={styles.productImage}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>

        <div className={styles.brandTitle}>
          <span className={styles.brandFocus}>BRAND FOCUS</span>
          <h1>Plom.</h1>
        </div>

        <div className={styles.description}>
          <p>
            <strong>Plom</strong> is a premium sunscreen brand dedicated to
            protecting and nourishing your skin with advanced UV technology
            and natural ingredients.
          </p>
        </div>

        <div className={styles.imageSmall}>
          <Image
            src={IMAGES_TO_PRELOAD.product2[1]}
            alt="Plom Secondary Product"
            fill
            className={styles.productImage}
            sizes="(max-width: 900px) 100vw, 30vw"
          />
        </div>

        <div className={styles.imageBottom}>
          <Image
            src={IMAGES_TO_PRELOAD.product2[2]}
            alt="Plom Tertiary Product"
            fill
            className={styles.productImage}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className={styles.bottomSection}>
        <div className={styles.bottomSectionImage}>
          <Image
            src={IMAGES_TO_PRELOAD.product2Landing[1]}
            alt="Plom Bottom Banner"
            fill
            className={styles.productImage}
            sizes="100vw"
          />
        </div>
      </section>
    </main>
  );
}
