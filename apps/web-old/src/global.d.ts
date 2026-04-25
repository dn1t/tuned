/// <reference types="@solidjs/start/env" />

declare module "genius-lyrics-api" {
  interface Options {
    title: string;
    artist: string;
    apiKey: string;
    optimizeQuery?: boolean;
    authHeader?: boolean;
  }

  function searchSong(options: Options): Promise<{
    id: number;
    url: string;
    title: string;
    albumArt: string;
  }[] | null>;
}
