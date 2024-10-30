import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export function SectionWrapper({
  children,
  className = "",
  containerClassName = "",
}: SectionWrapperProps) {
  return (
    <section className={cn("py-20", className)}>
      <div className={cn("container mx-auto px-4", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
