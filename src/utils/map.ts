import type { MangaData } from "@/types/manga";
import { getCoverArtFilename, getDescription } from "./get";

export interface MangaMappedData {
  id: string
  type: string
  title: string
  description: string
  tags: string[]
  year: number
  contentRating: string
  status: string
  isLocked: boolean
  lastVolume: string
  lastChapter: string
  originalLanguage: string
  publicationDemographic: string
  createdAt: string
  updatedAt: string
  version: number
  availableTranslatedLanguages: string[]
  latestUploadedChapter: string
  relationships: object[]
}

export function mapMangaDataSingle(data: MangaData): MangaMappedData {
  return {
    id: data.id,
    type: data.type,
    title: data.attributes.title.en,
    description: getDescription(data.attributes),
    tags: data.attributes.tags.map((tag) => tag.attributes.name.en),
    year: data.attributes.year,
    contentRating: data.attributes.contentRating,
    status: data.attributes.status,
    isLocked: data.attributes.isLocked,
    lastVolume: data.attributes.lastVolume,
    lastChapter: data.attributes.lastChapter,
    originalLanguage: data.attributes.originalLanguage,
    publicationDemographic: data.attributes.publicationDemographic,
    createdAt: data.attributes.createdAt,
    updatedAt: data.attributes.updatedAt,
    version: data.attributes.version,
    availableTranslatedLanguages: data.attributes.availableTranslatedLanguages,
    latestUploadedChapter: data.attributes.latestUploadedChapter,
    relationships: data.relationships
  }
}

export function mapMangaData(data: MangaData[]): MangaMappedData[] {
  return data.map((manga) => {
    return {
      id: manga.id,
      type: manga.type,
      title: manga.attributes.title.en,
      description: getDescription(manga.attributes),
      tags: manga.attributes.tags.map((tag) => tag.attributes.name.en),
      year: manga.attributes.year,
      contentRating: manga.attributes.contentRating,
      status: manga.attributes.status,
      isLocked: manga.attributes.isLocked,
      lastVolume: manga.attributes.lastVolume,
      lastChapter: manga.attributes.lastChapter,
      originalLanguage: manga.attributes.originalLanguage,
      publicationDemographic: manga.attributes.publicationDemographic,
      createdAt: manga.attributes.createdAt,
      updatedAt: manga.attributes.updatedAt,
      version: manga.attributes.version,
      availableTranslatedLanguages: manga.attributes.availableTranslatedLanguages,
      latestUploadedChapter: manga.attributes.latestUploadedChapter,
      coverArtFilename: getCoverArtFilename(manga),
      relationships: manga.relationships
    }
  });
}
