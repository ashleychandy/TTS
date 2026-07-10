/**
 * FourWays component - Services showcase section
 * Features poster-style layout with background image and service cards
 */

import Image from "next/image";
import { services } from "@/data/services";
import StarIcon from "@/components/ui/StarIcon";
import styles from "./FourWays.module.css";

export default function FourWays() {
  return (
    <section className={styles.fourWays} aria-labelledby="four-ways-heading">
      <Image
        src="/LandingPage/Four Ways.png"
        alt=""
        fill
        className={styles.fourWaysImage}
        sizes="100vw"
      />
      <div className={styles.posterCanvas}>
        {/* Top Right Star SVG */}
        <StarIcon className={styles.starIcon} fill="#ffffff" />

        {/* Main Title */}
        <h2 id="four-ways-heading" className={styles.headline}>
          <span>FOUR WAYS TO</span>
          <span>MAKE YOUR BRAND</span>
          <span className={styles.line3}>UNFORGETTABLE</span>
        </h2>

        {/* Service Blocks */}
        {services.map((service, index) => (
          <article 
            key={service.id}
            className={`${styles.textBlock} ${styles[`item0${index + 1}`]}`}
          >
            <span className={styles.num}>{service.num}</span>
            <strong className={styles.serviceTitle}>{service.title}.</strong>
            <span className={styles.serviceDesc}> {service.desc}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
