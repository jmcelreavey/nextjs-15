import { Card } from "./card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export function StatCard({ icon: Icon, label, value, trend }: StatCardProps) {
  return (
    <Card className="card-hover">
      <div className="p-6">
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-secondary/10 p-3">
            <Icon className="h-6 w-6 text-secondary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">{label}</p>
            <h4 className="text-2xl font-semibold">{value}</h4>
            {trend && (
              <p
                className={`text-sm ${trend.isPositive ? "text-success" : "text-destructive"}`}
              >
                {trend.isPositive ? "↑" : "↓"} {trend.value}%
              </p>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
