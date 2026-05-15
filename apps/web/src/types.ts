import type { RouteConfig } from "waku/router";

type AllowTrailingSlash<Path extends string> = Path extends "/" ? Path : Path | `${Path}/`;
type AllowPathDecorators<Path extends string> = Path extends unknown
  ?
      | AllowTrailingSlash<Path>
      | `${AllowTrailingSlash<Path>}?${string}`
      | `${AllowTrailingSlash<Path>}#${string}`
      | `?${string}`
      | `#${string}`
  : never;
export type InferredPaths = RouteConfig extends {
  paths: infer UserPaths extends string;
}
  ? AllowPathDecorators<UserPaths>
  : string;

export interface Item {
  id: string;
  coverUrl: string | null;
  title: string;
  album: string;
  artists: string;
  featuringArtists: string | null;
  releaseYear: string;
  appleMusicId: string | null;
  youtubeId: string | null;
}

export interface GeniusSongInfo {
  album: string;
  appleMusicId: string | null;
  youtubeId: string | null;
}
