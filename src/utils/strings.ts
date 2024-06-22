import type { MangaAttributes } from "@/services/types";

export function getDescription(attributes: MangaAttributes | undefined) {
  if (attributes === undefined) return "No description";
  return attributes.description.en;
}

export function isContentRating(value: string) {
  return (value === "safe" || value === "suggestive" || value === "erotica" || value === "pornographic");
}