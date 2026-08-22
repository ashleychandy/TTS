"use client";

import { useState, useEffect } from "react";
import { smoothScrollToTop } from "@/lib/smoothScroll";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    toggleVisibility();

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
      className="fixed bottom-10 right-10 w-14 h-14 bg-primary-red-brand text-white border-none rounded-full cursor-pointer flex items-center justify-center shadow-lg transition-all duration-300 z-[200] animate-fadeIn hover:bg-primary-red-medium hover:translate-y-[-4px] hover:shadow-xl active:translate-y-[-2px] md:bottom-6 md:right-6 md:w-12 md:h-12 sm:bottom-5 sm:right-5 sm:w-11 sm:h-11"
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
        className="md:w-5 md:h-5 sm:w-[18px] sm:h-[18px]"
      >
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>
  );
}
