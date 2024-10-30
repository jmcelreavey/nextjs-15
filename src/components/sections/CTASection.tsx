"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { SectionReveal } from "@/components/ui/section-reveal";
import { Tooltip } from "@/components/ui/tooltip";
import { ArrowRight, Calendar, Camera, Phone } from "lucide-react";
import { useState } from "react";

const LISTING_STEPS = [
  {
    icon: Camera,
    title: "Free Professional Photos",
    description: "We'll arrange professional photography at no cost",
  },
  {
    icon: Calendar,
    title: "Live in 24 Hours",
    description: "Your property listed and marketed within a day",
  },
  {
    icon: Phone,
    title: "Dedicated Agent",
    description: "Personal support throughout the entire process",
  },
];

export function CTASection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
  };

  return (
    <section className="relative overflow-hidden bg-primary py-16">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] opacity-10" />

      <div className="container relative mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Left Column - Content */}
          <SectionReveal>
            <h2 className="mb-6 font-sans text-3xl text-primary-foreground md:text-4xl">
              Ready to List Your Property?
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/90">
              Start your success story today with our premium listing service
            </p>

            {/* Process Steps */}
            <div className="mb-8 space-y-6">
              {LISTING_STEPS.map((step, index) => (
                <SectionReveal
                  key={step.title}
                  className={`delay-${index * 150}`}
                >
                  <div className="group flex items-start gap-4">
                    <div className="rounded-full bg-secondary/10 p-2 transition-all duration-300 group-hover:bg-secondary/20">
                      <step.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-medium text-primary-foreground">
                        {step.title}
                      </h3>
                      <p className="text-sm text-primary-foreground/75">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>

            {/* Social Proof */}
            <SectionReveal className="delay-500">
              <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-sm text-primary-foreground">
                  <span className="font-semibold text-primary-foreground">
                    ★★★★★ 4.9/5
                  </span>{" "}
                  average rating from 10,000+ verified sellers
                </p>
              </div>
            </SectionReveal>
          </SectionReveal>

          {/* Right Column - Form */}
          <SectionReveal className="delay-300">
            <div className="rounded-lg bg-card p-6 shadow-xl md:p-8">
              <h3 className="mb-2 font-sans text-xl text-card-foreground">
                List Your Property
              </h3>
              <p className="mb-6 text-sm text-muted-foreground">
                Get your free property valuation today
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Tooltip content="Enter your property's full address">
                  <Input
                    type="text"
                    placeholder="Property Address"
                    className="bg-background"
                    disabled={isSubmitting}
                  />
                </Tooltip>
                <div className="grid grid-cols-2 gap-4">
                  <Tooltip content="Enter your full name">
                    <Input
                      type="text"
                      placeholder="Your Name"
                      className="bg-background"
                      disabled={isSubmitting}
                    />
                  </Tooltip>
                  <Tooltip content="Enter your contact number">
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      className="bg-background"
                      disabled={isSubmitting}
                    />
                  </Tooltip>
                </div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="bg-background"
                  disabled={isSubmitting}
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full bg-secondary text-white hover:bg-secondary/90"
                >
                  {isSubmitting ? (
                    <LoadingSpinner />
                  ) : (
                    <>
                      Get Free Valuation
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </form>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                By submitting, you agree to our{" "}
                <a href="/terms" className="underline hover:text-primary">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy" className="underline hover:text-primary">
                  Privacy Policy
                </a>
              </p>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
