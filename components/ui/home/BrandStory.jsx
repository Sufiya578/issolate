import Image from "next/image";
import Link from "next/link";
import StoryImage from "@/public/assets/images/brand/brand_story.jpg"; // <-- add your image here

export default function BrandStory() {
  return (
    <section className="py-24 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Image */}
        <div className="relative w-full h-[480px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={StoryImage}
            alt="IssoLate Brand Story"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Right Text */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Designed for the Bold.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            ISSO·LATE isn’t just a label — it’s an attitude. Born from minimalism and rebellion,
            we craft premium graphic tees that speak louder than trends.
            Each drop is limited, each design is a statement — built for men who move different.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our fabrics are soft yet structured, designed for the perfect fit that stays with you —
            from street to studio, from night to day.
          </p>
          <Link
            href="/about"
            className="btn-primary inline-block px-6 py-3 text-lg"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
