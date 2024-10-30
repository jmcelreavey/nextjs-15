"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface HoverCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function HoverCard({ children, className, ...props }: HoverCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border bg-card p-6 shadow-sm",
        "transition-all duration-300",
        "hover:translate-y-[-2px] hover:shadow-md",
        "active:translate-y-0 active:shadow-sm",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
