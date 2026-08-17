"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Button, Tooltip } from "@heroui/react";

import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import styles from "@/styles/navbar.module.scss";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* ======================================================
     LOAD SAVED THEME
  ====================================================== */

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    const isDark = savedTheme === "dark";

    setDarkMode(isDark);

    document.documentElement.classList.toggle(
      "dark",
      isDark
    );
  }, []);


  /* ======================================================
     TOGGLE DARK / LIGHT
  ====================================================== */

  const toggleTheme = () => {
    const newDarkMode = !darkMode;

    setDarkMode(newDarkMode);

    document.documentElement.classList.toggle(
      "dark",
      newDarkMode
    );

    localStorage.setItem(
      "theme",
      newDarkMode ? "dark" : "light"
    );
  };


  /* ======================================================
     MOBILE MENU
  ====================================================== */

  const closeMenu = () => {
    setMenuOpen(false);
  };


  const toggleMenu = () => {
    setMenuOpen((previous) => !previous);
  };


  return (
    <header className={styles.navbar}>

      {/* ==================================================
          NAVBAR CONTAINER
      ================================================== */}

      <div className={styles.container}>

        {/* ==================================================
            LOGO
        ================================================== */}

        <Link
          href="/"
          className={styles.logo}
          onClick={closeMenu}
        >

          <span className={styles.logoIcon}>
            ☕
          </span>

          <span className={styles.logoText}>
            Coffee
            <span>House</span>
          </span>

        </Link>


        {/* ==================================================
            DESKTOP MENU
        ================================================== */}

        <nav className={styles.desktopMenu}>

          <Link
            href="/"
            className={styles.navLink}
          >
            Home
          </Link>

          <Link
            href="/menu"
            className={styles.navLink}
          >
            Menu
          </Link>

          <Link
            href="/about"
            className={styles.navLink}
          >
            About
          </Link>

          <Link
            href="/contact"
            className={styles.navLink}
          >
            Contact
          </Link>


          {/* ==================================================
              THEME BUTTON
          ================================================== */}

          <Tooltip
            content={
              darkMode
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
          >

            <Button
              isIconOnly
              type="button"
              className={styles.themeButton}
              onPress={toggleTheme}
              aria-label={
                darkMode
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {darkMode ? "☀️" : "🌙"}
            </Button>

          </Tooltip>

        </nav>


        {/* ==================================================
            MOBILE CONTROLS
        ================================================== */}

        <div className={styles.mobileControls}>

          {/* THEME */}

          <Tooltip
            content={
              darkMode
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
          >

            <Button
              isIconOnly
              type="button"
              className={styles.themeButton}
              onPress={toggleTheme}
              aria-label={
                darkMode
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {darkMode ? "☀️" : "🌙"}
            </Button>

          </Tooltip>


          {/* HAMBURGER */}

          <Button
            isIconOnly
            type="button"
            className={styles.menuButton}
            onPress={toggleMenu}
            aria-label={
              menuOpen
                ? "Close menu"
                : "Open menu"
            }
          >

            {menuOpen ? (
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


      {/* ======================================================
          MOBILE MENU
      ====================================================== */}

      <nav
        className={`${styles.mobileMenu} ${
          menuOpen
            ? styles.mobileMenuOpen
            : ""
        }`}
      >

        <Link
          href="/"
          className={styles.mobileLink}
          onClick={closeMenu}
        >
          Home
        </Link>

        <Link
          href="/menu"
          className={styles.mobileLink}
          onClick={closeMenu}
        >
          Menu
        </Link>

        <Link
          href="/about"
          className={styles.mobileLink}
          onClick={closeMenu}
        >
          About
        </Link>

        <Link
          href="/contact"
          className={styles.mobileLink}
          onClick={closeMenu}
        >
          Contact
        </Link>

      </nav>

    </header>
  );
}
