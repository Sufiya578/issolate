
"use client";

import Image from "next/image";
import aboutus from '@/public/assets/images/about/aboutus-img.webp';

import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="bg-black text-white min-h-[600px] flex flex-col md:flex-row items-stretch">
      {/* Left Text Section */}
      <div className="flex flex-col justify-center px-6 md:px-16 py-16 md:w-1/2 w-full">
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
          LESS NOISE. <br /> MORE IDENTITY.
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md">
          We craft premium streetwear with a minimalist soul — combining bold expression 
          with timeless comfort. Every piece is designed for those who move with purpose 
          and stand out without trying too hard.
        </p>

        <Link 
          href="/about"
          className="inline-block bg-white text-black px-6 py-3 rounded-none font-semibold transition-all duration-300 w-fit"
        >
          Read More
        </Link>
      </div>

      {/* Right Image Section */}
      <div className="relative md:w-1/2 w-full h-[400px] md:h-auto">
        <Image
          src={aboutus}
          alt="About Us - Streetwear Minimalism"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
    </section>
  );
}