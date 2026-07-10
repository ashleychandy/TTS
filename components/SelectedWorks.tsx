/**
 * SelectedWorks component - Portfolio grid section
 * Displays scattered card layout with work categories
 * Dynamically sizes cards based on image aspect ratios while maintaining relative sizing
 */

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { works } from "@/data/works";
import styles from "./SelectedWorks.module.css";

interface ImageDimensions {
  [key: number]: { width: number; height: number };
}

// Define relative sizes for items (big vs small)
const itemSizes: { [key: number]: number } = {
  1: 1.6, // Large
  2: 1,   // Small
  3: 1,   // Small
  4: 1.6, // Large
  5: 1,   // Small
  6: 1,   // Small
};

export default function SelectedWorks() {
  const [imageDimensions, setImageDimensions] = useState<ImageDimensions>({});
  const [scale, setScale] = useState(1);

  // Fetch image dimensions dynamically
  useEffect(() => {
    const loadImageDimensions = async () => {
      const dimensions: ImageDimensions = {};

      for (const work of works) {
        try {
          const img = new window.Image();
          await new Promise((resolve) => {
            img.onload = resolve;
            img.onerror = resolve;
            img.src = work.image;
          });
          dimensions[work.id] = {
            width: img.naturalWidth || 1,
            height: img.naturalHeight || 1,
          };
        } catch {
          dimensions[work.id] = { width: 1, height: 1 };
        }
      }

      setImageDimensions(dimensions);
    };

    loadImageDimensions();
  }, []);

  // Calculate scaling factor to fit all items on screen
  useEffect(() => {
    const calculateScale = () => {
      // Find the item that extends furthest right and bottom
      let maxRight = 0;
      let maxBottom = 0;

      const itemPositions: { [key: number]: { x: number; y: number; w: number; h: number } } = {
        1: { x: 2.5, y: 18, w: 18.5, h: 24 },
        2: { x: 23.5, y: 18, w: 11.5, h: 12 },
        3: { x: 37.5, y: 40.5, w: 11.5, h: 12 },
        4: { x: 51.5, y: 40.5, w: 18.5, h: 24.5 },
        5: { x: 72.5, y: 62.5, w: 11.5, h: 12.5 },
        6: { x: 86.5, y: 40.5, w: 11.5, h: 12 },
      };

      Object.entries(itemPositions).forEach(([, pos]) => {
        const right = pos.x + pos.w;
        const bottom = pos.y + pos.h;
        maxRight = Math.max(maxRight, right);
        maxBottom = Math.max(maxBottom, bottom);
      });

      // Calculate scale to fit within viewport (100vw = 100, 100vh = 100)
      const scaleX = 100 / maxRight;
      const scaleY = 100 / maxBottom;
      const calculatedScale = Math.min(scaleX, scaleY, 1); // Don't scale up, only down

      setScale(calculatedScale);
    };

    calculateScale();
  }, []);

  // Calculate item style with relative sizing maintained
  const getItemStyle = (workId: number) => {
    const dims = imageDimensions[workId];
    const sizeMultiplier = itemSizes[workId] || 1;
    const baseWidth = 11.5 * sizeMultiplier; // vw
    
    const width = baseWidth * scale;
    let height = width; // Default square

    if (dims && dims.height > 0) {
      const aspectRatio = dims.width / dims.height;
      height = width / aspectRatio;
    }

    return {
      "--item-width": `${width}vw`,
      "--item-height": `${height}vw`,
    } as React.CSSProperties;
  };

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
          style={getItemStyle(work.id)}
        >
          <div className={styles.cardVisual}>
            {imageDimensions[work.id] && (
              <Image
                src={work.image}
                alt={work.alt}
                fill
                className={styles.cardImage}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            )}
          </div>
          <p className={styles.uppercaseLabel}>{work.category}</p>
        </article>
      ))}

      {/* Bottom Info */}
      <div className={styles.bottomInfo}>
        6 PROJECTS
        <br />
        ACROSS 4 DISCIPLINES
      </div>
    </section>
  );
}

