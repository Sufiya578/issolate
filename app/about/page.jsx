"use client";

import Image from "next/image";
import StoryImage from "@/public/assets/images/contact/contact-img.jpg";
import Link from "next/link";


export default function AboutPage() {
  return (
    <section className="pt-36 pb-20 md:pb-24 bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Image Section */}
        <div className="relative w-full h-[480px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={StoryImage}
            alt="IISOLATE Story"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Text Section */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center">
            About us
          </h1>

          <p className="text-muted-foreground leading-relaxed">
            At <span className="font-semibold text-foreground"> IISOLATE</span>, we believe style should speak quietly but confidently. 
            Our designs merge minimalism with bold identity — crafted for comfort, detail, and self-expression.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            From classic tees to statement outerwear, every piece is made to fit real people and real lives. 
            We focus on quality, inclusivity, and timeless appeal.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-8">
            More than just clothing, IISOLATE is a movement — 
            where less noise means <span className="font-semibold">more identity.</span>
          </p>
               <Link
          href="/shop"
          className="bg-black text-white px-8 py-4 font-semibold rounded-none hover:bg-gray-900 transition-all duration-300 shadow-md hover:shadow-xl"
        >
          Shop Now
        </Link>
        </div>
      </div>
    </section>
  );
}