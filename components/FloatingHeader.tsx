"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./FloatingHeader.module.css";

interface FloatingHeaderProps {
  position?: "left" | "right";
}

export default function FloatingHeader({ position = "left" }: FloatingHeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
      <Link href="/" className={styles.logoButton} aria-label="Home - Thirst Trap Studios">
        <span className={styles.logoStar} aria-hidden="true">✸</span>
        <span>Thirst Trap Studios</span>
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
          aria-label="Projects menu"
        >
          PROJECTS
          <span className={`${styles.arrow} ${isDropdownOpen ? styles.arrowOpen : ''}`} aria-hidden="true">▾</span>
        </button>
        
        {isDropdownOpen && (
          <nav className={`${styles.dropdownMenu} ${position === "right" ? styles.dropdownMenuRight : ""}`}>
            <Link href="/products/product-1" className={styles.dropdownItem}>
              LAKME
            </Link>
            <Link href="/products/product-2" className={`${styles.dropdownItem} ${styles.dropdownItemDisabled}`}>
              PLUM
            </Link>
            <Link href="#" className={`${styles.dropdownItem} ${styles.dropdownItemDisabled}`}>
              YOGA BAR
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
