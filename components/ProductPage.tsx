/**
 * Generic ProductPage component - Handles both product showcase and coming soon states
 * Consolidates ProductPage1 and ProductPage2 logic into a single flexible component
 */

"use client";

import Link from "next/link";
import type { ProductImage } from "@/types/index";
import { useImageModal } from "@/hooks/useImageModal";
import { SITE_CONFIG } from "@/lib/constants";
import ImageModal from "@/components/ui/ImageModal";
import ClickableImage from "@/components/ui/ClickableImage";
import StarIcon from "@/components/ui/StarIcon";
import styles from "./ProductPage.module.css";

export interface ProductPageData {
  logo?: string;
  title: string;
  about?: string;
  heroImage?: {
    src: string;
    alt: string;
  };
  galleryImages?: ProductImage[];
  featureImages?: {
    small: { src: string; alt: string };
    large: { src: string; alt: string };
  };
  featureHeading?: string;
  galleryTitle?: string;
  galleryDescription?: string;
}

interface ProductPageProps {
  data: ProductPageData | null;
  isComingSoon?: boolean;
}

export default function ProductPage({
  data,
  isComingSoon = false,
}: ProductPageProps) {
  const { enlargedImage, openModal, closeModal, isOpen } = useImageModal();

  if (isComingSoon || !data) {
    return (
      <main className={styles.page}>
        <section className={`${styles.container} ${styles.hero}`}>
          <div className={styles.heroContent}>
            <div className={styles.starWrapper}>
              <StarIcon className={styles.star} fill="#a80015" />
            </div>

            <h1 className={styles.comingSoon}>COMING SOON</h1>

            <p className={styles.subtitle}>
              This project is currently in development. Check back soon to see
              our work with innovative beauty brands pushing boundaries.
            </p>

            <div className={styles.actions}>
              <Link href="/" className={styles.btnPrimary}>
                Back to Home
              </Link>
              <Link href="/products/product-1" className={styles.btnSecondary}>
                View Other Projects
              </Link>
            </div>

            <div className={styles.info}>
              <p>Questions about this project?</p>
              <a
                href={`mailto:${SITE_CONFIG.contactEmail}`}
                className={styles.emailLink}
              >
                {SITE_CONFIG.contactEmail}
              </a>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={`${styles.container} ${styles.hero}`}>
        {data.heroImage && (
          <ClickableImage
            src={data.heroImage.src}
            alt={data.heroImage.alt}
            className={styles.heroImage}
            onClick={openModal}
            sizes="(max-width: 900px) 100vw, 50vw"
            priority
          />
        )}

        <div className={styles.heroContent}>
          {data.logo && <div className={styles.logo}>{data.logo}</div>}

          {data.about && <p className={styles.about}>{data.about}</p>}

          <div>
            <h1 className={styles.titleBig}>{data.title}</h1>
          </div>
        </div>
      </section>

      {/* CAMPAIGN GALLERY */}
      {data.galleryImages && data.galleryImages.length > 0 && (
        <section className={styles.best}>
          <div className={styles.container}>
            <div className={styles.bestTop}>
              <h2>{data.galleryTitle || "CAMPAIGN GALLERY"}</h2>

              {data.galleryDescription && (
                <div className={styles.bestDesc}>
                  <p>{data.galleryDescription}</p>
                </div>
              )}
            </div>

            <div className={styles.productGrid}>
              {data.galleryImages.map((item, index) => (
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
      )}

      {/* FEATURE */}
      {data.featureImages && (
        <section className={`${styles.container} ${styles.feature}`}>
          <div className={styles.featureGrid}>
            <div className={styles.featureLeft}>
              <h2>
                {data.featureHeading || "BEAUTY THAT"}
                <br />
                {data.featureHeading ? "" : "FEELS EFFORTLESS."}
              </h2>

              <ClickableImage
                src={data.featureImages.small.src}
                alt={data.featureImages.small.alt}
                className={styles.smallImage}
                onClick={openModal}
                sizes="(max-width: 900px) 100vw, 600px"
              />
            </div>

            <ClickableImage
              src={data.featureImages.large.src}
              alt={data.featureImages.large.alt}
              className={styles.largeImage}
              onClick={openModal}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        </section>
      )}

      {/* ENLARGED IMAGE MODAL */}
      {isOpen && enlargedImage && (
        <ImageModal src={enlargedImage} alt="Enlarged view" onClose={closeModal} />
      )}
    </main>
  );
}
