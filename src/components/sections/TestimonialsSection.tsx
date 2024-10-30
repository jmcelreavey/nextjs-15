import { HoverCard } from "@/components/ui/hover-card";
import { SectionHeader } from "@/components/ui/section-header";
import { SectionReveal } from "@/components/ui/section-reveal";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { StatCard } from "@/components/ui/stat-card";
import { Clock, Quote, Star, ThumbsUp, TrendingUp, Users } from "lucide-react";
import Image from "next/image";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Thompson",
    role: "Sold in Holywood",
    image: "/testimonials/sarah.jpg",
    quote:
      "PropertyPro's marketing strategy was exceptional. They got me 15% above my asking price and handled everything professionally.",
    rating: 5,
    outcome: "Sold £45,000 above asking",
    timeframe: "Sold in 21 days",
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Sold in Belfast City Centre",
    image: "/testimonials/michael.jpg",
    quote:
      "The professional photography made my apartment stand out. Had multiple offers within the first week of listing.",
    rating: 5,
    outcome: "Multiple offers received",
    timeframe: "Sold in 14 days",
  },
  {
    id: 3,
    name: "Emma & David Hughes",
    role: "Sold in Bangor",
    image: "/testimonials/emily-david.jpg",
    quote:
      "From valuation to completion, PropertyPro made selling our family home stress-free. Their local market knowledge was invaluable.",
    rating: 5,
    outcome: "Full asking price achieved",
    timeframe: "Sold in 28 days",
  },
  {
    id: 4,
    name: "Michael O'Connor",
    role: "Sold in Lisburn",
    image: "/testimonials/michael-2.jpg",
    quote:
      "The virtual tour feature attracted serious buyers only. Saved so much time on viewings and got a great price.",
    rating: 5,
    outcome: "Sold £32,000 above asking",
    timeframe: "Sold in 19 days",
  },
  {
    id: 5,
    name: "Claire & Peter Morrison",
    role: "Sold in Newtownards",
    image: "/testimonials/couple-2.jpg",
    quote:
      "Excellent service from start to finish. The team's negotiation skills helped us achieve a price we didn't think was possible.",
    rating: 5,
    outcome: "Sold 12% above market value",
    timeframe: "Sold in 25 days",
  },
  {
    id: 6,
    name: "Rachel Stewart",
    role: "Sold in Carrickfergus",
    image: "/testimonials/rachel.jpg",
    quote:
      "As a first-time seller, I appreciated the step-by-step guidance. The process was smoother than I expected.",
    rating: 5,
    outcome: "Quick sale achieved",
    timeframe: "Sold in 17 days",
  },
];

export function TestimonialsSection() {
  return (
    <SectionWrapper className="bg-muted">
      <SectionReveal>
        <SectionHeader
          title="Success Stories from Recent Sellers"
          subtitle="Join our community of successful sellers who've achieved exceptional results"
          alignment="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <SectionReveal
              key={testimonial.id}
              className={`transition-all duration-500 ${
                index === 1
                  ? "delay-150"
                  : index === 2
                    ? "delay-300"
                    : index === 3
                      ? "delay-450"
                      : index === 4
                        ? "delay-600"
                        : index === 5
                          ? "delay-750"
                          : ""
              }`}
            >
              <HoverCard className="h-full">
                <Quote className="absolute right-4 top-4 h-12 w-12 text-secondary/10" />

                <div className="mb-6 flex">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-secondary text-secondary"
                    />
                  ))}
                </div>

                <blockquote className="mb-8 text-lg leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <div className="mb-6 space-y-2 rounded-lg bg-accent/50 p-4">
                  <div className="text-sm font-medium text-secondary">
                    {testimonial.outcome}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.timeframe}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-lg font-semibold">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </HoverCard>
            </SectionReveal>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-16 md:grid-cols-4">
          {[
            { icon: Users, label: "Happy Sellers", value: "15k+" },
            { icon: TrendingUp, label: "Average Above Asking", value: "12%" },
            { icon: Clock, label: "Average Days to Sell", value: "28" },
            { icon: ThumbsUp, label: "Seller Satisfaction", value: "98%" },
          ].map((stat, index) => (
            <SectionReveal key={stat.label} className={`delay-${index * 150}`}>
              <StatCard
                icon={stat.icon}
                label={stat.label}
                value={stat.value}
              />
            </SectionReveal>
          ))}
        </div>
      </SectionReveal>
    </SectionWrapper>
  );
}
