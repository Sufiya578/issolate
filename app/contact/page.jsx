"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (Integrate Formspree or backend later)");
  };

  return (
    <section className="py-24 bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <h1 className="text-4xl font-extrabold mb-6 text-center">Contact Us</h1>
        <p className="text-center text-muted-foreground mb-12">
          Have a question or collaboration idea? Drop us a message.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 max-w-2xl mx-auto bg-card p-8 rounded-2xl border border-border shadow-sm"
        >
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
              required
              className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              required
              className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              name="message"
              rows="4"
              onChange={handleChange}
              value={formData.message}
              required
              className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          <button type="submit" className="btn-primary w-full py-3 text-lg">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
