import Image from "next/image";
import Link from "next/link";

import { Card, Button } from "@heroui/react";

import styles from "@/styles/cards.module.scss";

export default function ProductCard({ product }) {
  return (
    <Card className={styles.card}>
      {/* Product Image */}
      <div className={styles.imageWrapper}>
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={350}
          className={styles.image}
        />
      </div>

      {/* Product Content */}
      <div className={styles.content}>
        {/* Name + Price */}
        <div className={styles.header}>
          <h3>{product.name}</h3>

          <span className={styles.price}>
            {product.price}
          </span>
        </div>

        {/* Description */}
        <p className={styles.description}>
          {product.description}
        </p>

        {/* Category */}
        <span className={styles.category}>
          {product.category}
        </span>

        {/* Details Button */}
        <Link
          href={`/menu/${product.id}`}
          className={styles.link}
        >
          <Button
            className={styles.button}
          >
            View Details
          </Button>
        </Link>
      </div>
    </Card>
  );
}