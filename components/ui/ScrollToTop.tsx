/**
 * ScrollToTop button component
 * Shows a button to scroll back to top when user scrolls down
 */

"use client";

import { useState, useEffect } from "react";
import { smoothScrollToTop } from "@/lib/smoothScroll";
import styles from "./ScrollToTop.module.css";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Check on mount
    toggleVisibility();

    // Add scroll listener
    window.addEventListener("scroll", toggleVisibility, { passive: true });

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleClick = () => {
    smoothScrollToTop(800);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={handleClick}
      className={styles.scrollToTop}
      aria-label="Scroll to top"
      type="button"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>
  );
}
