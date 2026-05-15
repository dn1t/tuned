import type { Item } from "../../types";
import { ItemPlayer } from "../common/item-player";

export function PreviewPane({ item }: { item: Item | null }) {
  return (
    <>
      <div className="ml-auto h-full py-4">
        <div className="h-full border-zinc-700 border-r" />
      </div>
      <section className="h-full w-1/2">{item && <ItemPlayer {...item} />}</section>
    </>
  );
}
