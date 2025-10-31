import Link from "next/link";
import { Instagram, Facebook, X, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-5 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">

        {/* === Top Footer Grid === */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* --- Brand Section --- */}
          <div>
            {/* Title + Socials for mobile/tablet */}
            <div className="flex items-center justify-between">
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-wide mb-3">
                ISSO<span className="text-primary">·</span>LATE
              </h2>

              {/* Social Icons (only visible on mobile & tablet) */}
              <div className="flex space-x-3 text-muted-foreground lg:hidden">
                <Link href="#" className="hover:text-primary transition">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="#" className="hover:text-primary transition">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="hover:text-primary transition">
                  <X className="w-5 h-5" />
                </Link>
                <Link href="#" className="hover:text-primary transition">
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Drop your isolation in style. Premium men’s tees made for comfort,
              confidence, and expression.
            </p>
          </div>

          {/* --- Quick Links + Support --- */}
          <div className="grid grid-cols-2 gap-6 lg:col-span-2">
            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                Quick Links
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li><Link href="/" className="hover:text-primary transition">Home</Link></li>
                <li><Link href="/catalog" className="hover:text-primary transition">Shop</Link></li>
                <li><Link href="/about" className="hover:text-primary transition">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition">Contact</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                Support
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li><Link href="/faq" className="hover:text-primary transition">FAQ</Link></li>
                <li><Link href="/returns" className="hover:text-primary transition">Returns & Exchange</Link></li>
                <li><Link href="/privacy" className="hover:text-primary transition">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-primary transition">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          {/* --- Socials (desktop only) --- */}
          <div className="hidden lg:block">
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 text-muted-foreground">
              <Link href="#" className="hover:text-primary transition"><Instagram className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-primary transition"><Facebook className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-primary transition"><X className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-primary transition"><Mail className="w-5 h-5" /></Link>
            </div>
          </div>
        </div>

        {/* === Bottom Line === */}
        <div className="text-center text-xs sm:text-sm text-muted-foreground border-t border-border pt-5">
          © {new Date().getFullYear()} ISSO·LATE. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
