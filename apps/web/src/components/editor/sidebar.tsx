import { For } from "solid-js";
import type { SetStoreFunction, Store } from "solid-js/store";
import type { CupInfo, Item as ItemProps } from "~/routes/editor";

interface SidebarProps {
  info: [Store<CupInfo>, SetStoreFunction<CupInfo>];
}

export function Sidebar(props: SidebarProps) {
  const [info, setInfo] = props.info;

  return (
    <section class="w-56 shrink-0">
      <For each={info.items}>{(item) => <Item {...item} />}</For>
    </section>
  );
}

function Item(props: ItemProps) {
  return <div>Item</div>;
}
