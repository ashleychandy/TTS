"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./FloatingHeader.module.css";

export default function FloatingHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className={styles.floatingHeader}>
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
          <div className={styles.dropdownMenu}>
            <Link href="/products/product-1" className={styles.dropdownItem}>
              LAKME
            </Link>
            <Link href="/products/product-2" className={styles.dropdownItem}>
              PLUM
            </Link>
            <Link href="#" className={styles.dropdownItem}>
              YOGA BAR
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
