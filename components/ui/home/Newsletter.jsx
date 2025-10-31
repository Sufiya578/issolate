"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed email:", email);
    setEmail("");
  };

  return (
    // ✨ Only visible on desktop (hidden on mobile & tablet)
    <section className="hidden lg:block py-20 bg-card text-foreground border-t border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Stay in the Loop.
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Be the first to know about our next drop. No spam — just exclusive updates, early access, and member-only offers.
        </p>

        {/* Newsletter Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-[350px] px-4 py-3 rounded-full border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
          />
          <button
            type="submit"
            className="btn-primary px-6 py-3"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
