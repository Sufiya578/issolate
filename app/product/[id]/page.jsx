"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { addToCart } from "@/lib/cart";   

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
      setMainImage(data.images[0]);

      // Fetch similar products by category
      const catRes = await fetch(`https://dummyjson.com/products/category/${data.category}`);
      const catData = await catRes.json();
      setSimilar(catData.products.filter((p) => p.id !== data.id).slice(0, 4));
    }
    fetchProduct();
  }, [id]);

  if (!product) {
    return <p className="text-center py-40 text-lg text-muted-foreground">Loading...</p>;
  }

const router = useRouter();

const handleBuyNow = () => {
  const buyNowItem = {
    id: product.id,
    title: product.title,
    price: product.price,
    image: product.image || product.thumbnail || (product.images && product.images[0]) || "",
    quantity: quantity,
  };

  // Save this single product temporarily to localStorage
  localStorage.setItem("buyNowItem", JSON.stringify(buyNowItem));

  // Navigate to checkout
  router.push("/checkout");
};
  return (
    <main className="max-w-7xl mx-auto px-6 pt-36 pb-20">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* LEFT SIDE - Images */}
        <div>
          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted">
            <Image
              src={mainImage}
              alt={product.title}
              fill
              className="object-contain transition-all duration-300"
            />
          </div>

          {/* Thumbnail Images */}
          <div className="flex justify-center gap-3 mt-4">
            {product.images.slice(0, 3).map((img, i) => (
              <button
                key={i}
                onClick={() => setMainImage(img)}
                className={`relative w-20 h-20 border rounded-md overflow-hidden ${
                  mainImage === img ? "border-black" : "border-border"
                }`}
              >
                <Image
                  src={img}
                  alt={`Variant ${i}`}
                  fill
                  className="object-contain"
                />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - Info */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-extrabold">{product.title}</h1>
          <p className="text-gray-500">{product.description}</p>

          <p className="text-2xl font-semibold text-foreground mt-4">₹{product.price}</p>

          {/* Quantity & Buttons */}
          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center border border-border rounded-md">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-2 text-lg font-bold"
              >
                −
              </button>
              <span className="px-4 py-2 text-lg">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-2 text-lg font-bold"
              >
                +
              </button>
            </div>

        {/* <button
  onClick={() => {
    const existing = JSON.parse(localStorage.getItem("cart") || "[]");
    const productToAdd = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0],
      quantity,
    };

    const existingIndex = existing.findIndex((p) => p.id === product.id);
    if (existingIndex > -1) {
      existing[existingIndex].quantity += quantity;
    } else {
      existing.push(productToAdd);
    }

    localStorage.setItem("cart", JSON.stringify(existing));
    alert(`${product.title} added to cart 🛒`);
  }}
  className="bg-black text-white px-6 py-3 font-semibold hover:bg-gray-900 transition-all duration-300"
>
  Add to Cart
</button> */}



<button
  onClick={() => addToCart(product)}
  className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
>
  Add to Cart
</button>
          <button
  onClick={handleBuyNow}
  className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
>
  Buy Now
</button>
          </div>
        </div>
      </div>

      {/* Similar Products */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold mb-6 text-center">You may also like</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {similar.map((item) => (
            <Link key={item.id} href={`/product/${item.id}`} className="group">
              <div className="relative w-full aspect-square overflow-hidden bg-muted rounded-lg">
                <Image
                  src={item.images[0]}
                  alt={item.title}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="border-t truncate pt-3 mt-2 text-sm text-left text-foreground">
                {item.title}
              </h3>
              <p className="text-gray-600 text-lg mt-1 font-semibold text-left">
                ₹{item.price}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
