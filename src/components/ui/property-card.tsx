"use client";

import { cn } from "@/lib/utils";
import { Clock, Heart, MapPin, Share2, TrendingUp, Users } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Badge } from "./badge";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  badges: string[];
  status: string;
  outcome?: {
    daysToSell?: number;
    aboveAsking?: string;
    viewings?: number;
  };
  className?: string;
}

export function PropertyCard({
  image,
  title,
  location,
  price,
  badges,
  status,
  outcome,
  className,
}: PropertyCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <article
      className={cn(
        "group overflow-hidden rounded-lg border bg-card transition-all duration-300",
        "hover:translate-y-[-2px] hover:shadow-lg",
        className,
      )}
    >
      <div className="relative aspect-[4/3]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        <div className="absolute right-4 top-4 flex gap-2">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={cn(
              "rounded-full bg-white/90 p-2 transition-all duration-200",
              "hover:bg-white active:scale-95 dark:bg-black/50 dark:hover:bg-black/70",
              isLiked && "text-red-500",
            )}
          >
            <Heart
              className="h-4 w-4"
              fill={isLiked ? "currentColor" : "none"}
            />
            <span className="sr-only">Save property</span>
          </button>
          <button
            className={cn(
              "rounded-full bg-white/90 p-2 transition-all duration-200",
              "hover:bg-white active:scale-95 dark:bg-black/50 dark:hover:bg-black/70",
            )}
          >
            <Share2 className="h-4 w-4" />
            <span className="sr-only">Share property</span>
          </button>
        </div>

        {/* Status Badge */}
        <div className="absolute left-4 top-4">
          <Badge
            variant="secondary"
            className="bg-secondary/90 backdrop-blur-sm"
          >
            {status}
          </Badge>
        </div>

        <div className="absolute bottom-4 left-4">
          <div className="text-2xl font-bold text-white">{price}</div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="mb-1 text-xl font-semibold transition-colors group-hover:text-secondary">
          {title}
        </h3>
        <p className="mb-4 flex items-center text-muted-foreground">
          <MapPin className="mr-1 h-4 w-4" />
          {location}
        </p>

        {/* Outcome Stats */}
        {outcome && (
          <div className="mb-4 grid grid-cols-3 gap-4 rounded-lg bg-muted/50 p-3">
            {outcome.daysToSell && (
              <div className="text-center">
                <Clock className="mx-auto mb-1 h-4 w-4 text-secondary" />
                <div className="text-sm font-medium">{outcome.daysToSell}</div>
                <div className="text-xs text-muted-foreground">
                  Days to Sell
                </div>
              </div>
            )}
            {outcome.aboveAsking && (
              <div className="text-center">
                <TrendingUp className="mx-auto mb-1 h-4 w-4 text-secondary" />
                <div className="text-sm font-medium">{outcome.aboveAsking}</div>
                <div className="text-xs text-muted-foreground">
                  Above Asking
                </div>
              </div>
            )}
            {outcome.viewings && (
              <div className="text-center">
                <Users className="mx-auto mb-1 h-4 w-4 text-secondary" />
                <div className="text-sm font-medium">{outcome.viewings}</div>
                <div className="text-xs text-muted-foreground">Viewings</div>
              </div>
            )}
          </div>
        )}

        {/* Property Tags */}
        <div className="flex flex-wrap gap-2">
          {badges.map((badge) => (
            <Badge
              key={badge}
              variant="outline"
              className="bg-background/50 text-xs"
            >
              {badge}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  );
}
