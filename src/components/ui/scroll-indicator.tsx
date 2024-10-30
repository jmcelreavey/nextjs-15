"use client";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-300",
        isVisible ? "opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      <div className="animate-bounce rounded-full bg-secondary/10 p-2">
        <ChevronDown className="h-6 w-6 text-secondary" />
      </div>
    </div>
  );
}
