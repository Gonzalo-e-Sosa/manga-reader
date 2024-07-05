import type { AuthorAttributes } from "./author"

export type Status = "ongoing" | "completed" | "hiatus" | "cancelled";

export type ContentRating = 'safe' | 'suggestive' | 'erotica'; // Default value -> ["safe", "suggestive", "erotica"]

export interface MangaAttributes {
  title: Title
  altTitles: AltTitle[]
  description: Description
  isLocked: boolean
  links: Links
  originalLanguage: string
  lastVolume: string
  lastChapter: string
  publicationDemographic: string
  status: Status
  year: number
  contentRating: ContentRating
  tags: Tag[]
  state: string
  chapterNumbersResetOnNewVolume: boolean
  createdAt: string
  updatedAt: string
  version: number
  availableTranslatedLanguages: string[]
  latestUploadedChapter: string
}

export interface MangaRelationship {
  id: string
  type: "author" | "artist" | "cover_art"
  attributes?: AuthorAttributes | ArtistAttributes | CoverAttributes | Array<AuthorAttributes | ArtistAttributes | CoverAttributes>
}

export interface Title {
  en: string
}

export interface AltTitle {
  "ja-ro"?: string
  ja?: string
}

export interface Description {
  en: string
}

export interface Links {
  mu: string
}

export interface Tag {
  id: string
  type: string
  attributes: Attributes2
  relationships: unknown[]
}

export interface Attributes2 {
  name: Name
  description: unknown[]
  group: string
  version: number
}

export interface Name {
  en: string
}