import Image from "next/image";
import styles from "@/styles/about.module.scss";

export default function AboutPage() {
  return (
    <main className={styles.aboutPage}>
      {/* =========================
          ABOUT HERO
      ========================= */}

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.subtitle}>ABOUT OUR COFFEE SHOP</span>

            <h1>
              More Than Just <span>Coffee</span>
            </h1>

            <p>
              A cozy place where great coffee, delicious flavors, and good
              moments come together.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          ABOUT INTRO
      ========================= */}

      <section className={styles.intro}>
        <div className={styles.container}>
          <div className={styles.introGrid}>
            <div className={styles.imageWrapper}>
              <Image
                src="https://media.architecturaldigest.com/photos/5b083d5b75a4f940de3da8f3/master/w_1024%2Cc_limit/RARTOFCOFFEE-iksdesign-03.jpg"
                alt="Coffee shop interior"
                width={1200}
                height={900}
                className={styles.aboutImage}
              />
            </div>

            <div className={styles.introContent}>
              <span className={styles.sectionLabel}>OUR STORY</span>

              <h2>
                A Passion For <span>Great Coffee</span>
              </h2>

              <p>
                Our coffee shop started with a simple idea: create a warm and
                welcoming place where people can enjoy exceptional coffee and
                spend quality time together.
              </p>

              <p>
                We carefully select our coffee beans and work with passionate
                baristas who believe that every cup deserves attention to
                detail.
              </p>

              <p>
                From the first aroma of freshly ground beans to the last sip of
                your coffee, we want every visit to be a memorable experience.
              </p>

              <div className={styles.stats}>
                <div className={styles.stat}>
                  <strong>10+</strong>
                  <span>Years Experience</span>
                </div>

                <div className={styles.stat}>
                  <strong>25+</strong>
                  <span>Coffee Varieties</span>
                </div>

                <div className={styles.stat}>
                  <strong>10K+</strong>
                  <span>Happy Customers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          FEATURES
      ========================= */}

      <section className={styles.features}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.subtitle}>WHY CHOOSE US</span>

            <h2>
              Made With <span>Love</span>
            </h2>

            <p>
              Everything we do is about creating a better coffee experience.
            </p>
          </div>

          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.icon}>☕</div>

              <h3>Premium Coffee</h3>

              <p>
                Carefully selected beans roasted to bring out their best
                flavor.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.icon}>🌿</div>

              <h3>Fresh Ingredients</h3>

              <p>
                We use fresh and high-quality ingredients in every drink and
                dessert.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.icon}>❤️</div>

              <h3>Made With Love</h3>

              <p>
                Our baristas put passion and care into every cup we serve.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}