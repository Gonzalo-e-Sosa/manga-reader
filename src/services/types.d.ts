interface BaseResponse {
  result: string
  response: string
}

export interface MangaResponse extends BaseResponse {
  data: MangaData
}

interface MangaData {
  id: string
  type: string
  attributes: MangaAttributes
  relationships: Relationship[]
}

interface MangaAttributes {
  title: Title
  altTitles: AltTitle[]
  description: Description
  isLocked: boolean
  links: Links
  originalLanguage: string
  lastVolume: string
  lastChapter: string
  publicationDemographic: string
  status: string
  year: number
  contentRating: string
  tags: Tag[]
  state: string
  chapterNumbersResetOnNewVolume: boolean
  createdAt: string
  updatedAt: string
  version: number
  availableTranslatedLanguages: any[]
  latestUploadedChapter: any
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
  relationships: Relationship[]
}

export interface Attributes2 {
  name: Name
  description: any[]
  group: string
  version: number
}

export interface Name {
  en: string
}

export interface Relationship {
  id: string
  type: string
}

export interface CoverResponse extends BaseResponse {
  data: {
    id: string
    type: string
    attributes: {
      description: string
      volume: string
      fileName: string
      locale: string
      createdAt: string
      updatedAt: string
      version: number
    }
    relationships: {
      manga: {
        id: string
        type: string
      }
      user: {
        id: string
        type: string
      }
    }
  }
}

export type ThumbnailSize = 256 | 512;

export interface ChapterResponse {
  result: string
  baseUrl: string
  chapter: Chapter
}

interface Chapter {
  hash: string
  data: string[]
  dataSaver: string[]
}