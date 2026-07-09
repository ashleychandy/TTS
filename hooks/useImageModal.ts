/**
 * Custom hook for image modal functionality
 * Handles opening/closing modal, body scroll lock, and keyboard events
 * 
 * @returns Object with modal state and control functions
 */

import { useState, useEffect, useCallback } from "react";

export function useImageModal() {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  const openModal = useCallback((src: string) => {
    setEnlargedImage(src);
  }, []);

  const closeModal = useCallback(() => {
    setEnlargedImage(null);
  }, []);

  // Handle body scroll lock and keyboard events
  useEffect(() => {
    if (!enlargedImage) return;

    // Lock body scroll
    document.body.style.overflow = 'hidden';

    // Handle Escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      // Cleanup: restore scroll and remove listener
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [enlargedImage, closeModal]);

  return {
    enlargedImage,
    openModal,
    closeModal,
    isOpen: enlargedImage !== null,
  };
}
