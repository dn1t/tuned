import { Input } from "../common/input";
import { Logo } from "../common/logo";

export function Nav() {
  return (
    <nav className="px-4">
      <div className="flex h-16 items-center px-1.5 pb-px">
        <div className="relative pr-3.25 font-display font-semibold text-[22px]">
          editor
          <Logo className="absolute top-1.5 right-0 h-2.5 w-2.5 fill-brand-300" />
        </div>
        <Input className="ml-6 w-60" placeholder="월드컵 제목" />
        <div className="ml-auto"></div>
      </div>
    </nav>
  );
}
