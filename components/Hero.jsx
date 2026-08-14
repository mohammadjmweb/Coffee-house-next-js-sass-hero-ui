import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>

      {/* ================= BACKGROUND ================= */}

      <div className={styles.imageWrapper}>
        <Image
          src="https://idbinvest.org/sites/default/files/styles/size936x656/public/blog_post/iStock_000043355764Small2.jpg.webp?itok=C2I_4rS3"
          alt="Freshly brewed coffee"
          fill
          priority
          sizes="100vw"
          className={styles.image}
        />

        <div className={styles.imageOverlay}></div>
      </div>

      {/* ================= CONTENT ================= */}

      <div className={styles.content}>

        <span className={styles.subtitle}>
          WELCOME TO COFFEE HOUSE
        </span>

        <h1>
          Every Cup Has
          <br />
          <strong>Its Own Story</strong>
        </h1>

        <p>
          Freshly roasted coffee, delicious flavors,
          <br />
          and unforgettable moments.
        </p>

        {/* ================= BUTTONS ================= */}

        <div className={styles.actions}>

          <Link
            href="/menu"
            className={`${styles.button} ${styles.primaryButton}`}
          >
            <span>Explore Menu</span>
            <span className={styles.buttonArrow}>→</span>
          </Link>

          <Link
            href="/about"
            className={`${styles.button} ${styles.secondaryButton}`}
          >
            <span>Our Story</span>
            <span className={styles.buttonArrow}>↗</span>
          </Link>

        </div>

      </div>

      {/* ================= BADGE ================= */}

      <div className={styles.badge}>

        <span className={styles.badgeIcon}>
          ☕
        </span>

        <div className={styles.badgeContent}>
          <strong>100%</strong>
          <span>Fresh Coffee</span>
        </div>

      </div>

      {/* ================= SCROLL ================= */}

      <div className={styles.scrollIndicator}>
        <span>SCROLL DOWN</span>
        <div className={styles.scrollLine}></div>
      </div>

    </section>
  );
}