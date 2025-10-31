import Image from "next/image";
import StoryImage from "@/public/assets/images/brand/brand_story.jpg";

export default function AboutPage() {
  return (
    <section className="py-24 bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative w-full h-[480px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={StoryImage}
            alt="IssoLate Story"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            The ISSO·LATE Story
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Born from minimalism and rebellion — ISSO·LATE is a creative movement.
            We believe fashion should speak silently but powerfully. 
            Each graphic tee is limited edition, made for those who express identity through style.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our collections blend streetwear aesthetics with premium comfort.
            Designed for men who move differently — from late-night streets to creative studios.
          </p>
        </div>
      </div>
    </section>
  );
}
