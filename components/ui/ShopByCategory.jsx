"use client";

import Image from "next/image";
import Link from "next/link";
import categories from "@/data/categories.json";

export default function ShopByCategory() {
  return (
    <section className="py-20 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Shop by Category
        </h2>
        <p className="text-muted-foreground mb-12">
          Discover styles that match your vibe — explore by collection.
        </p>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.slug}`}
              className="group relative rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-64">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/60 transition-all" />

              {/* Text */}
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <h3 className="text-xl font-semibold text-primary-foreground tracking-wide">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
