import styles from "./FourWays.module.css";
import Image from "next/image";

export default function FourWays() {
  const services = [
    {
      id: "service-01",
      num: "01",
      title: "BRAND IDENTITY",
      desc: "BRAND LOGO, COLOR, TYPOGRAPHY, VOICE. EVERYTHING THAT MAKES A BRAND RECOGNIZABLE AT FIRST GLANCE."
    },
    {
      id: "service-02",
      num: "02",
      title: "DIGITAL DESIGN",
      desc: "LANDING PAGES, WEBSITES, UI/UX INTERFACES THAT CONVERT AND LEAVE AN IMPRESSION."
    },
    {
      id: "service-03",
      num: "03",
      title: "ART DIRECTION",
      desc: "FROM CONCEPT TO FINAL OUTPUT. WE OWN THE VISUAL IDEA AT EVERY STAGE OF THE PROCESS."
    },
    {
      id: "service-04",
      num: "04",
      title: "CREATIVE STUDIO",
      desc: "CAMPAIGNS, CONTENT, VISUAL SYSTEMS FOR SOCIAL MEDIA AND BEYOND."
    }
  ];

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
        <div className={styles.starIcon} aria-hidden="true">
          <svg viewBox="0 0 100 100" width="100%" height="100%">
            <path
              d="M 50,0 C 50,35 35,50 0,50 C 35,50 50,65 50,100 C 50,65 65,50 100,50 C 65,50 50,35 50,0 Z"
              fill="#ffffff"
            />
          </svg>
        </div>

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
            <span className={styles.num}>{service.num} —</span>
            <strong className={styles.serviceTitle}>{service.title}.</strong>
            <span className={styles.serviceDesc}> {service.desc}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
