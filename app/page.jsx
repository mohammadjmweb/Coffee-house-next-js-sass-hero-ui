import Link from "next/link";

import { Button, Card, Chip } from "@heroui/react";

import Hero from "@/components/Hero";

import styles from "./page.module.scss";

const popularDrinks = [
  {
    id: 1,
    name: "Espresso",
    description: "Rich and intense Italian-style espresso.",
    price: "$3.50",
    image:
      "https://blogstudio.s3.theshoppad.net/coffeeheroau/ec178d83e5f597b162cda1e60cb64194.jpg",
    category: "Coffee",
  },
  {
    id: 2,
    name: "Cappuccino",
    description: "Espresso with steamed milk and creamy foam.",
    price: "$4.50",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Cappuccino_at_Sightglass_Coffee.jpg/1280px-Cappuccino_at_Sightglass_Coffee.jpg",
    category: "Coffee",
  },
  {
    id: 3,
    name: "Caramel Latte",
    description: "Smooth latte with a sweet caramel flavor.",
    price: "$5.20",
    image:
      "https://www.forkinthekitchen.com/wp-content/uploads/2022/06/220518.homemade.caramel.latte-6630.jpg",
    category: "Coffee",
  },
  {
    id: 6,
    name: "Iced Coffee",
    description: "Refreshing cold coffee served over ice.",
    price: "$4.00",
    image:
      "https://frostingandfettuccine.com/wp-content/uploads/2022/12/Caramel-Iced-Coffee-6.jpg",
    category: "Cold Drinks",
  },
];

export default function Home() {
  return (
    <main>

      {/* ================= HERO ================= */}

      <Hero />

      {/* ================= POPULAR DRINKS ================= */}

      <section className={styles.menuSection}>
        <div className={styles.container}>

          <div className={styles.sectionHeader}>
            <span>OUR MENU</span>

            <h2>
              Popular <strong>Drinks</strong>
            </h2>

            <p>
              Discover some of our most popular drinks,
              carefully prepared by our baristas.
            </p>
          </div>

          <div className={styles.productsGrid}>
            {popularDrinks.map((drink) => (
              <Card
                key={drink.id}
                className={styles.productCard}
              >

                {/* Product Image */}

                <div className={styles.imageWrapper}>
                  <img
                    src={drink.image}
                    alt={drink.name}
                    className={styles.productImage}
                  />
                </div>

                {/* Product Information */}

                <div className={styles.productInfo}>

                  <div className={styles.titleRow}>
                    <h3>{drink.name}</h3>

                    <span className={styles.price}>
                      {drink.price}
                    </span>
                  </div>

                  <p>{drink.description}</p>

                  <Chip
                    size="sm"
                    variant="flat"
                    className={styles.category}
                  >
                    {drink.category}
                  </Chip>

                  <Link
                    href={`/menu/${drink.id}`}
                    className={styles.buttonLink}
                  >
                    <Button
                      color="primary"
                      radius="full"
                      className={styles.orderButton}
                    >
                      View Details
                    </Button>
                  </Link>

                </div>
              </Card>
            ))}
          </div>

          {/* View Full Menu */}

          <div className={styles.viewMenu}>
            <Link href="/menu">
              <Button
                variant="bordered"
                radius="full"
                size="lg"
                className={styles.viewMenuButton}
              >
                View Full Menu
              </Button>
            </Link>
          </div>

        </div>
      </section>

      {/* ================= FEATURES ================= */}

      <section className={styles.features}>
        <div className={styles.container}>

          <div className={styles.featuresGrid}>

            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                ☕
              </div>

              <h3>Premium Coffee</h3>

              <p>
                We carefully select and roast high-quality
                coffee beans for the perfect taste.
              </p>
            </div>

            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                🌿
              </div>

              <h3>Fresh Ingredients</h3>

              <p>
                Every drink is prepared with fresh and
                carefully selected ingredients.
              </p>
            </div>

            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                ❤️
              </div>

              <h3>Made With Love</h3>

              <p>
                Our baristas put passion and care into
                every single cup.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className={styles.cta}>
        <div className={styles.ctaContent}>

          <span>YOUR PERFECT COFFEE AWAITS</span>

          <h2>
            Take a Break.
            <br />
            Enjoy Your Coffee.
          </h2>

          <p>
            Come visit us and experience the taste,
            atmosphere, and warmth of Coffee House.
          </p>

          <Link href="/contact">
            <Button
              color="primary"
              size="lg"
              radius="full"
              className={styles.ctaButton}
            >
              Visit Us
            </Button>
          </Link>

        </div>
      </section>

    </main>
  );
}