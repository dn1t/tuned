import type { ComponentPropsWithoutRef } from "react";
import { cn } from "tailwind-variants";

export function Select({ className, ...props }: ComponentPropsWithoutRef<"select">) {
  return (
    <select
      {...props}
      className={cn(
        "rounded-[9px] border border-zinc-700 bg-zinc-900 px-2 py-1 font-semibold text-sm text-zinc-300 leading-none",
        className,
      )}
    />
  );
}
