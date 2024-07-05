import type { Manga } from "@/modules/Manga/domain/Manga";
import { getDescription } from "./get";
import type { MangaData } from "@/types/response";

export function mapMangaDataSingle(data: MangaData): Manga {
  return {
    id: data.id,
    title: data.attributes.title.en,
    altTitles: data.attributes.altTitles as { [key: string]: string }[],
    description: getDescription(data.attributes),
    tags: data.attributes.tags.map((tag) => tag.attributes.name.en),
    year: data.attributes.year,
    contentRating: data.attributes.contentRating,
    status: data.attributes.status,
    lastVolume: data.attributes.lastVolume,
    lastChapter: data.attributes.lastChapter,
    originalLanguage: data.attributes.originalLanguage,
    publicationDemographic: data.attributes.publicationDemographic,
    createdAt: data.attributes.createdAt,
    updatedAt: data.attributes.updatedAt,
    availableTranslatedLanguages: data.attributes.availableTranslatedLanguages,
    latestUploadedChapter: data.attributes.latestUploadedChapter,
    coverArtFileName: data.relationships.find(r => r.type === "cover_art")?.attributes.fileName,
    author: data.relationships.find(r => r.type === "author")?.attributes.name,
    artist: data.relationships.find(r => r.type === "artist")?.attributes.name
  }
}

export function mapMangaDataCollection(data: MangaData[]): Manga[] {
  return data.map((manga, index) => {
    return {
      id: manga.id,
      title: manga.attributes.title.en,
      altTitles: manga.attributes.altTitles as { [key: string]: string }[],
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
      coverArtFileName: data[index].relationships.find(r => r.type === "cover_art")?.attributes.fileName,
      author: data[index].relationships.find(r => r.type === "author")?.attributes.name,
      artist: data[index].relationships.find(r => r.type === "artist")?.attributes.name
    }
  });
}
