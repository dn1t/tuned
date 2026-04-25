import { createScheduled, debounce } from "@solid-primitives/scheduled";
import { createAsync, query } from "@solidjs/router";
import { searchSong } from "genius-lyrics-api";
import { createSignal, For, Show } from "solid-js";

const search = query(async (q: string) => {
  "use server";
  const r = await searchSong({
    apiKey: process.env.GENIUS_ACCESS_TOKEN!,
    title: q,
    artist: " ",
  });
  console.log(r);
  return r;
}, "search");

export function GeniusModal() {
  const scheduled = createScheduled((fn) => debounce(fn, 250));
  const [query, setQuery] = createSignal("");
  const result = createAsync<Awaited<ReturnType<typeof search>>>(async (prev) => {
    const q = query();
    if (q.trim() === "") return null;
    return scheduled() ? search(q) : (prev ?? null);
  });

  return (
    <div class="max-h-7/12 overflow-auto bg-white">
      <input value={query()} onInput={(e) => setQuery(e.currentTarget.value)} />
      <Show when={(result()?.length ?? 0) > 0}>
        <For each={result()!}>
          {(song) => {
            return <div>{song.title}</div>;
          }}
        </For>
      </Show>
    </div>
  );
}
