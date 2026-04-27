"use client";
import { cn } from "tailwind-variants";
import { Link, useRouter } from "waku";
import type { InferredPaths } from "../../types";
import { Button } from "../common/button";
import { Logo } from "../common/logo";

export interface NavItemProps {
  href: InferredPaths;
  label: string;
}

const items: NavItemProps[] = [
  { href: "/", label: "홈" },
  { href: "/editor", label: "만들기" },
];

export function Nav() {
  const { path } = useRouter();

  if (path === "/editor") return;

  return (
    <nav className="px-4">
      <div className="mx-auto flex h-16 max-w-4xl items-center pb-px">
        <Link to="/" className="relative pr-3.25 font-display font-semibold text-[22px]">
          tuned
          <Logo className="absolute top-1.5 right-0 h-2.5 w-2.5 fill-brand-300" />
        </Link>
        <ul className="ml-18 flex h-full items-stretch gap-x-2 font-[550]">
          {items.map((item) => {
            const selected = item.href === "/" ? path === "/" : path.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={cn("inline-flex h-full items-center px-4 text-zinc-400", selected && "text-white")}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="ml-auto">
          <Button variant="primary">로그인</Button>
        </div>
      </div>
    </nav>
  );
}
