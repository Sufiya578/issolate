"use client";

import Image from "next/image";
import Link from "next/link";
import products from "@/public/data/products.json";

export default function ShopPage() {
  return (
    <section className="py-24 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <h1 className="text-4xl font-extrabold mb-8 text-center tracking-tight">
          Shop All
        </h1>
        <p className="text-center text-muted-foreground mb-12">
          Explore our limited streetwear drops made for bold comfort.
        </p>

        {/* Product Grid */}
        <div className="grid  grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="group block overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative w-full aspect-4/5 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="pt-4 text-left">
                <h3 className="text-sm text-gray-500 font-semibold">{product.name}</h3>
                <div className="border-b border-gray-200 my-2 w-full"></div>
                <p className="text-sm text-gray-500">{product.category}</p>
                <p className="text-base text-gray-500 font-bold mt-1">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}