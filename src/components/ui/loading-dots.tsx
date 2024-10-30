export function LoadingDots() {
  return (
    <span className="inline-flex items-center gap-1">
      <span className="size-1.5 animate-bounce rounded-full bg-current delay-0" />
      <span className="size-1.5 animate-bounce rounded-full bg-current delay-150" />
      <span className="size-1.5 animate-bounce rounded-full bg-current delay-300" />
    </span>
  );
}
