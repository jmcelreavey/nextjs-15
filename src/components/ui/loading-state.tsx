import { cn } from "@/lib/utils";

interface LoadingStateProps {
  className?: string;
}

export function LoadingState({ className }: LoadingStateProps) {
  return (
    <div
      className={cn("flex items-center justify-center space-x-2", className)}
    >
      <div className="h-2 w-2 animate-bounce rounded-full bg-secondary [animation-delay:-0.3s]" />
      <div className="h-2 w-2 animate-bounce rounded-full bg-secondary [animation-delay:-0.15s]" />
      <div className="h-2 w-2 animate-bounce rounded-full bg-secondary" />
    </div>
  );
}
