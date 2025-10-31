"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Footer from '@/components/ui/Footer';

export default function ExpandableFooter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border-t border-border bg-background text-foreground">
      {/* Toggle Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 sm:px-10 py-3 text-md  font-semibold bg-(--card) hover:bg-muted transition"
      >
        <span>Know more about ISSO·LATE</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-primary" />
        ) : (
          <ChevronDown className="w-5 h-5 text-primary" />
        )}
      </button>

      {/* Footer Content (collapsible) */}
      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          isOpen ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <Footer />
      </div>
    </div>
  );
}
