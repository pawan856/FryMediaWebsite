import { cn } from "@/lib/utils/cn";

export function FyrnLogo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 74 60"
        className="h-9 w-11 shrink-0"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M5 32C5 15.5 17.5 5 36.5 5H60C52.5 15.8 43.7 20.5 30.8 22.1 19.8 23.5 11.5 27 5 32Z"
          fill="#183C2E"
        />
        <path
          d="M5 55V38C12.8 27.5 23.8 22.8 43.5 22.8 37.8 35 28.8 43.5 17.2 47.2 12.2 48.8 8.4 51.5 5 55Z"
          fill="#709D77"
        />
        <path
          d="M66 1C67.4 7.6 68.4 8.6 73 10 68.4 11.4 67.4 12.4 66 19 64.6 12.4 63.6 11.4 59 10 63.6 8.6 64.6 7.6 66 1Z"
          fill="#183C2E"
        />
      </svg>
      <span className="h-8 w-px bg-border" aria-hidden="true" />
      <span className="flex flex-col leading-none">
        <span className="text-[1.35rem] font-semibold text-foreground">Fyrn</span>
        <span className="mt-1 text-[0.55rem] font-medium uppercase tracking-[0.28em] text-foreground-muted">
          Media
        </span>
      </span>
    </span>
  );
}