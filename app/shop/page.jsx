// app/shop/page.jsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ShopPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://dummyjson.com/products?com=100");
        const data = await res.json();
        const list = data.products || [];
        setProducts(list);
      } catch (err) {
        console.error("Failed to load products", err);
        setProducts([]);
      }
    }
    fetchProducts();
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-6 pt-36 pb-20 md:pb-24">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4">Shop All</h1>
      <p className="text-muted-foreground text-center mb-10">
        Explore ISSO·LATE’s full range — versatile essentials and bold pieces made for comfort and style.
      </p>

      {/* Product Count */}
      <p className="text-sm text-muted-foreground text-center mb-8">
        {products.length} products found
      </p>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products.map((product) => (
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
            <p className="text-gray-600 text-lg mt-1 font-semibold text-left">
              ₹{product.price}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}