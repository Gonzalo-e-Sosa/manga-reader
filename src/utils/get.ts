import { ENDPOINTS } from "@/consts";
import type { CoverData } from "@/types/cover_art";
import type { MangaAttributes, MangaData } from "@/types/manga";
import type { Relationship } from "@/types/relationship";

export type ThumbnailSize = 256 | 512;

export function getDescription(attributes: MangaAttributes | undefined) {
  if (attributes === undefined || attributes.description === undefined || attributes.description.en === undefined) return "No description";
  return attributes.description.en;
}

export const getCoverArtId = (data: { relationships: Relationship<"cover_art">[] }) => {
  const coverArtId = data.relationships.find((r: { type: string; }) => r.type === "cover_art")?.id ?? "";
  return coverArtId;
}

export const getCoverArtFilename = (data: CoverData | MangaData): string => {
  if (data.type === "cover_art") {
    return data.attributes.fileName;
  }
  if (data.type === "manga") {
    const relationship = data.relationships.find((r: { type: string; }) => r.type === "cover_art");
    if (relationship && relationship.type === "cover_art" && relationship.attributes) {
      const attributes = relationship.attributes as CoverData["attributes"];
      return attributes.fileName;
    }
  }
  return "#";
}

export const getCoverArtImage = (mangaId: string, coverArtFilename: string, thumbnailSize?: ThumbnailSize) => {
  const width = thumbnailSize ? `.${thumbnailSize}.jpg` : '';

  return `${ENDPOINTS.COVER_ART_IMAGE}/${mangaId}/${coverArtFilename}${width}`;
}
