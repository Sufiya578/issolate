import '@/app/globals.css';

import { Space_Grotesk, Inter } from "next/font/google";
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';


const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "IssoLate | Drop Your Isolation in Style",
  description: "Premium Graphic T-Shirts for Men. Limited Drops Only.",

  icons: {
    icon: "/favicon.png", // path relative to /public
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-inter bg-background text-foreground">
       <Navbar />
        {children}
       <Footer />
      </body>
    </html>
  );
}


