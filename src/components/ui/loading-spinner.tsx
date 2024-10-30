export function LoadingSpinner({ className = "" }: { className?: string }) {
  return (
    <div
      className={`size-4 animate-spin rounded-full border-2 border-current border-t-transparent ${className}`}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
