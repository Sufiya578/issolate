"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import Hero1 from "@/public/assets/images/hero/tshirt_hero.jpeg";
import Hero2 from "@/public/assets/images/hero/tshirt_hero-2.jpeg";
import Hero3 from "@/public/assets/images/hero/tshirt_hero-3.jpeg";
import Hero4 from "@/public/assets/images/hero/tshirt_hero-4.jpeg";
import Hero5 from "@/public/assets/images/hero/tshirt_hero-5.jpeg";
import Hero6 from "@/public/assets/images/hero/tshirt_hero-6.jpeg";

export default function HeroSection() {
  const heroImages = [Hero1, Hero2, Hero3, Hero4, Hero5, Hero6];

  const heroTexts = [
    "Drop Your Isolation in Style.",
    "Streetwear That Speaks for You.",
    "Every Drop Tells a Story.",
    "Limited Edition. Unlimited Vibes.",
    "Your Style, Your Statement.",
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
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                <h1 className="text-2xl md:text-6xl font-extrabold mb-4 tracking-tight animate-fadeIn">
                  {heroTexts[index]}
                </h1>
                <p className="text-md md:text-xl opacity-90 mb-6">
                  Premium Graphic T-Shirts for Men
                </p>
                <Link
                  href="/catalog"
                  className="bg-white text-black  font-semibold px-6 py-3 rounded-none  transition-all duration-300 opacity-70 hover:opacity-90  hover:shadow-xl "
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