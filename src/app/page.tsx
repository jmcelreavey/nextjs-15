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
