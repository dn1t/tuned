"use client";

import { useEffect, useState } from "react";
import type { SearchGenius } from "../../pages/editor";
import { Nav } from "./nav";
import { Sidebar } from "./sidebar";

export interface EditorItem {
  id: string;
  coverUrl: string | null;
  title: string;
  artists: string;
  featuringArtists: string | null;
  releaseYear: string;
}

export function Editor({ searchGenius }: { searchGenius: SearchGenius }) {
  const [items, setItems] = useState<EditorItem[]>([]);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    setItems([
      {
        id: crypto.randomUUID(),
        coverUrl: "https://picsum.photos/id/1027/1000",
        title: "Palmolive",
        artists: "Freddie Gibbs & Madlib",
        featuringArtists: "Pusha T & Killer Mike",
        releaseYear: "2019",
      },
    ]);
  }, []);

  return (
    <div className="flex h-screen max-h-screen flex-col">
      <Nav />
      <div className="flex h-full">
        <Sidebar itemsState={[items, setItems]} selectedState={[selected, setSelected]} searchGenius={searchGenius} />
        <div />
      </div>
    </div>
  );
}
