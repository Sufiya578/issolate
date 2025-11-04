"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (Integrate Formspree or backend later)");
  };

  return (
    <section className="pt-36 pb-20 md:pb-24 bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center tracking-tight">
          Contact Us
        </h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a question, feedback, or collaboration idea? We’d love to hear
          from you — just drop your details below.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 max-w-2xl mx-auto bg-card p-8 rounded-2xl border border-border shadow-sm"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
              required
              className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground focus:ring-1 focus:ring-black/70 outline-none transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              required
              className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground focus:ring-1 focus:ring-black/70 outline-none transition"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              onChange={handleChange}
              value={formData.phone}
              placeholder="+91"
              className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground focus:ring-1 focus:ring-black/70 outline-none transition"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              name="message"
              rows="4"
              onChange={handleChange}
              value={formData.message}
              required
              className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground focus:ring-1 focus:ring-black/70 outline-none transition resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-black text-white font-semibold px-8 py-3 rounded-none hover:shadow-lg hover:scale-[1.02] active:scale-[0.97] transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}