"use client";

import Image from "next/image";
import styles from "./product_page_1.module.css";
import { useState, useEffect } from "react";

export default function ProductPage1() {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setEnlargedImage(src);
  };

  const handleCloseEnlarged = () => {
    setEnlargedImage(null);
  };

  // Handle body scroll lock and keyboard events
  useEffect(() => {
    if (enlargedImage) {
      // Lock body scroll
      document.body.style.overflow = 'hidden';

      // Handle Escape key
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          handleCloseEnlarged();
        }
      };

      document.addEventListener('keydown', handleEscape);

      return () => {
        // Cleanup: restore scroll and remove listener
        document.body.style.overflow = 'unset';
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, [enlargedImage]);

  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={`${styles.container} ${styles.hero}`}>
        <div 
          className={styles.heroImage}
          onClick={() => handleImageClick("/ProductPage1/4.png")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleImageClick("/ProductPage1/4.png");
            }
          }}
          aria-label="View large image of Lakmé Lip Balm hero"
        >
          <Image
            src="/ProductPage1/4.png"
            alt="Lakmé Lip Balm hero showcasing the premium product"
            fill
            className={styles.image}
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>

        <div className={styles.heroContent}>
          <div className={styles.logo}>Lakmé.</div>

          <p className={styles.about}>
            A premium campaign created to showcase the Lakmé Lip Balm through
            clean beauty visuals, expressive portraits, and product-focused
            storytelling. Every frame highlights hydration, softness, and
            effortless everyday beauty.
          </p>

          <div>
            <h1 className={styles.titleBig}>Lakmé Lip Balm.</h1>
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
            {[
              { src: "/ProductPage1/3.png", alt: "Beauty Portrait showcasing natural look", label: "Beauty Portrait" },
              { src: "/ProductPage1/2.png", alt: "Close-Up Campaign highlighting product detail", label: "Close-Up Campaign" },
              { src: "/ProductPage1/6.png", alt: "Natural Glow beauty shot", label: "Natural Glow" },
              { src: "/ProductPage1/5.png", alt: "Editorial Beauty Shot with artistic styling", label: "Editorial Beauty Shot" }
            ].map((item, index) => (
              <article key={index} className={styles.product}>
                <div 
                  className={styles.productImage}
                  onClick={() => handleImageClick(item.src)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleImageClick(item.src);
                    }
                  }}
                  aria-label={`View large image: ${item.label}`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className={styles.image}
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw"
                  />
                </div>
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

            <div 
              className={styles.smallImage}
              onClick={() => handleImageClick("/ProductPage1/lip balm 2.png")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleImageClick("/ProductPage1/lip balm 2.png");
                }
              }}
              aria-label="View large image of product close-up"
            >
              <Image
                src="/ProductPage1/lip balm 2.png"
                alt="Product close-up showcasing texture and quality"
                fill
                className={styles.image}
                sizes="(max-width: 900px) 100vw, 600px"
              />
            </div>
          </div>

          <div 
            className={styles.largeImage}
            onClick={() => handleImageClick("/ProductPage1/1.png")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleImageClick("/ProductPage1/1.png");
              }
            }}
            aria-label="View large image of featured product"
          >
            <Image
              src="/ProductPage1/1.png"
              alt="Featured product in elegant setting"
              fill
              className={styles.image}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ENLARGED IMAGE MODAL */}
      {enlargedImage && (
        <div 
          className={styles.modal} 
          onClick={handleCloseEnlarged}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <button
            className={styles.closeButton}
            onClick={handleCloseEnlarged}
            aria-label="Close image preview"
          >
            ✕
          </button>
          <div className={styles.modalContent}>
            <Image
              src={enlargedImage}
              alt="Enlarged view"
              fill
              className={styles.modalImage}
              sizes="90vw"
              priority
            />
          </div>
        </div>
      )}
    </main>
  );
}