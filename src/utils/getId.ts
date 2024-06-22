import type { MangaData } from "@/services/types";

export const getCoverArtId = (data: MangaData) => {
  const coverArtId = data.relationships.find((r) => r.type === "cover_art")?.id ?? "";
  return coverArtId;
}
