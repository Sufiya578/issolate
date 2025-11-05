"use client";

import Image from "next/image";
import StoryImage from "@/public/assets/images/about/about_us.webp";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="pt-36 pb-20 md:pb-24 bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-4">
          About Us
        </h1>
        <p className="text-muted-foreground text-center mb-10">
          Welcome to IISOLATE—where every man can express his individuality.
        </p>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Image Section */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={StoryImage}
              alt="IISOLATE Story"
              className="object-cover object-center w-full h-full rounded-2xl"
              width={600}
              height={500}
            />
          </div>

          {/* Text Section */}
          <div className="space-y-6 text-justify ">
            <p className="text-muted-foreground leading-relaxed">
              At <span className="font-semibold text-foreground">IISOLATE</span>, we don’t just create clothing—we create experiences that redefine your style journey. Founded with a passion for design, quality craftsmanship, and self-expression, IISOLATE has quickly become a leader in menswear that celebrates versatility, inclusivity, and individuality.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Our mission is simple: fashion should empower every man to feel confident, comfortable, and authentic. From classic T-shirts to statement outerwear, our collections blend timeless style with modern sophistication, designed for men of all tastes, sizes, and lifestyles.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              As a <span className="font-semibold">Direct-to-Consumer (D2C)</span> brand, we connect directly with our customers to provide the best value and a seamless shopping experience—online or via our app—backed by secure payments and personalized service.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              What sets us apart is our attention to detail. Each garment is crafted with premium fabrics for durability and comfort, while our design team ensures a balance of classic versatility and trend-forward pieces. Whether for work, casual weekends, or special occasions, IISOLATE delivers menswear that adapts to your lifestyle.
            </p>

            <Link
              href="/shop"
              className="bg-black text-white px-8 py-4 font-semibold rounded-none hover:bg-gray-900 transition-all duration-300 shadow-md hover:shadow-xl"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}