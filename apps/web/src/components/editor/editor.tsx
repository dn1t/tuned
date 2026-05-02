"use client";

import { useEffect, useState } from "react";
import { Nav } from "./nav";
import { Sidebar } from "./sidebar";

export interface EditorItem {
  id: string;
  coverUrl: string | null;
  title: string;
  album: string;
  artist: string;
  releaseYear: number;
}

export function Editor() {
  const [items, setItems] = useState<EditorItem[]>([]);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    setItems([
      {
        id: crypto.randomUUID(),
        coverUrl: "https://picsum.photos/id/1027/1000",
        title: "Gold Rings (feat. Pusha T)",
        album: "$oul $old $eparately",
        artist: "Freddie Gibbs",
        releaseYear: 2022,
      },
    ]);
  }, []);

  return (
    <div className="flex h-screen max-h-screen flex-col">
      <Nav />
      <div className="flex h-full">
        <Sidebar itemsState={[items, setItems]} selectedState={[selected, setSelected]} />
        <div />
      </div>
    </div>
  );
}
