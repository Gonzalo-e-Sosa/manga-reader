import type { ContentRating, Status } from "@/types/manga";

interface Options {
  manga?: "manga"
  coverArt?: "cover_art"
  author?: "author"
  artist?: "artist"
  tag?: "tag"
  creator?: "creator"
}

export interface MangaOptions extends Options { }

export interface MangaListOptions {
  limit?: number
  offset?: number
  title?: string
  authorOrArtist?: string
  authors?: Array<string>
  artist?: Array<string>
  year?: Date //release year
  includedTags?: Array<string>
  includedTagsMode?: string // 'AND' | 'OR' -> Default: OR
  excludedTags?: Array<string>
  excludedTagsMode?: string // 'AND' | 'OR' -> Default: OR
  status?: Status
  originalLanguage?: Array<string>
  excludedOriginalLanguage?: Array<string>
  availableTranslatedLanguage?: Array<string>
  publicationDemographic?: PublicationDemographic
  ids?: Array<string> // limited to 100 per request
  contentRating?: ContentRating
  createdAtSince?: Date
  updatedAtSince?: Date
  order?: string // Default value : OrderedMap { "latestUploadedChapter": "desc" }
  includes?: Options
  hasAvailableChapters?: HasAvailableChapters
  group?: string
}


export type PublicationDemographic = "shounen" | "shoujo" | "josei" | "seinen" | "none";

export type HasAvailableChapters = "0" | "1" | "true" | "false";
