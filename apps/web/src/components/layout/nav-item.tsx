"use client";

import { useMemo } from "react";
import { cn } from "tailwind-variants";
import { Link, useRouter } from "waku";
import type { NavItemProps } from "./nav";

export function NavItem({ href, label }: NavItemProps) {
  const { path } = useRouter();
  const selected = useMemo(() => (href === "/" ? path === "/" : path.startsWith(href)), [path, href]);

  return (
    <li>
      <Link to={href} className={cn("inline-flex h-full items-center px-4 text-zinc-400", selected && "text-white")}>
        {label}
      </Link>
    </li>
  );
}
