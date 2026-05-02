import { ImageIcon } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import type { SearchGenius } from "../../pages/editor";
import { Button } from "../common/button";
import { GeniusLogo } from "../common/genius";
import { Input } from "../common/input";
import { Modal } from "../common/modal";
import type { EditorItem } from "./editor";
import { cn } from "tailwind-variants";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

interface AddItemModalProps {
  openState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  addItem: (item: EditorItem) => void;
  searchGenius: SearchGenius;
}

export function AddItemModal({ openState, addItem, searchGenius }: AddItemModalProps) {
  const ref = useRef<HTMLFormElement>(null);
  const [, setOpen] = openState;
  const [page, setPage] = useState<"form" | "search">("form");
  const [coverUrl, setCoverUrl] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<EditorItem[]>([]);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    if (page !== "search") return;
    const timer = setTimeout(() => searchGenius(query).then(setSearchResults), 500);
    return () => clearTimeout(timer);
  }, [query, page, searchGenius]);

  return (
    <Modal className="w-full max-w-md p-4" openState={openState}>
      <h2 className="px-1.75 font-bold text-lg text-white">노래 {page !== "search" ? "추가" : "검색"}</h2>
      <form
        ref={ref}
        className={cn("mt-3 flex flex-col gap-y-2.5", page === "search" && "hidden")}
        onReset={() => setOpen(false)}
        onSubmit={(e) => {
          e.preventDefault();
          addItem({
            id: crypto.randomUUID(),
            coverUrl,
            title: e.currentTarget.songTitle.value,
            artists: e.currentTarget.artists.value,
            featuringArtists: e.currentTarget.featuringArtists.value ?? null,
            releaseYear: Number.parseInt(e.currentTarget.releaseYear.value, 10).toString().padStart(4, "0"),
          });
          setOpen(false);
          setCoverUrl(null);
          e.currentTarget.reset();
        }}
      >
        <div className="grid grid-cols-2 gap-x-2.5">
          <label className="flex flex-col gap-y-0.75">
            <span className="px-1 text-xs text-zinc-300">아티스트</span>
            <Input name="artists" placeholder="Freddie Gibbs & Madlib" required autoComplete="off" />
          </label>
          <label className="flex flex-col gap-y-0.75">
            <span className="px-1 text-xs text-zinc-300">피처링 아티스트</span>
            <Input name="featuringArtists" placeholder="Pusha T & Killer Mike" autoComplete="off" />
          </label>
        </div>
        <label className="flex flex-col gap-y-0.75">
          <span className="px-1 text-xs text-zinc-300">제목</span>
          <Input name="songTitle" placeholder="Palmolive" required autoComplete="off" />
        </label>
        <div className="mt-2.5 flex gap-x-2.5">
          <div
            className="flex h-14.5 w-14.5 shrink-0 items-center justify-center rounded-xl border border-zinc-700 bg-center bg-contain bg-zinc-900 bg-no-repeat"
            style={coverUrl ? { backgroundImage: `url(${coverUrl})` } : undefined}
          >
            {!coverUrl && <ImageIcon className="text-zinc-400" size={24} />}
          </div>
          <label className="flex w-[calc(100%-80px-58px-20px)] flex-col gap-y-0.75">
            <span className="px-1 text-xs text-zinc-300">앨범 커버 URL</span>
            <Input
              placeholder="https://picsum.photos/1000"
              value={coverUrl ?? ""}
              onChange={(e) => setCoverUrl(e.target.value)}
              autoComplete="off"
            />
          </label>
          <label className="flex w-20 flex-col gap-y-0.75">
            <span className="px-1 text-xs text-zinc-300">발매 연도</span>
            <Input
              name="releaseYear"
              type="number"
              placeholder="2022"
              className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              required
              autoComplete="off"
            />
          </label>
        </div>
        <div className="mt-2 flex items-center">
          <Button
            type="button"
            variant="secondary"
            icon={GeniusLogo}
            onClick={() => {
              setSearchResults([]);
              setQuery(
                `${ref.current?.artists.value.trim() ?? ""} ${ref.current?.songTitle.value.trim() ?? ""}`.trim(),
              );
              setPage("search");
            }}
          >
            Genius에서 검색
          </Button>
          <div className="ml-auto flex items-center gap-x-2">
            <Button type="reset" variant="secondary">
              취소
            </Button>
            <Button type="submit" variant="primary">
              추가
            </Button>
          </div>
        </div>
      </form>
      {page === "search" && (
        <div className="mt-1.5 flex flex-col">
          <Input
            className="mb-2.5"
            placeholder="freddie gibbs madlib palmolive"
            required
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
          />
          {scrollTop > 0 && (
            <div className="relative">
              <div className="absolute z-10 h-3.75 w-full bg-linear-to-b from-zinc-950 to-transparent" />
            </div>
          )}
          <OverlayScrollbarsComponent
            className="h-64"
            events={{ scroll: (e) => setScrollTop(e.elements().viewport.scrollTop) }}
            element="ul"
            defer
          >
            {searchResults.length === 0 && (
              <div className="flex h-full items-center justify-center">
                <span className="font-medium text-sm text-zinc-400">검색어를 입력하세요</span>
              </div>
            )}
            {searchResults.map((item) => {
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    className="flex w-full cursor-pointer items-center gap-x-3 rounded-[11px] border border-transparent p-1.75"
                    onClick={() => {
                      if (!ref.current) return;
                      setCoverUrl(item.coverUrl);
                      ref.current.artists.value = item.artists;
                      ref.current.featuringArtists.value = item.featuringArtists;
                      ref.current.songTitle.value = item.title;
                      ref.current.releaseYear.value = item.releaseYear.toString().padStart(4, "0");
                      setPage("form");
                    }}
                  >
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-zinc-700 bg-center bg-contain bg-zinc-900 bg-no-repeat"
                      style={item.coverUrl ? { backgroundImage: `url(${item.coverUrl})` } : undefined}
                    >
                      {!item.coverUrl && <ImageIcon className="text-zinc-400" size={24} />}
                    </div>
                    <div className="flex min-w-0 flex-col items-start">
                      <span className="flex w-full">
                        <span className="mt-px overflow-hidden text-ellipsis whitespace-nowrap text-start font-semibold text-sm text-zinc-200 leading-none">
                          {item.title}
                        </span>
                        <span className="ml-1 w-max text-xs text-zinc-400">({item.releaseYear})</span>
                      </span>
                      <span className="mt-0.5 w-full overflow-hidden text-ellipsis whitespace-nowrap text-start text-xs text-zinc-300 leading-none">
                        {item.artists}
                      </span>
                      {item.featuringArtists && (
                        <span className="mt-0.5 w-full overflow-hidden text-ellipsis whitespace-nowrap text-start text-xs text-zinc-400 leading-none">
                          feat. {item.featuringArtists}
                        </span>
                      )}
                    </div>
                  </button>
                </li>
              );
            })}
          </OverlayScrollbarsComponent>
          <div className="relative">
            <div className="absolute bottom-0 z-10 h-3.75 w-full bg-linear-to-t from-zinc-950 to-transparent" />
          </div>
          <Button type="button" variant="secondary" className="mt-2 w-max" onClick={() => setPage("form")}>
            직접 입력
          </Button>
        </div>
      )}
    </Modal>
  );
}
