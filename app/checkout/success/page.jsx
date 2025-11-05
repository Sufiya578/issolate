"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function CheckoutSuccessPage() {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const lastOrder = JSON.parse(localStorage.getItem("lastOrder") || "null");
    setOrder(lastOrder);
  }, []);

  if (!order) {
    return (
      <main className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-3xl font-extrabold mb-4">No recent order found 🛍️</h1>
        <Link
          href="/shop"
          className="bg-black text-white px-6 py-3 font-semibold hover:bg-gray-900 transition-all duration-300"
        >
          Back to Shop
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto px-6 pt-36 pb-20 text-center">
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-600 mb-3">
          Order Confirmed! ✅
        </h1>
        <p className="text-gray-600">
          Thank you for your purchase, {order.name || "Customer"}!  
          Your order has been successfully placed and will be processed soon.
        </p>
      </div>

      {/* Order Summary */}
      <div className="border border-border rounded-xl p-6 shadow-sm bg-card text-left mb-8">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="space-y-4">
          {order.items.map((item) => (
            <div key={item.id} className="flex items-center gap-4 border-b border-border pb-3">
              <div className="relative w-16 h-16 rounded-md overflow-hidden bg-muted">
                <Image src={item.image} alt={item.title} fill className="object-contain" />
              </div>
              <div className="flex-1">
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
              </div>
              <p className="font-semibold">₹{(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-between font-semibold text-lg mt-6">
          <p>Total</p>
          <p>₹{order.total.toFixed(2)}</p>
        </div>
      </div>

      {/* Back to Shop Button */}
      <Link
        href="/shop"
        className="inline-block bg-black text-white px-8 py-3 font-semibold rounded-md hover:bg-gray-900 transition-all duration-300"
      >
        Continue Shopping
      </Link>
    </main>
  );
}
