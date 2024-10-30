"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface ParallaxScrollProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // 0-1, where 1 is normal scroll speed
  direction?: "up" | "down";
}

export function ParallaxScroll({
  children,
  className,
  speed = 0.5,
  direction = "up",
}: ParallaxScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const { top } = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (top < windowHeight && top > -windowHeight) {
        const scrollOffset = (windowHeight - top) * speed;
        setOffset(direction === "up" ? -scrollOffset : scrollOffset);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed, direction]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <div
        style={{
          transform: `translateY(${offset}px)`,
          transition: "transform 0.1s linear",
        }}
      >
        {children}
      </div>
    </div>
  );
}
