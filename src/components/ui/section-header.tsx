import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  alignment = "left",
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "space-y-4",
        alignment === "center" && "text-center",
        className,
      )}
    >
      <h2 className="relative font-sans text-3xl md:text-4xl">
        <span className="relative z-10">{title}</span>
        <span
          className="absolute -bottom-2 left-0 h-3 w-1/4 bg-secondary/10 dark:bg-secondary/20"
          style={{
            transform: alignment === "center" ? "translateX(-50%)" : "none",
            left: alignment === "center" ? "50%" : "0",
          }}
        />
      </h2>
      {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
