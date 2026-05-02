import { cn } from "tailwind-variants";

export function Input({ className, ...props }: React.ComponentPropsWithoutRef<"input">) {
  return (
    <input
      {...props}
      className={cn(
        "rounded-xl border border-zinc-700 bg-zinc-900 px-3.5 py-2.5 font-[650] text-sm leading-none ring-brand-900 transition focus:border-brand-700 focus:outline-none focus:ring-2",
        className,
      )}
    />
  );
}
