"use client";

import Image from "next/image";

interface ImageModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function ImageModal({ src, alt, onClose }: ImageModalProps) {
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 bg-black/95 z-[300] flex items-center justify-center p-5 animate-fadeIn will-change-opacity md:p-4 sm:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
    >
      <button
        className="fixed top-5 right-5 bg-white/10 border-2 border-white/30 text-white text-3xl w-14 h-14 rounded-full cursor-pointer z-[301] transition-all duration-200 flex items-center justify-center leading-none p-0 backdrop-blur hover:bg-white/20 hover:border-white/50 hover:rotate-90 md:top-4 md:right-4 md:w-12 md:h-12 md:text-2xl sm:top-4 sm:right-4 sm:w-12 sm:h-12 sm:text-2xl"
        onClick={onClose}
        aria-label="Close image preview"
      >
        ✕
      </button>
      <div
        className="relative w-[90vw] h-[90vh] max-w-[1400px] md:w-[95vw] md:h-[85vh] sm:w-[95vw] sm:h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image src={src} alt={alt} fill className="object-contain" sizes="90vw" priority />
      </div>
    </div>
  );
}
