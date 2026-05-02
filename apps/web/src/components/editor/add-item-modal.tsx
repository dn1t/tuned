import { ImageIcon } from "@phosphor-icons/react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "../common/button";
import { Input } from "../common/input";
import { Modal } from "../common/modal";
import type { EditorItem } from "./editor";

interface AddItemModalProps {
  openState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  addItem: (item: EditorItem) => void;
}

export function AddItemModal({ openState, addItem }: AddItemModalProps) {
  const [, setOpen] = openState;
  const [coverUrl, setCoverUrl] = useState<string | null>(null);

  return (
    <Modal className="w-full max-w-md p-4" openState={openState}>
      <h2 className="px-1.75 font-bold text-lg text-white">노래 추가</h2>
      <form
        className="mt-3 flex flex-col gap-y-2.5"
        onReset={() => setOpen(false)}
        onSubmit={(e) => {
          e.preventDefault();
          addItem({
            id: crypto.randomUUID(),
            coverUrl,
            title: e.currentTarget.songTitle.value,
            album: e.currentTarget.album.value,
            artist: e.currentTarget.artist.value,
            releaseYear: Number.parseInt(e.currentTarget.releaseYear.value, 10),
          });
          setOpen(false);
          setCoverUrl(null);
          e.currentTarget.reset();
        }}
      >
        <div className="flex gap-x-2.5">
          <label className="flex w-2/5 flex-col gap-y-0.75">
            <span className="px-1 text-xs text-zinc-300">아티스트</span>
            <Input name="artist" placeholder="Freddie Gibbs" required />
          </label>
          <label className="flex w-[calc(3/5*100%-10px)] flex-col gap-y-0.75">
            <span className="px-1 text-xs text-zinc-300">앨범</span>
            <Input name="album" placeholder="$oul $old $eparately" required />
          </label>
        </div>
        <label className="flex flex-col gap-y-0.75">
          <span className="px-1 text-xs text-zinc-300">제목</span>
          <Input name="songTitle" placeholder="Gold Rings (feat. Pusha T)" required />
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
            />
          </label>
        </div>
        <div className="mt-2 ml-auto flex items-center gap-x-2">
          <Button type="reset" variant="secondary">
            취소
          </Button>
          <Button type="submit" variant="primary">
            추가
          </Button>
        </div>
      </form>
    </Modal>
  );
}
