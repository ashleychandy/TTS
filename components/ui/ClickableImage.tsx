/**
 * ClickableImage component - Image that opens in modal when clicked
 * Handles keyboard navigation and accessibility
 * 
 * @param src - Image source URL
 * @param alt - Image alt text
 * @param className - Optional CSS class for wrapper
 * @param imageClassName - Optional CSS class for image itself
 * @param onClick - Click handler function
 * @param sizes - Next.js Image sizes prop
 * @param priority - Whether to priority load the image
 */

"use client";

import Image from "next/image";
import { KeyboardEvent } from "react";

interface ClickableImageProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  onClick: (src: string) => void;
  sizes?: string;
  priority?: boolean;
}

export default function ClickableImage({ 
  src, 
  alt, 
  className,
  imageClassName,
  onClick,
  sizes = "(max-width: 900px) 100vw, 50vw",
  priority = false
}: ClickableImageProps) {
  
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(src);
    }
  };

  return (
    <div
      className={className}
      onClick={() => onClick(src)}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label={`View large image: ${alt}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={imageClassName}
        sizes={sizes}
        priority={priority}
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
}
