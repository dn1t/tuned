"use client";

import { useState } from "react";
import { Nav } from "./nav";
import { Sidebar } from "./sidebar";

export interface EditorItem {
  id: string;
  coverUrl?: string;
  title: string;
  album: string;
  artist: string;
}

export function Editor() {
  const [items, setItems] = useState<EditorItem[]>([]);
  const [selected, setSelected] = useState<string | null>(null);

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
