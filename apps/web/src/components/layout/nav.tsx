import { A } from "@solidjs/router";
import { Logo } from "../common/logo";

export function Nav() {
  return (
    <nav class="h-18 px-4">
      <div class="mx-auto flex h-full max-w-4xl items-center px-4">
        <A href="/" class="flex items-center gap-x-2 font-bold font-display text-2xl">
          <Logo class="h-7 w-7" />
          tuned
        </A>
      </div>
    </nav>
  );
}
