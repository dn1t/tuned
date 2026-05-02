import { getEnv } from "waku";
import { Editor as EditorInner, type EditorItem } from "../components/editor/editor";

export type SearchGenius = (query: string) => Promise<EditorItem[]>;

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
          artists: artists ?? "",
          featuringArtists: featuringArtists ?? null,
          releaseYear: hit.result.release_date_components?.year?.toString().padStart(4, "0") ?? "0000",
        } satisfies EditorItem;
      },
    );
  }

  return <EditorInner searchGenius={searchGenius} />;
}

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
