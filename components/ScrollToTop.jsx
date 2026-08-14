"use client";

import { useEffect, useState } from "react";
import { Button } from "@heroui/react";

import styles from "@/styles/scrollToTop.module.scss";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <Button
      isIconOnly
      radius="full"
      aria-label="Scroll to top"
      className={styles.scrollButton}
      onPress={scrollToTop}
    >
      ↑
    </Button>
  );
}