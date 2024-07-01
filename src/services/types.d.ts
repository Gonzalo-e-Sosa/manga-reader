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
  includes?: {
    manga?: boolean
    coverArt?: boolean
    author?: boolean
    artist?: boolean
    tag?: boolean
    creator?: boolean
  }
  hasAvailableChapters?: HasAvailableChapters
  group?: string
}

type Status = "ongoing" | "completed" | "hiatus" | "cancelled";

type PublicationDemographic = "shounen" | "shoujo" | "josei" | "seinen" | "none";

type ContentRating = 'safe' | 'suggestive' | 'erotica'; // Default value -> ["safe", "suggestive", "erotica"]

type HasAvailableChapters = "0" | "1" | "true" | "false";