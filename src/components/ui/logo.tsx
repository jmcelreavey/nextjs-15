import { Home } from "lucide-react";

export function Logo() {
  return (
    <div className="flex select-none items-center gap-2">
      <div className="relative">
        <div className="flex size-8 rotate-6 items-center justify-center rounded-lg bg-secondary transition-transform group-hover:rotate-12">
          <Home className="h-5 w-5 text-white" />
        </div>
        <div className="absolute -bottom-1 -right-1 flex size-4 items-center justify-center rounded-full bg-primary">
          <span className="text-[10px] font-bold text-primary-foreground">
            P
          </span>
        </div>
      </div>
      <div className="font-sans text-xl font-bold">
        <span className="text-secondary">Property</span>
        <span className="text-primary">Pro</span>
      </div>
    </div>
  );
}
