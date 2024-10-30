import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CTASection } from "@/components/sections/CTASection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PropertiesSection } from "@/components/sections/PropertiesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { SectionProgress } from "@/components/ui/section-progress";
import { IMAGES } from "@/lib/constants";
import { Metadata } from "next";

// Add preload hint for the hero image
export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "PropertyPro - List Your Property",
    description: "Find the perfect buyer for your property with PropertyPro",
    openGraph: {
      images: [IMAGES.HERO],
    },
    twitter: {
      card: "summary_large_image",
      images: [IMAGES.HERO],
    },
  };
}

export default function LandingPage() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="flex-grow">
        <SectionProgress />
        <HeroSection />
        <FeaturesSection />
        <PropertiesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
