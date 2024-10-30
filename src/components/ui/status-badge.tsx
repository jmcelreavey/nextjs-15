import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: string;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "sold above asking":
        return "bg-success/10 text-success";
      case "multiple offers":
        return "bg-secondary/10 text-secondary";
      case "quick sale":
        return "bg-chart-3/10 text-chart-3";
      case "sold at asking":
        return "bg-chart-4/10 text-chart-4";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        getStatusColor(status),
        className,
      )}
    >
      {status}
    </span>
  );
}
