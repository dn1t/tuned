"use client";

import { useEffect, useMemo, useState } from "react";
import type { FetchSongInfo, SearchGenius } from "../../pages/editor";
import type { Item } from "../../types";
import { Nav } from "./nav";
import { PreviewPane } from "./preview-pane";
import { Sidebar } from "./sidebar";

export function Editor({ searchGenius, fetchSongInfo }: { searchGenius: SearchGenius; fetchSongInfo: FetchSongInfo }) {
  const [items, setItems] = useState<Item[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const selectedItem = useMemo(() => items.find((item) => item.id === selected) ?? null, [items, selected]);

  useEffect(() => {
    setItems([
      {
        id: crypto.randomUUID(),
        coverUrl: "https://images.genius.com/ef0d7682dd671122018d59f0f53ebfaa.1000x1000x1.png",
        title: "Couldn't Be Done",
        album: "$oul $old $eparately",
        artists: "Freddie Gibbs",
        featuringArtists: "Kelly Price",
        releaseYear: "2022",
        youtubeId: "L8g3HiqIfBU",
        appleMusicId: "1642690127",
      },
    ]);
  }, []);

  return (
    <div className="flex h-screen max-h-screen flex-col">
      <Nav />
      <div className="flex h-full">
        <Sidebar
          itemsState={[items, setItems]}
          selectedState={[selected, setSelected]}
          searchGenius={searchGenius}
          fetchSongInfo={fetchSongInfo}
        />
        <PreviewPane item={selectedItem} />
      </div>
    </div>
  );
}
