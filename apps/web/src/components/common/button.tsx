import type { ComponentPropsWithoutRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
  base: "bg-black font-[650] text-sm rounded-xl px-4.5 py-2.5 leading-none cursor-pointer text-black",
  variants: {
    color: {
      primary: "bg-brand-400",
      secondary: "bg-brand-100 text-brand-700",
      normal: "bg-gray-200",
    },
  },
  defaultVariants: { color: "normal" },
});

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: VariantProps<typeof button>["color"];
}

export function Button({ children, className, variant, ...props }: ButtonProps) {
  return (
    <button {...props} className={button({ color: variant, className })}>
      {children}
    </button>
  );
}
