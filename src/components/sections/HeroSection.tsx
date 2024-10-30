import { Button } from "@/components/ui/button";
import { TrendingUp, Upload } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/properties/property-1.jpg"
          alt="Modern Luxury Home"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30 dark:from-black/90 dark:via-black/75 dark:to-black/60" />
      </div>

      <div className="container relative mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-between px-4 py-12">
        {/* Content Section - Centered */}
        <div className="flex w-full flex-1 items-center justify-center">
          <div className="max-w-3xl text-center">
            <div className="mb-4 font-sans text-3xl text-white duration-700 animate-in fade-in slide-in-from-bottom-3 md:text-5xl lg:text-6xl">
              List Your Property Where It Matters Most
            </div>

            <div className="mb-6 text-lg text-white/90 delay-150 duration-700 animate-in fade-in slide-in-from-bottom-3">
              Join thousands of successful sellers who&apos;ve found their
              perfect buyers through our premium listing platform.
            </div>

            <div className="flex flex-col items-center gap-4 delay-300 duration-700 animate-in fade-in slide-in-from-bottom-3 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-secondary transition-colors duration-200 hover:bg-secondary/90"
              >
                <Upload className="mr-2 h-5 w-5" /> List Your Property
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
              >
                Learn More
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4 delay-500 duration-700 animate-in fade-in slide-in-from-bottom-3">
              {[
                { number: "50k+", label: "Active Buyers" },
                { number: "98%", label: "Listing Success Rate" },
                { number: "30 Days", label: "Average Sale Time" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-xl font-bold text-white md:text-2xl">
                    {stat.number}
                  </div>
                  <div className="text-xs text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Market Insight Badge */}
        <div className="absolute right-4 top-8 duration-700 animate-in fade-in slide-in-from-top md:right-8 md:top-12">
          <div className="flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-white backdrop-blur-sm">
            <TrendingUp className="h-4 w-4" />
            <span className="text-sm font-medium">
              Market activity up 23% this month
            </span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mb-8 flex animate-bounce justify-center">
          <div className="flex flex-col items-center text-white/60">
            <span className="mb-2 text-xs">Scroll to learn more</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
