import { Button } from "@/components/ui/button";
import { PropertyCard } from "@/components/ui/property-card";
import { SectionHeader } from "@/components/ui/section-header";
import { SectionReveal } from "@/components/ui/section-reveal";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ArrowRight } from "lucide-react";
import { Suspense } from "react";

const SUCCESS_STORIES = [
  {
    id: 1,
    title: "Modern Family Home",
    location: "Belfast, BT9",
    outcome: {
      daysToSell: 18,
      aboveAsking: "8%",
      viewings: 24,
    },
    imageUrl: "/properties/property-1.jpg",
    status: "Sold Above Asking",
    badges: ["4 Bed", "3 Bath", "Garden", "Garage"],
    price: "£425,000",
  },
  {
    id: 2,
    title: "Luxury Apartment",
    location: "Belfast, BT1",
    outcome: {
      daysToSell: 21,
      aboveAsking: "5%",
      viewings: 19,
    },
    imageUrl: "/properties/property-2.jpg",
    status: "Sold in 3 Weeks",
    badges: ["2 Bed", "2 Bath", "Balcony", "Parking"],
    price: "£295,000",
  },
  {
    id: 3,
    title: "Charming Cottage",
    location: "Holywood, BT18",
    outcome: {
      daysToSell: 14,
      aboveAsking: "12%",
      viewings: 31,
    },
    imageUrl: "/properties/property-3.jpg",
    status: "Multiple Offers",
    badges: ["3 Bed", "1 Bath", "Period Features", "Garden"],
    price: "£375,000",
  },
  {
    id: 4,
    title: "Penthouse Suite",
    location: "Belfast, BT1",
    outcome: {
      daysToSell: 28,
      aboveAsking: "3%",
      viewings: 15,
    },
    imageUrl: "/properties/property-4.jpg",
    status: "Sold at Asking",
    badges: ["3 Bed", "2 Bath", "Views", "Terrace"],
    price: "£550,000",
  },
  {
    id: 5,
    title: "Victorian Townhouse",
    location: "Belfast, BT7",
    outcome: {
      daysToSell: 25,
      aboveAsking: "7%",
      viewings: 22,
    },
    imageUrl: "/properties/property-5.jpg",
    status: "Sold Above Asking",
    badges: ["5 Bed", "3 Bath", "Period Features", "Garden"],
    price: "£475,000",
  },
  {
    id: 6,
    title: "Modern Duplex",
    location: "Belfast, BT9",
    outcome: {
      daysToSell: 16,
      aboveAsking: "6%",
      viewings: 27,
    },
    imageUrl: "/properties/property-6.jpg",
    status: "Quick Sale",
    badges: ["3 Bed", "2 Bath", "Duplex", "Parking"],
    price: "£325,000",
  },
];

// Skeleton loader component
function PropertyCardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="aspect-[4/3] w-full rounded-t-lg bg-muted"></div>
      <div className="space-y-3 p-4">
        <div className="h-6 w-3/4 rounded bg-muted"></div>
        <div className="h-4 w-1/2 rounded bg-muted"></div>
        <div className="h-10 w-full rounded bg-muted"></div>
      </div>
    </div>
  );
}

export function PropertiesSection() {
  return (
    <SectionWrapper>
      <div className="flex flex-col space-y-16">
        <SectionReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between">
            <SectionHeader
              title="Recent Success Stories"
              subtitle="See how we've helped sellers achieve exceptional results"
            />
            <Button variant="ghost" className="hidden items-center md:flex">
              View All Success Stories <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Suspense
            fallback={[1, 2, 3].map((i) => (
              <PropertyCardSkeleton key={i} />
            ))}
          >
            {SUCCESS_STORIES.map((property, index) => (
              <SectionReveal
                key={property.id}
                className={`transition-all duration-500 ${
                  index === 1 ? "delay-150" : index === 2 ? "delay-300" : ""
                }`}
              >
                <PropertyCard
                  key={property.id}
                  image={property.imageUrl}
                  title={property.title}
                  location={property.location}
                  price={property.price}
                  badges={property.badges}
                  status={property.status}
                  outcome={property.outcome}
                />
              </SectionReveal>
            ))}
          </Suspense>
        </div>

        <SectionReveal className="md:hidden">
          <Button variant="outline" className="w-full">
            View All Success Stories
          </Button>
        </SectionReveal>
      </div>
    </SectionWrapper>
  );
}
