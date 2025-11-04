"use client";

import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="bg-white text-black py-24">
      <div className="max-w-7xl mx-auto px-3 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
          Get in touch with us.
        </h2>
        <p className="text-muted-foreground mb-8 md:mb-12">
          Want to know more about our drops, collaborate, or just say hi?  
          Drop us a message and we’ll get back to you as soon as possible.
        </p>
        <Link
          href="/contact"
          className="bg-black text-white px-8 py-4 font-semibold rounded-none hover:bg-gray-900 transition-all duration-300 shadow-md hover:shadow-xl"
        >
          Contact us
        </Link>
      </div>
    </section>
  );
}