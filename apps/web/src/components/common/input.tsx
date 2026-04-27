import type { ComponentPropsWithoutRef } from "react";
import { cn } from "tailwind-variants";

export function Input({ className, ...props }: ComponentPropsWithoutRef<"input">) {
  return (
    <input
      {...props}
      className={cn(
        "rounded-xl border border-zinc-700 bg-zinc-900 px-3.5 py-2.5 font-[650] text-sm leading-none focus:outline-none",
        className,
      )}
    />
  );
}
