export interface ChapterAttributes {
  hash: string
  data: string[]
  dataSaver: string[]
}

export interface ChapterFeedAttributes {
  volume: string
  chapter: string
  title?: string
  translatedLanguage: string
  externalUrl?: string
  publishAt: string
  readableAt: string
  createdAt: string
  updatedAt: string
  pages: number
  version: number
}

export interface ChapterFeedRelationship {
  id: string
  type: "author" | "artist" | "cover_art"
  attributes?: AuthorAttributes | ArtistAttributes | CoverAttributes
}