"use client";

import { ImageIcon, PlusIcon, SortAscendingIcon } from "@phosphor-icons/react";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { useState } from "react";
import { cn } from "tailwind-variants";
import { Button } from "../common/button";
import { Select } from "../common/select";
import { AddItemModal } from "./add-item-modal";
import type { EditorItem } from "./editor";

enum Sort {
  Added = "added",
  Title = "title",
  Album = "album",
  Artist = "artist",
}

export function Sidebar({
  itemsState,
  selectedState,
}: {
  itemsState: [EditorItem[], React.Dispatch<React.SetStateAction<EditorItem[]>>];
  selectedState: [string | null, React.Dispatch<React.SetStateAction<string | null>>];
}) {
  const [sort, setSort] = useState<Sort>(Sort.Added);
  const [items, setItems] = itemsState;
  const [selected, setSelected] = selectedState;
  const [scrollTop, setScrollTop] = useState(0);
  const [showModal, setShowModal] = useState(false);

  function addItem(item: EditorItem) {
    setItems((prev) => [...prev, item]);
  }

  function removeItem(id: string) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  function updateItem(id: string, newItem: Partial<EditorItem>) {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, ...newItem } : item)));
  }

  return (
    <>
      <section className="flex h-full w-72 flex-col px-2">
        <div className="flex items-end border-b-4 border-b-transparent pr-1.25 pl-2.25">
          <AddItemModal openState={[showModal, setShowModal]} addItem={addItem} />
          <Button
            onClick={() => setShowModal(true)}
            className="flex w-max items-center gap-1 rounded-lg py-1.5 pr-3.25 pl-2.25 text-xs"
          >
            <PlusIcon weight="bold" size={12} />
            추가
          </Button>
          <div className="ml-auto flex items-center gap-1">
            <SortAscendingIcon className="text-zinc-400" size={16} />
            <Select className="w-18 text-xs" value={sort} onChange={(e) => setSort(e.target.value as Sort)}>
              <option value={Sort.Added}>추가됨</option>
              <option value={Sort.Title}>제목</option>
              <option value={Sort.Album}>앨범</option>
              <option value={Sort.Artist}>아티스트</option>
            </Select>
          </div>
        </div>
        {scrollTop > 0 && (
          <div className="relative">
            <div className="absolute z-10 h-3.75 w-full bg-linear-to-b from-black to-transparent" />
          </div>
        )}
        <OverlayScrollbarsComponent
          className="flex h-[calc(100vh-64px-32px)] flex-col px-px py-2"
          events={{ scroll: (e) => setScrollTop(e.elements().viewport.scrollTop) }}
          defer
        >
          {items.map((item) => {
            return (
              <button
                type="button"
                className={cn(
                  "flex w-full cursor-pointer items-center gap-x-3 rounded-[11px] border border-transparent p-1.75",
                  selected === item.id && "border-brand-900 bg-brand-950",
                )}
                onClick={() => setSelected(item.id)}
                key={item.id}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-lg border border-zinc-700 bg-center bg-contain bg-zinc-900 bg-no-repeat"
                  style={item.coverUrl ? { backgroundImage: `url(${item.coverUrl})` } : undefined}
                >
                  {!item.coverUrl && <ImageIcon className="text-zinc-400" size={24} />}
                </div>
                <div className="flex flex-col items-start">
                  <span className="mt-px font-semibold text-sm text-zinc-200 leading-none">{item.title}</span>
                  <span className="mt-0.5 text-start text-xs text-zinc-300 leading-none">{item.artist}</span>
                  <span className="mt-0.5 text-start text-xs text-zinc-400 leading-none">
                    {item.album} ({item.releaseYear})
                  </span>
                </div>
              </button>
            );
          })}
        </OverlayScrollbarsComponent>
        <div className="relative">
          <div className="absolute bottom-0 z-10 h-3.75 w-full bg-linear-to-t from-black to-transparent" />
        </div>
      </section>
      <div className="h-full py-4">
        <div className="h-full border-zinc-700 border-r" />
      </div>
    </>
  );
}
