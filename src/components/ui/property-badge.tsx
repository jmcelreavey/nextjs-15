type PropertyBadgeProps = {
  status: "Listed" | "Featured" | "Updated" | "Open House" | "Premium";
  className?: string;
};

const STATUS_STYLES = {
  Listed: "bg-chart-1/10 text-chart-1",
  Featured: "bg-chart-2/10 text-chart-2",
  Updated: "bg-chart-3/10 text-chart-3",
  "Open House": "bg-chart-4/10 text-chart-4",
  Premium: "bg-chart-5/10 text-chart-5",
};

export function PropertyBadge({ status, className }: PropertyBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors ${STATUS_STYLES[status]} ${className}`}
    >
      {status}
    </span>
  );
}
