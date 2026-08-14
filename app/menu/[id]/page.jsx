"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import { Button, Chip } from "@heroui/react";

import styles from "@/styles/productDetails.module.scss";

const menuItems = [
  {
    id: 1,
    name: "Espresso",
    description: "Rich and intense Italian-style espresso.",
    price: "$3.50",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-tVf45oDF4oswpY23aHibY-JazIa-ICH7dQLyjP4M7XKueV1JKK5r9A&s=10",
    category: "Coffee",
    details:
      "A classic Italian-style espresso with a rich aroma, intense flavor and smooth finish. Perfect for starting your day or enjoying a quick coffee break.",
  },

  {
    id: 2,
    name: "Cappuccino",
    description: "Espresso with steamed milk and creamy foam.",
    price: "$4.50",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlVMtu5PP2nr4sdhtzIZsWNKe3Gvi_HWftuzwhhDZgeT3SnhRmru3K8S-x&s=10",
    category: "Coffee",
    details:
      "A beautifully balanced cappuccino made with rich espresso, steamed milk and a generous layer of creamy foam.",
  },

  {
    id: 3,
    name: "Caramel Latte",
    description: "Smooth latte with a sweet caramel flavor.",
    price: "$5.20",
    image:
      "https://images.ctfassets.net/v601h1fyjgba/2L61TpcCFqcNMOtgXklc4s/732a70a58d6dfc25e24378c67900ed16/15697_Keurig_CafeCreations_Salted_Caramel_Latte_Hi.jpg",
    category: "Coffee",
    details:
      "A smooth and creamy latte combined with sweet caramel flavors for a warm and comforting coffee experience.",
  },

  {
    id: 4,
    name: "Americano",
    description: "Espresso combined with hot water.",
    price: "$3.80",
    image:
      "https://dropinblog.net/34243353/files/featured/image1-ouxf5.png",
    category: "Coffee",
    details:
      "A simple and elegant coffee made by combining rich espresso with hot water, creating a smooth and refreshing drink.",
  },

  {
    id: 5,
    name: "Mocha",
    description: "Espresso, chocolate and steamed milk.",
    price: "$5.50",
    image:
      "https://athome.starbucks.com/sites/default/files/styles/recipe_banner_xlarge/public/2024-05/CaffeMocha_RecipeHeader_848x539_%402x.jpg.webp?h=45cde313&itok=ov3gQo8W",
    category: "Coffee",
    details:
      "A delicious combination of espresso, rich chocolate and steamed milk. A perfect choice for chocolate and coffee lovers.",
  },

  {
    id: 6,
    name: "Iced Coffee",
    description: "Refreshing cold coffee served over ice.",
    price: "$4.00",
    image:
      "https://www.allrecipes.com/thmb/Hqro0FNdnDEwDjrEoxhMfKdWfOY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21667-easy-iced-coffee-ddmfs-4x3-0093-7becf3932bd64ed7b594d46c02d0889f.jpg",
    category: "Cold Drinks",
    details:
      "Refreshing chilled coffee served over ice. A great choice for warm days and anyone who enjoys a smooth cold coffee.",
  },

  {
    id: 7,
    name: "Iced Latte",
    description: "Cold espresso with milk served over ice.",
    price: "$4.80",
    image:
      "https://www.peanutbutterandfitness.com/wp-content/uploads/2023/08/Smores-Iced-Latte-Recipe-7.jpg",
    category: "Cold Drinks",
    details:
      "Cold espresso blended with creamy milk and served over ice for a smooth, refreshing and delicious drink.",
  },

  {
    id: 8,
    name: "Chocolate Cake",
    description: "Soft chocolate cake with rich chocolate cream.",
    price: "$5.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqjqdoheOI53J3Y2GJQasdY2yvan-o60Ke0FZzhIDBYwH3bC-a3B-IC5OD&s=10",
    category: "Desserts",
    details:
      "A soft and rich chocolate cake layered with delicious chocolate cream. The perfect companion for your favorite coffee.",
  },

  {
    id: 9,
    name: "Cheesecake",
    description: "Creamy cheesecake with a buttery biscuit base.",
    price: "$5.50",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8v6NQiFxidRbHclYdtq2eMLHHHl7ZO3qsbWRR9o7pgLIkwhkkTbD0W4k_&s=10",
    category: "Desserts",
    details:
      "Creamy cheesecake with a buttery biscuit base. A smooth and delicious dessert that pairs perfectly with coffee.",
  },
];

export default function ProductDetailsPage() {
  const params = useParams();

  const productId = Number(params.id);

  const product = menuItems.find(
    (item) => item.id === productId
  );

  /* ======================================================
     PRODUCT NOT FOUND
  ====================================================== */

  if (!product) {
    return (
      <main className={styles.notFound}>
        <div className={styles.notFoundIcon}>
          ☕
        </div>

        <h1>Product Not Found</h1>

        <p>
          Sorry, we couldn't find the product
          you're looking for.
        </p>

        <Link href="/menu">
          <Button
            color="primary"
            radius="full"
            size="lg"
            className={styles.exploreButton}
          >
            Back To Menu
          </Button>
        </Link>
      </main>
    );
  }

  return (
    <main className={styles.detailsPage}>

      {/* ==================================================
          PRODUCT AREA
      ================================================== */}

      <div className={styles.container}>

        {/* BACK TO MENU */}

        <Link
          href="/menu"
          className={styles.backLink}
        >
          ← Back To Menu
        </Link>


        {/* ==================================================
            PRODUCT DETAILS
        ================================================== */}

        <section className={styles.productDetails}>

          {/* ================= IMAGE ================= */}

          <div className={styles.imageSection}>

            <div className={styles.imageWrapper}>

              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 768px) 90vw, 500px"
                className={styles.productImage}
              />

            </div>

          </div>


          {/* ================= CONTENT ================= */}

          <div className={styles.contentSection}>

            {/* CATEGORY */}

            <Chip
              color="primary"
              variant="flat"
              radius="full"
              className={styles.category}
            >
              {product.category}
            </Chip>


            {/* TITLE */}

            <h1>
              {product.name}
            </h1>


            {/* PRICE */}

            <div className={styles.price}>
              {product.price}
            </div>


            {/* DESCRIPTION */}

            <p className={styles.description}>
              {product.description}
            </p>


            {/* DIVIDER */}

            <div className={styles.divider} />


            {/* ABOUT */}

            <div className={styles.aboutProduct}>

              <span>
                ABOUT THIS PRODUCT
              </span>

              <p>
                {product.details}
              </p>

            </div>


            {/* ==================================================
                ACTION BUTTONS
            ================================================== */}

            <div className={styles.actions}>

              <Button
                color="primary"
                size="lg"
                radius="full"
                className={styles.orderButton}
              >
                Order Now
              </Button>


              <Link href="/contact">

                <Button
                  variant="bordered"
                  size="lg"
                  radius="full"
                  className={styles.contactButton}
                >
                  Contact Us
                </Button>

              </Link>

            </div>

          </div>

        </section>

      </div>


      {/* ======================================================
          BOTTOM CTA
      ====================================================== */}

      <section className={styles.bottomCta}>

        <div className={styles.bottomCtaContent}>

          <span>
            COFFEE HOUSE
          </span>

          <h2>
            Enjoy Every
            <strong> Sip.</strong>
          </h2>

          <p>
            Take a moment, enjoy your favorite drink
            and make it a memorable one.
          </p>

          <Link
            href="/menu"
            className={styles.exploreLink}
          >
            <Button
              color="primary"
              radius="full"
              size="lg"
              className={styles.exploreButton}
            >
              Explore More Drinks
            </Button>
          </Link>

        </div>

      </section>

    </main>
  );
}