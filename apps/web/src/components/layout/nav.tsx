import { A, useLocation } from "@solidjs/router";
import { Logo } from "../common/logo";
import { For } from "solid-js";
import { cn } from "tailwind-variants";

interface NavItemProps {
  href: string;
  label: string;
}

const items: NavItemProps[] = [
  { href: "/", label: "홈" },
  { href: "/editor", label: "만들기" },
];

export function Nav() {
  return (
    <nav class="h-18 border-b border-b-zinc-100 px-4">
      <div class="mx-auto flex h-full max-w-4xl items-center px-4">
        <A href="/" class="flex items-center gap-x-2 font-bold font-display text-[22px]">
          <Logo class="h-6 w-6" />
          tuned
        </A>
        <ul class="mt-px ml-18 flex items-center gap-x-2 font-[550] text-zinc-600">
          <For each={items}>{(item) => <NavItem {...item} />}</For>
        </ul>
      </div>
    </nav>
  );
}

function NavItem(props: NavItemProps) {
  const location = useLocation();
  const selected = () => (props.href === "/" ? location.pathname === "/" : location.pathname.startsWith(props.href));

  return (
    <li>
      <A
        href={props.href}
        class={cn(
          "rounded-lg px-3.5 py-1.5 leading-none transition-colors focus:outline-none focus:ring-2 focus:ring-brand-400",
          selected()
            ? "bg-brand-100 text-brand-700 hover:bg-brand-200 active:bg-brand-300"
            : "hover:bg-zinc-100 active:bg-zinc-200",
        )}
      >
        {props.label}
      </A>
    </li>
  );
}
