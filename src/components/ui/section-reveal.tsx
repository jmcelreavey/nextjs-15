"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionReveal({ children, className }: SectionRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0 transition-all duration-700",
        isVisible && "animate-slide-up opacity-100",
        className,
      )}
    >
      {children}
    </div>
  );
}
