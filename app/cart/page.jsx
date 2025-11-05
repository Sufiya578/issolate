"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getCart, saveCart } from "@/lib/cart";

export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const updateQuantity = (id, delta) => {
    const updated = cart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
      .filter((item) => item.quantity > 0);
    setCart(updated);
    saveCart(updated);
  };

  const removeItem = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    saveCart(updated);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <main className="pt-36 pb-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
        <Link
          href="/shop"
          className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
        >
          Go Shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-6 pt-36 pb-20">
      <h1 className="text-4xl font-extrabold mb-8 text-center">Your Cart</h1>

      <div className="grid md:grid-cols-3 gap-10">
        {/* Left - Cart Items */}
        <div className="md:col-span-2 space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-6 border-b border-border pb-6"
            >
              <div className="relative w-24 h-24 rounded-md overflow-hidden">
                <Image
                  src={item.images?.[0] || "/placeholder.jpg"}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex-1">
                <h2 className="font-semibold text-lg">{item.title}</h2>
                <p className="text-gray-500 text-sm mb-2">₹{item.price}</p>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="border px-3 py-1 rounded-md hover:bg-gray-100"
                  >
                    –
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="border px-3 py-1 rounded-md hover:bg-gray-100"
                  >
                    +
                  </button>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 ml-4 text-sm hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right - Summary */}
        <div className="bg-card border border-border rounded-xl p-6 h-fit sticky top-36">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-6 text-sm text-gray-500">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="flex justify-between font-semibold text-lg mb-6">
            <span>Total</span>
            <span>₹{total.toFixed(2)}</span>
          </div>

          <Link
            href="/checkout"
            className="block w-full bg-black text-white text-center py-3 rounded-md hover:bg-gray-800 transition"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </main>
  );
}