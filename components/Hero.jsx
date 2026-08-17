"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button, Card } from "@heroui/react";

import styles from "@/styles/hero.module.scss";

const slides = [
  {
    id: 1,
    subtitle: "WELCOME TO COFFEE HOUSE",
    title: "Every Cup Has",
    highlight: "Its Own Story",
    description:
      "Freshly roasted coffee, delicious flavors, and unforgettable moments.",
    image:
      "https://idbinvest.org/sites/default/files/styles/size936x656/public/blog_post/iStock_000043355764Small2.jpg.webp?itok=C2I_4rS3",
    buttonText: "Explore Menu",
    buttonLink: "/menu",
  },
  {
    id: 2,
    subtitle: "FRESHLY ROASTED",
    title: "Start Your Day",
    highlight: "With Great Coffee",
    description:
      "Enjoy carefully selected coffee beans roasted to bring out their richest flavors.",
    image:
      "https://blogstudio.s3.theshoppad.net/coffeeheroau/ec178d83e5f597b162cda1e60cb64194.jpg",
    buttonText: "View Menu",
    buttonLink: "/menu",
  },
  {
    id: 3,
    subtitle: "HANDCRAFTED WITH CARE",
    title: "Coffee Made",
    highlight: "With Love",
    description:
      "Our baristas carefully prepare every cup to create a memorable coffee experience.",
    image:
      "https://www.forkinthekitchen.com/wp-content/uploads/2022/06/220518.homemade.caramel.latte-6630.jpg",
    buttonText: "Our Story",
    buttonLink: "/about",
  },
  {
    id: 4,
    subtitle: "YOUR PERFECT BREAK",
    title: "Relax, Enjoy",
    highlight: "And Stay Awhile",
    description:
      "A warm atmosphere, delicious coffee, and unforgettable moments are waiting for you.",
    image:
      "https://frostingandfettuccine.com/wp-content/uploads/2022/12/Caramel-Iced-Coffee-6.jpg",
    buttonText: "Visit Us",
    buttonLink: "/contact",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // ================= AUTO SLIDER =================

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((current) =>
        current === slides.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const slide = slides[currentSlide];

  // ================= NEXT =================

  const nextSlide = () => {
    setCurrentSlide((current) =>
      current === slides.length - 1 ? 0 : current + 1
    );
  };

  // ================= PREVIOUS =================

  const previousSlide = () => {
    setCurrentSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  };

  return (
    <section className={styles.hero}>

      {/* ================= BACKGROUND ================= */}

      <div className={styles.imageWrapper}>
        <Image
          key={slide.id}
          src={slide.image}
          alt={slide.title}
          fill
          priority
          sizes="100vw"
          className={styles.image}
        />

        <div className={styles.imageOverlay}></div>
      </div>

      {/* ================= SLIDE CONTENT ================= */}

      <Card
        key={slide.id}
        className={styles.slideCard}
      >
        <div className={styles.content}>

          <span className={styles.subtitle}>
            {slide.subtitle}
          </span>

          <h1>
            {slide.title}
            <br />
            <strong>{slide.highlight}</strong>
          </h1>

          <p>
            {slide.description}
          </p>

          {/* ================= ACTIONS ================= */}

          <div className={styles.actions}>

            <Link
              href={slide.buttonLink}
              className={styles.buttonLink}
            >
              <Button
                color="primary"
                size="lg"
                radius="full"
                className={styles.primaryButton}
              >
                {slide.buttonText}

                <span className={styles.buttonArrow}>
                  →
                </span>
              </Button>
            </Link>

            <Link
              href="/about"
              className={styles.buttonLink}
            >
              <Button
                variant="bordered"
                size="lg"
                radius="full"
                className={styles.secondaryButton}
              >
                Our Story

                <span className={styles.buttonArrow}>
                  ↗
                </span>
              </Button>
            </Link>

          </div>
        </div>
      </Card>

      {/* ================= PREVIOUS BUTTON ================= */}

      <Button
        isIconOnly
        aria-label="Previous slide"
        onPress={previousSlide}
        className={`${styles.carouselButton} ${styles.previousButton}`}
      >
        <span>‹</span>
      </Button>

      {/* ================= NEXT BUTTON ================= */}

      <Button
        isIconOnly
        aria-label="Next slide"
        onPress={nextSlide}
        className={`${styles.carouselButton} ${styles.nextButton}`}
      >
        <span>›</span>
      </Button>

      {/* ================= INDICATORS ================= */}

      <div className={styles.indicators}>
        {slides.map((item, index) => (
          <button
            key={item.id}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
            className={`${styles.indicator} ${
              currentSlide === index
                ? styles.activeIndicator
                : ""
            }`}
          />
        ))}
      </div>

      {/* ================= SLIDE NUMBER ================= */}

      <div className={styles.slideNumber}>

        <span>
          {String(currentSlide + 1).padStart(2, "0")}
        </span>

        <div className={styles.numberLine}></div>

        <span>
          {String(slides.length).padStart(2, "0")}
        </span>

      </div>

    </section>
  );
}