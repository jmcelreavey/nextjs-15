"use client";

import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit" | "full";
  className?: string;
  delay?: "none" | "short" | "medium" | "long";
}

export function Reveal({
  children,
  width = "fit",
  delay = "none",
  className,
}: RevealProps) {
  return (
    <div
      className={cn(
        "duration-700 animate-in fade-in slide-in-from-bottom-4",
        width === "full" && "w-full",
        delay === "short" && "delay-150",
        delay === "medium" && "delay-300",
        delay === "long" && "delay-500",
        className,
      )}
    >
      {children}
    </div>
  );
}
