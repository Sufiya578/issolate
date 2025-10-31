"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag } from "lucide-react";
import productsData from "@/public/data/products.json";

export default function FeaturedProducts() {
  const featuredProducts = productsData.filter((product) => product.featured);

  return (
    <section className="py-20 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Featured Drops</h2>
        <p className="text-muted-foreground mb-12">
          Explore our latest limited-edition tees — designed for expression and comfort.
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 block"
            >
              {/* Product Image */}
              <div className="relative w-full aspect-3/4 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Action Buttons */}
                <div
                  className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <button
                    className="btn-icon"
                    onClick={(e) => e.preventDefault()} // prevents triggering the link
                  >
                    <Heart className="w-4 h-4" />
                  </button>
                  <button
                    className="btn-icon"
                    onClick={(e) => e.preventDefault()}
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-primary font-bold mt-1">₹{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
