import React from "react";
import Image from "next/image";
import '@/app/globals.css';
import HeroSection from "@/components/ui/home/HersoSection";
import FeaturedProducts from "@/components/ui/home/FeaturedProducts";
import AboutUs from "@/components/ui/home/AboutUs";
import ContactSection from "@/components/ui/home/ContactSection";




export default function Home() {
  return (
    
<div>
 <HeroSection />
<FeaturedProducts />
<AboutUs />
<ContactSection />
</div>
 


      
   
  );
}
