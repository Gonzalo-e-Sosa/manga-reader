import { ENDPOINTS } from "@/consts";
import type { MangaData, CoverData } from "@/types/response";

export type ThumbnailSize = 256 | 512;

type Attributes = Pick<MangaData, "attributes">["attributes"];
type Relationships = Pick<MangaData, "relationships">["relationships"];

export function getDescription(attributes: Attributes | undefined) {
  if (attributes === undefined || attributes.description === undefined || attributes.description.en === undefined) return "No description";
  return attributes.description.en;
}

export function getCoverArtId(relationships: Relationships) {
  const coverArtId = relationships.find((r) => r.type === "cover_art")?.id ?? "";
  return coverArtId;
}

export function getCoverArtFilename(data: CoverData | MangaData): string {
  if (data.type === "cover_art") {
    return data.attributes.fileName;
  }
  if (data.type === "manga") {
    const relationship = data.relationships.find((r: { type: string; }) => r.type === "cover_art");
    if (relationship && relationship.type === "cover_art" && relationship.attributes) {
      if (relationship.attributes) {
        const attributes = relationship.attributes as CoverData["attributes"];
        return attributes.fileName;
      }
    }
  }
  return "#";
}

export function getCoverArtImage(mangaId: string, coverArtFilename: string, thumbnailSize?: ThumbnailSize) {
  const width = thumbnailSize ? `.${thumbnailSize}.jpg` : '';

  return `${ENDPOINTS.COVER_ART_IMAGE}/${mangaId}/${coverArtFilename}${width}`;
}