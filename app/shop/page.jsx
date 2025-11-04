// app/shop/page.jsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ShopPage() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [availability, setAvailability] = useState("all"); // all | in | out
  const [fromPrice, setFromPrice] = useState("");
  const [toPrice, setToPrice] = useState("");
  const [sort, setSort] = useState(""); // "" | az | priceLow | priceHigh

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://dummyjson.com/products?com=100");
        const data = await res.json();
        const list = data.products || [];
        setProducts(list);
        setFiltered(list);
      } catch (err) {
        console.error("Failed to load products", err);
        setProducts([]);
        setFiltered([]);
      }
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    let temp = [...products];

    // Availability filter
    if (availability !== "all") {
      temp = temp.filter((p) => (availability === "in" ? p.stock > 0 : p.stock === 0));
    }

    // Price range filter (From / To)
    if (fromPrice !== "") temp = temp.filter((p) => p.price >= Number(fromPrice));
    if (toPrice !== "") temp = temp.filter((p) => p.price <= Number(toPrice));

    // Sorting
    if (sort === "az") {
      temp.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort === "priceLow") {
      temp.sort((a, b) => a.price - b.price);
    } else if (sort === "priceHigh") {
      temp.sort((a, b) => b.price - a.price);
    }

    setFiltered(temp);
  }, [availability, fromPrice, toPrice, sort, products]);

  return (
    <main className="max-w-7xl mx-auto px-6 pt-36 pb-20 md:pb-24">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4">Shop All</h1>
      <p className="text-muted-foreground text-center mb-10">
        Explore ISSO·LATE’s full range — versatile essentials and bold pieces made for comfort and style.
      </p>

      {/* Filters & Sort */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 border-b border-border pb-4">
        {/* Left: Availability + Price */}
        <div className="flex flex-wrap items-center gap-4">
          {/* Availability */}
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Availability:</label>
            <select
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              className="border border-border rounded-md px-3 py-2 bg-background outline-none text-sm"
            >
              <option value="all">All</option>
              <option value="in">In Stock</option>
              <option value="out">Out of Stock</option>
            </select>
          </div>

       {/* Price From / To */}
<div className="flex items-center gap-2">
  <label className="text-sm font-medium">Price: ₹</label>
  <input
    type="number"
    placeholder="From"
    value={fromPrice}
    onChange={(e) => setFromPrice(e.target.value)}
    className="w-24 border border-border rounded-md px-2 py-1 bg-background text-sm outline-none"
  />
  <span className="text-sm">–</span>
  <input
    type="number"
    placeholder="To"
    value={toPrice}
    onChange={(e) => setToPrice(e.target.value)}
    className="w-24 border border-border rounded-md px-2 py-1 bg-background text-sm outline-none"
  />
  <button
    type="button"
    onClick={() => {
      setFromPrice("");
      setToPrice("");
      setFiltered(products); //  Immediately reset to full list
    }}
    className="text-sm text-muted-foreground underline ml-2 hover:text-foreground transition cursor-pointer"
  >
    Reset
  </button>
</div>

        </div>

        {/* Right: Sort & Count */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Sort by:</label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-border rounded-md px-3 py-2 bg-background outline-none text-sm"
            >
              <option value="">Default</option>
              <option value="az">Alphabetically (A–Z)</option>
              <option value="priceLow">Price: Low → High</option>
              <option value="priceHigh">Price: High → Low</option>
            </select>
          </div>

          <p className="text-sm text-muted-foreground">{filtered.length} products found</p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {filtered.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="group block"
          >
            <div className="relative w-full aspect-square overflow-hidden rounded-lg bg-muted flex items-center justify-center">
              <Image
                src={product.images?.[0] || "/assets/images/placeholder.png"}
                alt={product.title}
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <h3 className="pt-3 mt-2 text-sm text-left text-foreground whitespace-nowrap truncate">
              {product.title}
            </h3>
            <p className="text-gray-600 text-lg mt-1 font-semibold text-left">₹{product.price}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
