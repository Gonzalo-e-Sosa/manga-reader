import type { MangaRepository } from "../domain/MangaRepository";

export function createMangaService(repository: MangaRepository) {
  return {
    getSingleBySimilarTitle: (similarTitle: string) => repository.getSingleBySimilarTitle(similarTitle),
    getSingleByStatus: (status: string) => repository.getSingleByStatus(status),
    getSingleByYear: (year: Date) => repository.getSingleByYear(year),
    getSingleByCreatedAt: (date: Date) => repository.getSingleByCreatedAt(date),
    getSingleByUpdatedAt: (date: Date) => repository.getSingleByUpdatedAt(date),
    getSingleByLatestUpdatedChapter: () => repository.getSingleByLatestUpdatedChapter(),

    getCollectionBySimilarTitle: (similarTitle: string) => repository.getCollectionBySimilarTitle(similarTitle),
    getCollectionByStatus: (status: string) => repository.getCollectionByStatus(status),
    getCollectionByYear: (year: Date) => repository.getCollectionByYear(year),
    getCollectionByCreatedAt: (date: Date) => repository.getCollectionByCreatedAt(date),
    getCollectionByUpdatedAt: (date: Date) => repository.getCollectionByUpdatedAt(date),
    getCollectionByLatestUpdatedChapter: () => repository.getCollectionByLatestUpdatedChapter(),
  }
}