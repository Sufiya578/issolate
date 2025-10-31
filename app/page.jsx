import React from "react";
import Image from "next/image";
import '@/app/globals.css';
import HeroSection from "@/components/ui/HersoSection";
import FeaturedProducts from "@/components/ui/FeaturedProducts";
import NewArrivals from "@/components/ui/home/NewArrivals";
import BrandStory from "@/components/ui/home/BrandStory";





export default function Home() {
  return (
    
<div>
 <HeroSection />
<FeaturedProducts />
<NewArrivals />
<BrandStory />

</div>
 


      
   
  );
}
