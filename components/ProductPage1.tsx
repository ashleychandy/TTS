/**
 * ProductPage1 component - Lakmé product showcase page
 * Features hero section, image gallery with modal viewer, and feature sections
 */

"use client";

import { useImageModal } from "@/hooks/useImageModal";
import { product1Data } from "@/data/product-1";
import ImageModal from "@/components/ui/ImageModal";
import ClickableImage from "@/components/ui/ClickableImage";
import styles from "./ProductPage1.module.css";

export default function ProductPage1() {
  const { enlargedImage, openModal, closeModal, isOpen } = useImageModal();

  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={`${styles.container} ${styles.hero}`}>
        <ClickableImage
          src={product1Data.heroImage.src}
          alt={product1Data.heroImage.alt}
          className={styles.heroImage}
          onClick={openModal}
          sizes="(max-width: 900px) 100vw, 50vw"
          priority
        />

        <div className={styles.heroContent}>
          <div className={styles.logo}>{product1Data.logo}</div>

          <p className={styles.about}>{product1Data.about}</p>

          <div>
            <h1 className={styles.titleBig}>{product1Data.title}</h1>
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
            </div>
          </div>

          <div className={styles.productGrid}>
            {product1Data.galleryImages.map((item, index) => (
              <article key={index} className={styles.product}>
                <ClickableImage
                  src={item.src}
                  alt={item.alt}
                  className={styles.productImage}
                  onClick={openModal}
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw"
                />
                <p>{item.label}</p>
              </article>
            ))}
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

            <ClickableImage
              src={product1Data.featureImages.small.src}
              alt={product1Data.featureImages.small.alt}
              className={styles.smallImage}
              onClick={openModal}
              sizes="(max-width: 900px) 100vw, 600px"
            />
          </div>

          <ClickableImage
            src={product1Data.featureImages.large.src}
            alt={product1Data.featureImages.large.alt}
            className={styles.largeImage}
            onClick={openModal}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* ENLARGED IMAGE MODAL */}
      {isOpen && enlargedImage && (
        <ImageModal
          src={enlargedImage}
          alt="Enlarged view"
          onClose={closeModal}
        />
      )}
    </main>
  );
}