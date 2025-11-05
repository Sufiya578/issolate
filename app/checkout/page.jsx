"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const router = useRouter();
  const [cart, setCart] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postal: "",
  });

  // ✅ Combine both useEffects safely here — before any return
  useEffect(() => {
    const buyNowItem = JSON.parse(localStorage.getItem("buyNowItem"));
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    if (buyNowItem) {
      setCart([buyNowItem]); // show only this item
      localStorage.removeItem("buyNowItem"); // clear after use
    } else {
      setCart(cartItems);
    }
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    if (!form.name || !form.email || !form.address) {
      alert("Please fill all required fields.");
      return;
    }

    const orderData = {
      name: form.name,
      email: form.email,
      items: cart,
      total,
      date: new Date().toISOString(),
    };

    localStorage.setItem("lastOrder", JSON.stringify(orderData));
    localStorage.removeItem("cart");
    router.push("/checkout/success");
  };

  // ✅ This comes after hooks — safe now
  if (cart.length === 0)
    return (
      <main className="pt-36 pb-20 text-center">
        <h1 className="text-3xl font-extrabold mb-4">No items to checkout 🛒</h1>
        <Link
          href="/shop"
          className="bg-black text-white px-6 py-3 font-semibold hover:bg-gray-900 transition-all duration-300"
        >
          Back to Shop
        </Link>
      </main>
    );

  return (
    <main className="max-w-6xl mx-auto px-6 pt-36 pb-20">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-center">
        Checkout
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* LEFT: Customer Details */}
        <div className="border border-border rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Shipping Details</h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name *</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-border rounded-md px-3 py-2 outline-none bg-background focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email *</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-border rounded-md px-3 py-2 outline-none bg-background focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Address *</label>
              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                rows="3"
                className="w-full border border-border rounded-md px-3 py-2 outline-none bg-background focus:ring-2 focus:ring-primary resize-none"
                required
              ></textarea>
            </div>

            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-1">City</label>
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  className="w-full border border-border rounded-md px-3 py-2 outline-none bg-background"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-1">Postal Code</label>
                <input
                  type="text"
                  name="postal"
                  value={form.postal}
                  onChange={handleChange}
                  className="w-full border border-border rounded-md px-3 py-2 outline-none bg-background"
                />
              </div>
            </div>
          </form>
        </div>

        {/* RIGHT: Order Summary */}
        <div className="border border-border rounded-xl p-6 shadow-sm bg-card">
          <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

          <div className="space-y-4 mb-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 border-b border-border pb-4"
              >
                <div className="relative w-20 h-20 rounded-md overflow-hidden bg-muted">
                  <Image
                    src={item.image || "/placeholder.png"}
                    alt={item.title || "Product image"}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 text-left">
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                </div>
                <p className="font-semibold">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-between font-semibold text-lg mb-4">
            <p>Total</p>
            <p>₹{total.toFixed(2)}</p>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="w-full bg-black text-white py-3 font-semibold rounded-md hover:bg-gray-900 transition-all duration-300"
          >
            Place Order
          </button>

          <Link
            href="/cart"
            className="block text-center text-sm text-muted-foreground underline mt-4 hover:text-foreground"
          >
            Back to Cart
          </Link>
        </div>
      </div>
    </main>
  );
}