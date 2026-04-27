"use client";

import { PlusIcon, SortAscendingIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { Button } from "../common/button";
import { Select } from "../common/select";

enum Sort {
  Added = "added",
  Title = "title",
  Album = "album",
  Artist = "artist",
}

export function Sidebar() {
  const [sort, setSort] = useState<Sort>(Sort.Added);

  return (
    <>
      <section className="flex h-full w-72 flex-col px-3">
        <div className="flex items-end pl-1">
          <Button className="flex w-max items-center gap-1 rounded-lg py-1.5 pr-3.5 pl-2.5 text-xs">
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
      </section>
      <div className="h-full py-4">
        <div className="h-full border-zinc-700 border-r" />
      </div>
    </>
  );
}
