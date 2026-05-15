import { getEnv } from "waku";
import { Editor as EditorInner } from "../components/editor/editor";
import type { GeniusSongInfo, Item } from "../types";

export type SearchGenius = (query: string) => Promise<Item[]>;
export type FetchSongInfo = (id: string) => Promise<GeniusSongInfo>;

function joinArtists(artists: string[] | undefined) {
  if (!artists || artists.length === 0) return "";
  const lastArtist = artists.pop();
  return artists.length > 0 ? `${artists.join(", ")} & ${lastArtist}` : lastArtist;
}

export default async function Editor() {
  async function searchGenius(query: string) {
    "use server";

    const accessToken = getEnv("GENIUS_ACCESS_TOKEN")!;
    const res = await fetch(
      `https://api.genius.com/search?q=${encodeURIComponent(
        query
          .replace(/ *\([^)]*\) */g, "")
          .replace(/ *\[[^\]]*]/, "")
          .replace(/feat.|ft./g, "")
          .replace(/\s+/g, " ")
          .trim(),
      )}`,
      { headers: { Authorization: `Bearer ${accessToken}` } },
    );
    if (!res.ok) return [];
    const data = await res.json();

    return data.response.hits.map(
      (hit: {
        result: {
          id: number;
          title: string;
          featured_artists: { name: string }[];
          song_art_image_url: string;
          primary_artists?: { name: string }[];
          release_date_components?: { year?: number };
        };
      }) => {
        const featuringArtists = joinArtists(
          hit.result.featured_artists?.map((artist) => artist.name).filter((name) => name),
        );
        const artists = joinArtists(hit.result.primary_artists?.map((artist) => artist.name).filter((name) => name));

        return {
          id: hit.result.id.toString(),
          coverUrl: hit.result.song_art_image_url,
          title: hit.result.title,
          album: "",
          artists: artists ?? "",
          featuringArtists: featuringArtists ?? null,
          releaseYear: hit.result.release_date_components?.year?.toString().padStart(4, "0") ?? "0000",
        } satisfies Item;
      },
    );
  }

  async function fetchSongInfo(id: string) {
    "use server";

    const accessToken = getEnv("GENIUS_ACCESS_TOKEN")!;
    const res = await fetch(`https://api.genius.com/songs/${id}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    if (!res.ok) return { album: "", appleMusicId: null, youtubeId: null };
    const data = await res.json();

    const { album, apple_music_id: appleMusicId, media } = data.response.song;
    const youtubeUrl = media.find((m: { provider: string }) => m.provider === "youtube")?.url;

    return {
      album: album?.name ?? "",
      appleMusicId,
      youtubeId: youtubeUrl ? new URL(youtubeUrl).searchParams.get("v") : null,
    } satisfies GeniusSongInfo;
  }

  return <EditorInner searchGenius={searchGenius} fetchSongInfo={fetchSongInfo} />;
}

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
