"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./FloatingHeader.module.css";

interface FloatingHeaderProps {
  position?: "left" | "right";
}

export default function FloatingHeader({ position = "left" }: FloatingHeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className={`${styles.floatingHeader} ${position === "right" ? styles.floatingHeaderRight : ""}`}>
      <Link href="/" className={styles.logoButton}>
        <span className={styles.logoStar}>✸</span>
        <span>Thirst Trap Studios</span>
      </Link>
      
      <div 
        className={styles.dropdown}
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <button className={styles.dropdownButton}>
          PROJECTS
          <span className={styles.arrow}>▾</span>
        </button>
        
        {isDropdownOpen && (
          <div className={`${styles.dropdownMenu} ${position === "right" ? styles.dropdownMenuRight : ""}`}>
            <Link href="/products/product-1" className={styles.dropdownItem}>
              LAKME
            </Link>
            <Link href="/products/product-2" className={`${styles.dropdownItem} ${styles.dropdownItemDisabled}`}>
              PLUM
            </Link>
            <Link href="#" className={`${styles.dropdownItem} ${styles.dropdownItemDisabled}`}>
              YOGA BAR
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
