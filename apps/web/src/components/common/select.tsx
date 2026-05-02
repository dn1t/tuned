import { cn } from "tailwind-variants";

export function Select({ className, ...props }: React.ComponentPropsWithoutRef<"select">) {
  return (
    <select
      {...props}
      className={cn(
        "rounded-[9px] border border-zinc-700 bg-zinc-900 px-2 py-1 font-semibold text-sm text-zinc-300 leading-none ring-brand-900 transition focus:border-brand-700 focus:outline-none focus:ring-2",
        className,
      )}
    />
  );
}
