import { HoverCard } from "@/components/ui/hover-card";
import { SectionHeader } from "@/components/ui/section-header";
import { SectionReveal } from "@/components/ui/section-reveal";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { StatCard } from "@/components/ui/stat-card";
import { Tooltip } from "@/components/ui/tooltip";
import {
  Banknote,
  Camera,
  Clock,
  LineChart,
  Shield,
  Users,
} from "lucide-react";

const FEATURES = [
  {
    icon: Camera,
    title: "Professional Photography",
    description:
      "Free professional photography and virtual tours for every listing to maximize your property's appeal.",
    color: "text-chart-1",
  },
  {
    icon: LineChart,
    title: "Smart Pricing Tools",
    description:
      "Get real-time market analysis and pricing recommendations based on local market data.",
    color: "text-chart-2",
  },
  {
    icon: Users,
    title: "Qualified Buyers Only",
    description:
      "We pre-screen all potential buyers to ensure you only deal with serious, qualified offers.",
    color: "text-chart-3",
  },
  {
    icon: Shield,
    title: "Secure Process",
    description:
      "End-to-end support with legal documentation and secure transaction handling.",
    color: "text-chart-4",
  },
  {
    icon: Banknote,
    title: "Maximum Value",
    description:
      "Our premium listing platform helps you get the best price for your property.",
    color: "text-chart-5",
  },
  {
    icon: Clock,
    title: "Quick Results",
    description:
      "Average time to offer is just 30 days with our optimized listing process.",
    color: "text-secondary",
  },
];

export function FeaturesSection() {
  return (
    <SectionWrapper className="bg-muted">
      <SectionReveal>
        <SectionHeader
          title="Why Choose PropertyPro?"
          subtitle="We combine cutting-edge technology with local expertise to deliver an exceptional selling experience"
          alignment="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <SectionReveal
              key={feature.title}
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
              <Tooltip content={`Learn more about ${feature.title}`}>
                <HoverCard className="h-full cursor-pointer">
                  <div className="mb-4 inline-block rounded-full bg-background p-3">
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </HoverCard>
              </Tooltip>
            </SectionReveal>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-16 md:grid-cols-4">
          {[
            {
              label: "Properties Listed",
              value: "15k+",
              trend: { value: 23, isPositive: true },
            },
            {
              label: "Success Rate",
              value: "98%",
              trend: { value: 5, isPositive: true },
            },
            {
              label: "Average Days Listed",
              value: "30",
              trend: { value: 15, isPositive: true },
            },
            {
              label: "Client Satisfaction",
              value: "4.9/5",
              trend: { value: 8, isPositive: true },
            },
          ].map((stat, index) => (
            <SectionReveal key={stat.label} className={`delay-${index * 150}`}>
              <StatCard
                icon={LineChart}
                label={stat.label}
                value={stat.value}
                trend={stat.trend}
              />
            </SectionReveal>
          ))}
        </div>
      </SectionReveal>
    </SectionWrapper>
  );
}
