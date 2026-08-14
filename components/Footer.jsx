import Link from "next/link";

import styles from "@/styles/footer.module.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          {/* Brand */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoIcon}>☕</span>

              <span className={styles.logoText}>
                Coffee<span>House</span>
              </span>
            </Link>

            <p>
              Fresh coffee, delicious flavors and good moments.
              Welcome to your favorite coffee house.
            </p>

            <div className={styles.socials}>
              <a href="#" aria-label="Instagram">
                ◎
              </a>

              <a href="#" aria-label="Facebook">
                f
              </a>

              <a href="#" aria-label="Twitter">
                𝕏
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.column}>
            <h3>Quick Links</h3>

            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/menu">Menu</Link>
              </li>

              <li>
                <Link href="/about">About Us</Link>
              </li>

              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className={styles.column}>
            <h3>Opening Hours</h3>

            <ul className={styles.hours}>
              <li>
                <span>Monday - Friday</span>
                <strong>08:00 - 22:00</strong>
              </li>

              <li>
                <span>Saturday</span>
                <strong>09:00 - 23:00</strong>
              </li>

              <li>
                <span>Sunday</span>
                <strong>09:00 - 21:00</strong>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.column}>
            <h3>Contact Us</h3>

            <ul className={styles.contact}>
              <li>
                <span>📍</span>
                <p>123 Coffee Street, Downtown</p>
              </li>

              <li>
                <span>📞</span>
                <a href="tel:+1234567890">
                  +1 234 567 890
                </a>
              </li>

              <li>
                <span>✉️</span>
                <a href="mailto:hello@coffeehouse.com">
                  hello@coffeehouse.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider}></div>

        {/* Bottom Footer */}
        <div className={styles.footerBottom}>
          <p>
            © {currentYear} Coffee House. All rights reserved.
          </p>

          <div className={styles.bottomLinks}>
            <Link href="/privacy">
              Privacy Policy
            </Link>

            <Link href="/terms">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}