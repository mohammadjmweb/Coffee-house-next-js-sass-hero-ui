import Link from "next/link";

import {
  Button,
} from "@heroui/react";

import ProductCard from "@/components/ProductCard";

import styles from "@/styles/cards.module.scss";

const popularDrinks = [
  {
    id: 1,
    name: "Espresso",
    description: "Rich and intense Italian-style espresso.",
    price: "$3.50",
    image: "/images/espresso.jpg",
    category: "Coffee",
  },
  {
    id: 2,
    name: "Cappuccino",
    description: "Espresso with steamed milk and creamy foam.",
    price: "$4.50",
    image: "/images/cappuccino.jpg",
    category: "Coffee",
  },
  {
    id: 3,
    name: "Caramel Latte",
    description: "Smooth latte with a sweet caramel flavor.",
    price: "$5.20",
    image: "/images/latte.jpg",
    category: "Coffee",
  },
  {
    id: 4,
    name: "Iced Coffee",
    description: "Refreshing cold coffee served over ice.",
    price: "$4.00",
    image: "/images/iced-coffee.jpg",
    category: "Cold Drinks",
  },
];

export default function MenuSection() {
  return (
    <section className={styles.menuSection}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span>OUR MENU</span>

          <h2>
            Popular
            <strong> Drinks</strong>
          </h2>

          <p>
            Discover some of our most popular drinks,
            carefully prepared by our baristas.
          </p>
        </div>

        {/* Products */}
        <div className={styles.productsGrid}>
          {popularDrinks.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        {/* View Menu */}
        <div className={styles.viewMenu}>
          <Button
            as={Link}
            href="/menu"
            color="primary"
            variant="bordered"
            radius="full"
            size="lg"
          >
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
}