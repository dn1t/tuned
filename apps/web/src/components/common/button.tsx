import type { ComponentPropsWithoutRef, FC, SVGProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
  base: "bg-black font-[650] text-sm rounded-xl px-4.5 py-2.5 leading-none cursor-pointer text-black flex items-center gap-x-2",
  variants: {
    color: {
      primary: "bg-brand-400",
      secondary: "bg-brand-950 text-brand-400",
      dangerous: "bg-red-950 text-red-400",
      normal: "bg-gray-200",
    },
    icon: {
      true: "pl-4.25 pr-4.5",
    },
  },
  defaultVariants: { color: "normal", icon: false },
});

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: VariantProps<typeof button>["color"];
  icon?: FC<SVGProps<SVGSVGElement>>;
}

export function Button({ children, className, variant, icon: Icon, type, ...props }: ButtonProps) {
  return (
    <button {...props} type={type ?? "button"} className={button({ color: variant, icon: !!Icon, className })}>
      {Icon && <Icon className="h-3.5 w-3.5" />}
      {children}
    </button>
  );
}
