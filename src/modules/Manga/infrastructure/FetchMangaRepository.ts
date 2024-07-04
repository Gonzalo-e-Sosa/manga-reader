import { mapMangaDataSingle, mapMangaDataCollection } from '@/utils/map';
import type { MangaRepository } from '../domain/MangaRepository';
import { getMangaData, getMangaList } from '@/services/fetchData';
import { ensureIsValidContentRating, ensureIsValidStatus } from '../domain/Manga';

export const createFetchMangaRepository = (): MangaRepository => {
  return {
    getById: async (id: string) => {
      const { data } = await getMangaData(id);
      return mapMangaDataSingle(data);
    },
    getSingleBySimilarTitle: async (similarTitle: string) => {
      const { data } = await getMangaList({ title: similarTitle, limit: 1, includes: { coverArt: true } })
      const [manga] = data;
      return mapMangaDataSingle(manga);
    },
    getSingleByYear: async (year: Date) => {
      const { data } = await getMangaList({ year, limit: 1, includes: { coverArt: true } });
      const [manga] = data;
      return mapMangaDataSingle(manga);
    },
    getSingleByStatus: async (status: string) => {
      const validStatus = ensureIsValidStatus(status);
      const { data } = await getMangaList({ status: validStatus, limit: 1, includes: { coverArt: true } });
      const [manga] = data;
      return mapMangaDataSingle(manga);
    },
    getSingleByCreatedAt: async (date: Date) => {
      const { data } = await getMangaList({ createdAtSince: date, limit: 1, includes: { coverArt: true } });
      const [manga] = data;
      return mapMangaDataSingle(manga);
    },
    getSingleByUpdatedAt: async (date: Date) => {
      const { data } = await getMangaList({ updatedAtSince: date, limit: 1, includes: { coverArt: true } });
      const [manga] = data;
      return mapMangaDataSingle(manga);
    },
    getSingleByLatestUpdatedChapter: async () => {
      const { data } = await getMangaList({ limit: 1, includes: { coverArt: true } });
      const [manga] = data;
      return mapMangaDataSingle(manga);
    },
    getSingleByContentRating: async (contentRating: string) => {
      const validContentRating = ensureIsValidContentRating(contentRating);
      const { data } = await getMangaList({ contentRating: validContentRating, limit: 1, includes: { coverArt: true } });
      const [manga] = data;
      return mapMangaDataSingle(manga);
    },

    getCollectionBySimilarTitle: async (similarTitle: string) => {
      const { data: mangas } = await getMangaList({ title: similarTitle, includes: { coverArt: true } })
      return mapMangaDataCollection(mangas);
    },
    getCollectionByYear: async (year: Date) => {
      const { data: mangas } = await getMangaList({ year, includes: { coverArt: true } })
      return mapMangaDataCollection(mangas);
    },
    getCollectionByStatus: async (status: string) => {
      const validStatus = ensureIsValidStatus(status);
      const { data: mangas } = await getMangaList({ status: validStatus, includes: { coverArt: true } })
      return mapMangaDataCollection(mangas);
    },
    getCollectionByCreatedAt: async (date: Date) => {
      const { data: mangas } = await getMangaList({ createdAtSince: date, includes: { coverArt: true } })
      return mapMangaDataCollection(mangas);
    },
    getCollectionByUpdatedAt: async (date: Date) => {
      const { data: mangas } = await getMangaList({ updatedAtSince: date, includes: { coverArt: true } })
      return mapMangaDataCollection(mangas);
    },
    getCollectionByLatestUpdatedChapter: async () => {
      const { data: mangas } = await getMangaList()
      return mapMangaDataCollection(mangas);
    },
    getCollectionByContentRating: async (contentRating: string) => {
      const validContentRating = ensureIsValidContentRating(contentRating);
      const { data: mangas } = await getMangaList({ contentRating: validContentRating, includes: { coverArt: true } })
      return mapMangaDataCollection(mangas);
    },
    getAll: async (options) => {
      const { data: mangas } = await getMangaList(options);
      return mapMangaDataCollection(mangas);
    }
  }
}