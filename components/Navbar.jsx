"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { Button, Tooltip } from "@heroui/react";

import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import styles from "@/styles/navbar.module.scss";

const menuItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Menu",
    href: "/menu",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  // =========================================
  // MOUNT
  // =========================================

  useEffect(() => {
    setMounted(true);
  }, []);

  // =========================================
  // CLOSE MOBILE MENU ON DESKTOP
  // =========================================

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // =========================================
  // CLOSE MENU
  // =========================================

  const closeMenu = () => {
    setIsOpen(false);
  };

  // =========================================
  // TOGGLE THEME
  // =========================================

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className={styles.navbar}>
      {/* =========================================
          NAVBAR CONTAINER
      ========================================= */}

      <div className={styles.container}>
        {/* =========================================
            LOGO
        ========================================= */}

        <Link
          href="/"
          className={styles.logo}
          onClick={closeMenu}
        >
          <span className={styles.logoIcon}>
            ☕
          </span>

          <span className={styles.logoText}>
            Coffee<span>House</span>
          </span>
        </Link>

        {/* =========================================
            DESKTOP MENU
        ========================================= */}

        <nav className={styles.desktopMenu}>
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.navLink}
            >
              {item.label}
            </Link>
          ))}

          {/* Theme Button */}

          {mounted && (
            <Tooltip
              content={
                theme === "dark"
                  ? "Light Mode"
                  : "Dark Mode"
              }
              placement="bottom"
            >
              <Button
                isIconOnly
                variant="light"
                radius="full"
                className={styles.themeButton}
                onPress={toggleTheme}
                aria-label={
                  theme === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
              >
                {theme === "dark" ? "☀️" : "🌙"}
              </Button>
            </Tooltip>
          )}
        </nav>

        {/* =========================================
            MOBILE CONTROLS
        ========================================= */}

        <div className={styles.mobileControls}>
          {/* Theme Button */}

          {mounted && (
            <Tooltip
              content={
                theme === "dark"
                  ? "Light Mode"
                  : "Dark Mode"
              }
              placement="bottom"
            >
              <Button
                isIconOnly
                variant="light"
                radius="full"
                className={styles.themeButton}
                onPress={toggleTheme}
                aria-label={
                  theme === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
              >
                {theme === "dark" ? "☀️" : "🌙"}
              </Button>
            </Tooltip>
          )}

          {/* =========================================
              HAMBURGER BUTTON
          ========================================= */}

          <Button
            isIconOnly
            variant="light"
            radius="full"
            className={styles.menuButton}
            onPress={() => setIsOpen((prev) => !prev)}
            aria-label={
              isOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <XMarkIcon
                className={styles.menuIcon}
              />
            ) : (
              <Bars3Icon
                className={styles.menuIcon}
              />
            )}
          </Button>
        </div>
      </div>

      {/* =========================================
          MOBILE DROPDOWN MENU
          ONLY MOBILE
      ========================================= */}

      <nav
        className={`${styles.mobileMenu} ${
          isOpen
            ? styles.mobileMenuOpen
            : ""
        }`}
        aria-hidden={!isOpen}
      >
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={styles.mobileLink}
            onClick={closeMenu}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}