import type { MangaListOptions, MangaOptions } from "@/services/types";
import type { Manga } from "./Manga"

export interface MangaRepository {
  getById(id: string, options?: MangaOptions): Promise<Manga>;
  getSingleBySimilarTitle(similarTitle: string): Promise<Manga>;
  getSingleByStatus(status: string): Promise<Manga>;
  getSingleByYear(year: Date): Promise<Manga>;
  getSingleByCreatedAt(date: Date): Promise<Manga>;
  getSingleByUpdatedAt(date: Date): Promise<Manga>;
  getSingleByLatestUpdatedChapter(): Promise<Manga>;
  getSingleByContentRating(contentRating: string): Promise<Manga>;

  getCollectionBySimilarTitle(similarTitle: string): Promise<Manga[]>;
  getCollectionByStatus(status: string): Promise<Manga[]>;
  getCollectionByYear(year: Date): Promise<Manga[]>;
  getCollectionByCreatedAt(date: Date): Promise<Manga[]>;
  getCollectionByUpdatedAt(date: Date): Promise<Manga[]>;
  getCollectionByLatestUpdatedChapter(): Promise<Manga[]>;
  getCollectionByContentRating(contentRating: string): Promise<Manga[]>;

  getAll(options: MangaListOptions): Promise<Manga[]>
}