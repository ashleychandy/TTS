/**
 * FloatingHeader component - Sticky navigation header
 * Features logo, dropdown menu, and responsive mobile behavior
 * 
 * @param position - Whether to position left or right (default: "left")
 */

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useMediaQuery, BREAKPOINTS } from "@/hooks/useMediaQuery";
import { SITE_CONFIG } from "@/lib/constants";
import { portfolioNavigation } from "@/data/navigation";
import StarIcon from "@/components/ui/StarIcon";
import styles from "./FloatingHeader.module.css";

interface FloatingHeaderProps {
  position?: "left" | "right";
}

export default function FloatingHeader({ position = "left" }: FloatingHeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery(BREAKPOINTS.tablet);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close dropdown on mobile
  useEffect(() => {
    if (!isMobile || !isDropdownOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobile, isDropdownOpen]);

  const toggleDropdown = () => {
    if (isMobile) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  return (
    <header className={`${styles.floatingHeader} ${position === "right" ? styles.floatingHeaderRight : ""}`}>
      <Link href="/" className={styles.logoButton} aria-label={`Home - ${SITE_CONFIG.name}`}>
        <StarIcon className={styles.logoStar} fill="currentColor" aria-hidden="true" />
        <span>{SITE_CONFIG.name}</span>
      </Link>
      
      <div 
        ref={dropdownRef}
        className={styles.dropdown}
        onMouseEnter={() => !isMobile && setIsDropdownOpen(true)}
        onMouseLeave={() => !isMobile && setIsDropdownOpen(false)}
      >
        <button 
          className={styles.dropdownButton}
          onClick={toggleDropdown}
          aria-expanded={isDropdownOpen}
          aria-haspopup="true"
          aria-label="Portfolio menu"
        >
          PORTFOLIO
          <span className={`${styles.arrow} ${isDropdownOpen ? styles.arrowOpen : ''}`} aria-hidden="true">▾</span>
        </button>
        
        {isDropdownOpen && (
          <nav className={`${styles.dropdownMenu} ${position === "right" ? styles.dropdownMenuRight : ""}`}>
            {portfolioNavigation.map((item, index) => (
              item.disabled ? (
                <span
                  key={`portfolio-${item.label}-${index}`}
                  className={`${styles.dropdownItem} ${styles.dropdownItemDisabled}`}
                  aria-disabled="true"
                >
                  {item.label}
                </span>
              ) : (
                <Link 
                  key={`portfolio-${item.label}-${index}`}
                  href={item.href} 
                  className={styles.dropdownItem}
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
