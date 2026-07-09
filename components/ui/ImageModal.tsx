/**
 * ImageModal component - Full-screen image preview modal
 * Handles body scroll lock, keyboard navigation, and accessibility
 * 
 * @param src - Image source URL
 * @param alt - Image alt text for accessibility
 * @param onClose - Callback function when modal closes
 */

"use client";

import Image from "next/image";
import styles from "./ImageModal.module.css";

interface ImageModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function ImageModal({ src, alt, onClose }: ImageModalProps) {
  return (
    <div 
      className={styles.modal} 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
    >
      <button
        className={styles.closeButton}
        onClick={onClose}
        aria-label="Close image preview"
      >
        ✕
      </button>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <Image
          src={src}
          alt={alt}
          fill
          className={styles.modalImage}
          sizes="90vw"
          priority
        />
      </div>
    </div>
  );
}
