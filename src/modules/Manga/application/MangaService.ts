import type { MangaListOptions } from "@/services/types";
import type { MangaRepository } from "../domain/MangaRepository";

export function createMangaService(repository: MangaRepository) {
  return {
    getById: async (id: string) => repository.getById(id),
    getSingleBySimilarTitle: async (similarTitle: string) => repository.getSingleBySimilarTitle(similarTitle),
    getSingleByStatus: async (status: string) => repository.getSingleByStatus(status),
    getSingleByYear: async (year: Date) => repository.getSingleByYear(year),
    getSingleByCreatedAt: async (date: Date) => repository.getSingleByCreatedAt(date),
    getSingleByUpdatedAt: async (date: Date) => repository.getSingleByUpdatedAt(date),
    getSingleByLatestUpdatedChapter: async () => repository.getSingleByLatestUpdatedChapter(),
    getAll: async (options: MangaListOptions) => repository.getAll(options),
    getCollectionBySimilarTitle: async (similarTitle: string) => repository.getCollectionBySimilarTitle(similarTitle),
    getCollectionByStatus: async (status: string) => repository.getCollectionByStatus(status),
    getCollectionByYear: async (year: Date) => repository.getCollectionByYear(year),
    getCollectionByCreatedAt: async (date: Date) => repository.getCollectionByCreatedAt(date),
    getCollectionByUpdatedAt: async (date: Date) => repository.getCollectionByUpdatedAt(date),
    getCollectionByLatestUpdatedChapter: async () => repository.getCollectionByLatestUpdatedChapter(),
  }
}