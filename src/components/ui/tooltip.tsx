"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
}

export function Tooltip({ content, children, side = "top" }: TooltipProps) {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
      >
        {children}
      </div>
      {isVisible && (
        <div
          className={cn(
            "absolute z-50 rounded-md bg-primary px-2 py-1 text-xs text-primary-foreground",
            "animate-in fade-in-0 zoom-in-95",
            {
              "bottom-full mb-2": side === "top",
              "left-full top-1/2 ml-2 -translate-y-1/2": side === "right",
              "top-full mt-2": side === "bottom",
              "right-full top-1/2 mr-2 -translate-y-1/2": side === "left",
            },
          )}
        >
          {content}
          <div
            className={cn("absolute h-2 w-2 rotate-45 bg-primary", {
              "bottom-[-4px] left-1/2 -translate-x-1/2": side === "top",
              "left-[-4px] top-1/2 -translate-y-1/2": side === "right",
              "left-1/2 top-[-4px] -translate-x-1/2": side === "bottom",
              "right-[-4px] top-1/2 -translate-y-1/2": side === "left",
            })}
          />
        </div>
      )}
    </div>
  );
}
