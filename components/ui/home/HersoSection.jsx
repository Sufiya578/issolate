"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import Hero1 from "@/public/assets/images/hero/hero-1.webp";
import Hero2 from "@/public/assets/images/hero/hero-2.webp";
import Hero3 from "@/public/assets/images/hero/hero-3.webp";
import Hero4 from "@/public/assets/images/hero/hero-4.webp";
import Hero5 from "@/public/assets/images/hero/hero-5.webp";

export default function HeroSection() {
  const heroImages = [Hero1, Hero2, Hero3, Hero4, Hero5];

  const heroTexts = [
    "Drop Your Isolation in Style.",
    "Streetwear That Speaks for You.",
    "Every Drop Tells a Story.",
    "Limited Edition. Unlimited Vibes.",
    "Made for Those Who Stand Out.",
  ];

  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        navigation={{ enabled: true }}
        pagination={{ clickable: true, dynamicBullets: true }}
        loop={true}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        className="w-full h-full"
        breakpoints={{
          0: { navigation: { enabled: false } },
          768: { navigation: { enabled: false } },
          1024: { navigation: { enabled: true } },
        }}
      >
        {heroImages.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[85vh]">
              {/* Background Image */}
              <Image
                src={img}
                alt={`Hero Slide ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover object-center transition-all duration-1000"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Hero Text Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 pt-6">
                <h1 className="text-2xl md:text-6xl font-extrabold mb-4 tracking-tight animate-fadeIn">
                  {heroTexts[index]}
                </h1>
                <p className="text-md md:text-xl opacity-90 mb-6">
                  Premium Graphic T-Shirts for Men
                </p>
                <Link
                  href="/shop"
                  className="bg-white text-black text-sm  md:text-md font-semibold px-4 py-2 md:px-6 md:py-3 mt-6 transition-all duration-300 hover:opacity-80  hover:shadow-xl "
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}