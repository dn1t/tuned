import { type Component, type ComponentProps, Show } from "solid-js";
import { cn } from "tailwind-variants";

interface ButtonProps extends ComponentProps<"button"> {
  icon?: Component<{ class?: string }>;
}

export function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      class={cn(
        "flex cursor-pointer items-center rounded-lg bg-zinc-100 px-3 py-2.5 font-medium leading-none hover:bg-zinc-200",
        props.class,
      )}
    >
      <Show when={props.icon}>
        {(icon) => {
          const Icon = icon();
          return <Icon class="mr-1.5 h-4 w-4" />;
        }}
      </Show>
      {props.children}
    </button>
  );
}
