"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag } from "lucide-react";
import products from "@/public/data/products.json"; // your local JSON data

export default function CatalogPage() {
  return (
    <section className="py-24 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <h1 className="text-4xl font-extrabold mb-8 text-center">Shop All</h1>
        <p className="text-center text-muted-foreground mb-12">
          Discover all our limited drops — designed to stand out, not blend in.
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="relative w-full h-80 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 bg-card/80 rounded-full hover:bg-primary text-foreground hover:text-primary-foreground transition">
                    <Heart className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-card/80 rounded-full hover:bg-primary text-foreground hover:text-primary-foreground transition">
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-primary font-bold mt-1">{product.price}</p>
                <Link
                  href={`/product/${product.id}`}
                  className="btn-primary inline-block mt-4 px-5 py-2 text-sm"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
