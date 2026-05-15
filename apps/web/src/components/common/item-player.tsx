import { ImageIcon } from "@phosphor-icons/react";
import type { Item } from "../../types";

export function ItemPlayer({
  id,
  coverUrl,
  title,
  album,
  artists,
  featuringArtists,
  releaseYear,
  youtubeId,
  appleMusicId,
}: Item) {
  return (
    <>
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-clip">
        {coverUrl && (
          <>
            {/** biome-ignore lint/a11y/useAltText: background image */}
            <img src={coverUrl} className="absolute h-full w-full object-cover" />
            {/** biome-ignore lint/a11y/useAltText: background image */}
            <img
              src={coverUrl}
              className="filter-[url(#swirl)] absolute top-0 left-0 h-[150%] w-[150%] animate-[spin_300s_linear_infinite,pulse_10s_cubic-bezier(0.4,0,0.6,1)_infinite] object-cover"
            />
            <div className="absolute inset-0 bg-zinc-950/75 backdrop-blur-[128px] backdrop-brightness-125 backdrop-contrast-125 backdrop-saturate-200" />
          </>
        )}
        {youtubeId && (
          <div className="z-10 mb-6 aspect-video w-full max-w-xl items-stretch overflow-clip rounded-xl shadow-xl">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${youtubeId}`}
              title={`${title} - YouTube`}
            />
          </div>
        )}
        <div className="relative z-10 flex w-full max-w-xl gap-x-5 px-4">
          <div
            className="flex h-22 w-22 shrink-0 items-center justify-center rounded-xl bg-center bg-contain bg-zinc-900 bg-no-repeat shadow-xl"
            style={coverUrl ? { backgroundImage: `url(${coverUrl})` } : undefined}
          >
            {!coverUrl && <ImageIcon className="text-zinc-400" size={24} />}
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="mt-0.75 font-bold text-lg leading-none">{title}</h3>
            <p className="mt-1.5 font-semibold text-sm text-zinc-300 leading-none">
              {artists} {featuringArtists?.trim() && <span className="text-zinc-400">feat. {featuringArtists}</span>}
            </p>
            <p className="mt-1.5 font-semibold text-sm text-zinc-500 leading-none">
              {album} ({releaseYear})
            </p>
          </div>
        </div>
      </div>
      <svg className="absolute h-0 w-0">
        <filter id="swirl">
          <feTurbulence baseFrequency="0.010" numOctaves="2" result="wrap" type="fractalNoise" />
          <feDisplacementMap in="SourceGraphic" in2="wrap" scale="300" xChannelSelector="R" yChannelSelector="B" />
        </filter>
      </svg>
    </>
  );
}
