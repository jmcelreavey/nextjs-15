"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface SectionProgressProps {
  className?: string;
}

export function SectionProgress({ className }: SectionProgressProps) {
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateProgress = () => {
      if (!ref.current) return;

      const element = ref.current;
      const elementTop = element.offsetTop;
      const elementHeight = element.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      const distance = scrollPosition + windowHeight - elementTop;
      const percentage = Math.min(
        Math.max((distance / (elementHeight + windowHeight)) * 100, 0),
        100,
      );

      setProgress(percentage);
    };

    window.addEventListener("scroll", calculateProgress);
    calculateProgress(); // Initial calculation

    return () => window.removeEventListener("scroll", calculateProgress);
  }, []);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <div className="fixed left-0 top-0 h-1 w-full bg-background/10">
        <div
          className="h-full bg-secondary transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
