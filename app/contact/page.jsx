"use client";

import Image from "next/image";
import axios from "axios";
import { useState } from "react";

import styles from "@/styles/contact.module.scss";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // =========================
  // HANDLE INPUT
  // =========================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================
  // HANDLE SUBMIT
  // =========================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await axios.post("/api/contact", formData);

      console.log("Response:", response.data);

      setSuccess("Your message has been sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      setError(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.contactPage}>

      {/* =========================
          HERO
      ========================= */}

      <section className={styles.contactHero}>
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>GET IN TOUCH</span>

          <h1>
            Let's
            <strong> Talk Coffee</strong>
          </h1>

          <p>
            Have a question, want to book a table, or simply want to say
            hello? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* =========================
          CONTACT SECTION
      ========================= */}

      <section className={styles.contactSection}>
        <div className={styles.container}>

          {/* Contact Information */}

          <div className={styles.contactInfo}>
            <span className={styles.sectionLabel}>CONTACT US</span>

            <h2>
              We'd Love To
              <strong> Hear From You</strong>
            </h2>

            <p className={styles.introText}>
              Whether you have a question about our menu or just want to visit
              us, feel free to get in touch.
            </p>

            <div className={styles.contactDetails}>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📍</div>

                <div>
                  <h3>Our Location</h3>
                  <p>123 Coffee Street, Downtown</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📞</div>

                <div>
                  <h3>Phone</h3>
                  <p>+1 234 567 890</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>✉️</div>

                <div>
                  <h3>Email</h3>
                  <p>hello@coffeehouse.com</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>🕐</div>

                <div>
                  <h3>Opening Hours</h3>
                  <p>Mon - Sun: 08:00 AM - 10:00 PM</p>
                </div>
              </div>

            </div>
          </div>

          {/* =========================
              CONTACT FORM
          ========================= */}

          <div className={styles.formWrapper}>
            <form
              className={styles.contactForm}
              onSubmit={handleSubmit}
            >

              <div className={styles.formHeader}>
                <span>MESSAGE US</span>

                <h3>Send Us A Message</h3>

                <p>
                  We'd be happy to hear from you. Fill out the form and we'll
                  get back to you soon.
                </p>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="name">
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">
                  Your Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Enter subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* SUCCESS */}

              {success && (
                <div className={styles.successMessage}>
                  {success}
                </div>
              )}

              {/* ERROR */}

              {error && (
                <div className={styles.errorMessage}>
                  {error}
                </div>
              )}

              <button
                type="submit"
                className={styles.submitButton}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}

                {!loading && <span>→</span>}
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* =========================
          LOCATION
      ========================= */}

      <section className={styles.locationSection}>

        <div className={styles.locationImage}>
          <Image
            src="/assets/location.png"
            alt="Coffee shop location"
            width={1200}
            height={500}
            priority
          />
        </div>

        <div className={styles.locationContent}>
          <span className={styles.sectionLabel}>
            VISIT US
          </span>

          <h2>
            Your Table
            <strong> Is Waiting</strong>
          </h2>

          <p>
            Stop by our coffee shop, grab your favorite drink and enjoy a
            relaxing atmosphere with your favorite coffee.
          </p>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.directionButton}
          >
            Get Directions
            <span>→</span>
          </a>
        </div>

      </section>

    </main>
  );
}