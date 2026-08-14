"use client";

import { useMemo, useState } from "react";

import ProductCard from "@/components/ProductCard";

import styles from "@/styles/menu.module.scss";

const menuItems = [
  {
    id: 1,
    name: "Espresso",
    description: "Rich and intense Italian-style espresso.",
    price: "$3.50",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-tVf45oDF4oswpY23aHibY-JazIa-ICH7dQLyjP4M7XKueV1JKK5r9A&s=10",
    category: "Coffee",
  },
  {
    id: 2,
    name: "Cappuccino",
    description: "Espresso with steamed milk and creamy foam.",
    price: "$4.50",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlVMtu5PP2nr4sdhtzIZsWNKe3Gvi_HWftuzwhhDZgeT3SnhRmru3K8S-x&s=10",
    category: "Coffee",
  },
  {
    id: 3,
    name: "Caramel Latte",
    description: "Smooth latte with a sweet caramel flavor.",
    price: "$5.20",
    image:
      "https://images.ctfassets.net/v601h1fyjgba/2L61TpcCFqcNMOtgXklc4s/732a70a58d6dfc25e24378c67900ed16/15697_Keurig_CafeCreations_Salted_Caramel_Latte_Hi.jpg",
    category: "Coffee",
  },
  {
    id: 4,
    name: "Americano",
    description: "Espresso combined with hot water.",
    price: "$3.80",
    image:
      "https://dropinblog.net/34243353/files/featured/image1-ouxf5.png",
    category: "Coffee",
  },
  {
    id: 5,
    name: "Mocha",
    description: "Espresso, chocolate and steamed milk.",
    price: "$5.50",
    image:
      "https://athome.starbucks.com/sites/default/files/styles/recipe_banner_xlarge/public/2024-05/CaffeMocha_RecipeHeader_848x539_%402x.jpg.webp?h=45cde313&itok=ov3gQo8W",
    category: "Coffee",
  },
  {
    id: 6,
    name: "Iced Coffee",
    description: "Refreshing cold coffee served over ice.",
    price: "$4.00",
    image:
      "https://www.allrecipes.com/thmb/Hqro0FNdnDEwDjrEoxhMfKdWfOY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21667-easy-iced-coffee-ddmfs-4x3-0093-7becf3932bd64ed7b594d46c02d0889f.jpg",
    category: "Cold Drinks",
  },
  {
    id: 7,
    name: "Iced Latte",
    description: "Cold espresso with milk served over ice.",
    price: "$4.80",
    image:
      "https://www.peanutbutterandfitness.com/wp-content/uploads/2023/08/Smores-Iced-Latte-Recipe-7.jpg",
    category: "Cold Drinks",
  },
  {
    id: 8,
    name: "Chocolate Cake",
    description: "Soft chocolate cake with rich chocolate cream.",
    price: "$5.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqjqdoheOI53J3Y2GJQasdY2yvan-o60Ke0FZzhIDBYwH3bC-a3B-IC5OD&s=10",
    category: "Desserts",
  },
  {
    id: 9,
    name: "Cheesecake",
    description: "Creamy cheesecake with a buttery biscuit base.",
    price: "$5.50",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8v6NQiFxidRbHclYdtq2eMLHHHl7ZO3qsbWRR9o7pgLIkwhkkTbD0W4k_&s=10",
    category: "Desserts",
  },
];

const categories = [
  "All",
  "Coffee",
  "Cold Drinks",
  "Desserts",
];

export default function MenuPage() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredItems = useMemo(() => {
    const searchValue = search.trim().toLowerCase();

    return menuItems.filter((item) => {
      const matchesCategory =
        category === "All" || item.category === category;

      const matchesSearch =
        searchValue === "" ||
        item.name.toLowerCase().includes(searchValue) ||
        item.description.toLowerCase().includes(searchValue) ||
        item.category.toLowerCase().includes(searchValue);

      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  return (
    <main className={styles.menuPage}>

      {/* ==================================================
          HERO
      ================================================== */}

      <section className={styles.hero}>
        <div className={styles.container}>

          <span className={styles.subtitle}>
            OUR MENU
          </span>

          <h1>
            Discover Our{" "}
            <span>Delicious Menu</span>
          </h1>

          <p>
            From freshly brewed coffee to delicious desserts,
            there is something for everyone.
          </p>

        </div>
      </section>


      {/* ==================================================
          PRODUCTS
      ================================================== */}

      <section className={styles.productsSection}>
        <div className={styles.container}>

          {/* ==================================================
              FILTER BAR
          ================================================== */}

          <div className={styles.filterBar}>

            {/* SEARCH */}

            <div className={styles.searchWrapper}>

              <span className={styles.searchIcon}>
                🔍
              </span>

              <input
                type="text"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search drinks..."
                className={styles.searchInput}
                aria-label="Search menu"
              />

              {search && (
                <button
                  type="button"
                  className={styles.clearSearch}
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}

            </div>


            {/* CATEGORY */}

            <div className={styles.categoryFilter}>

              <span className={styles.categoryLabel}>
                Category
              </span>

              <div className={styles.categoryOptions}>

                {categories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className={`${styles.categoryButton} ${
                      category === item
                        ? styles.categoryButtonActive
                        : ""
                    }`}
                    onClick={() => setCategory(item)}
                  >
                    {item}
                  </button>
                ))}

              </div>

            </div>

          </div>


          {/* ==================================================
              RESULTS INFO
          ================================================== */}

          <div className={styles.resultsInfo}>

            <p>
              Showing{" "}
              <strong>
                {filteredItems.length}
              </strong>{" "}
              {filteredItems.length === 1
                ? "item"
                : "items"}
            </p>

            {category !== "All" && (
              <span>
                {category}
              </span>
            )}

          </div>


          {/* ==================================================
              PRODUCT GRID
          ================================================== */}

          {filteredItems.length > 0 ? (

            <div className={styles.grid}>

              {filteredItems.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}

            </div>

          ) : (

            /* ==================================================
                EMPTY STATE
            ================================================== */

            <div className={styles.emptyState}>

              <div className={styles.emptyIcon}>
                ☕
              </div>

              <h3>
                No drinks found
              </h3>

              <p>
                No menu item matches your search.
                Try another keyword or category.
              </p>

              <button
                type="button"
                className={styles.resetButton}
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
              >
                Show All Drinks
              </button>

            </div>

          )}

        </div>
      </section>

    </main>
  );
}