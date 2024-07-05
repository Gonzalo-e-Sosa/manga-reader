import { mapMangaDataSingle, mapMangaDataCollection } from '@/utils/map';
import type { MangaRepository } from '../domain/MangaRepository';
import { getMangaData, getMangaList } from '@/services/fetchData';
import { ensureIsValidContentRating, ensureIsValidStatus, type Manga } from '../domain/Manga';
import type { MangaOptions } from '@/services/types';

/**
 * Creates a new instance of the MangaRepository.
 *
 * @return {MangaRepository} The created MangaRepository instance.
 */
export const createFetchMangaRepository = (): MangaRepository => {
  return {
    getById: async (id: string, options?: MangaOptions): Promise<Manga> => {
      const { data } = await getMangaData(id, { ...options, author: 'author', artist: 'artist', coverArt: 'cover_art' });
      return mapMangaDataSingle(data);
    },
    getSingleBySimilarTitle: async (similarTitle: string): Promise<Manga> => {
      const { data } = await getMangaList({ title: similarTitle, limit: 1, includes: { coverArt: 'cover_art' } })
      const [manga] = data;
      return mapMangaDataSingle(manga);
    },
    getSingleByYear: async (year: Date): Promise<Manga> => {
      const { data } = await getMangaList({ year, limit: 1, includes: { coverArt: 'cover_art' } });
      const [manga] = data;
      return mapMangaDataSingle(manga);
    },
    getSingleByStatus: async (status: string): Promise<Manga> => {
      const validStatus = ensureIsValidStatus(status);
      const { data } = await getMangaList({ status: validStatus, limit: 1, includes: { coverArt: 'cover_art' } });
      const [manga] = data;
      return mapMangaDataSingle(manga);
    },
    getSingleByCreatedAt: async (date: Date): Promise<Manga> => {
      const { data } = await getMangaList({ createdAtSince: date, limit: 1, includes: { coverArt: 'cover_art' } });
      const [manga] = data;
      return mapMangaDataSingle(manga);
    },
    getSingleByUpdatedAt: async (date: Date): Promise<Manga> => {
      const { data } = await getMangaList({ updatedAtSince: date, limit: 1, includes: { coverArt: 'cover_art' } });
      const [manga] = data;
      return mapMangaDataSingle(manga);
    },
    getSingleByLatestUpdatedChapter: async (): Promise<Manga> => {
      const { data } = await getMangaList({ limit: 1, includes: { coverArt: 'cover_art' } });
      const [manga] = data;
      return mapMangaDataSingle(manga);
    },
    getSingleByContentRating: async (contentRating: string): Promise<Manga> => {
      const validContentRating = ensureIsValidContentRating(contentRating);
      const { data } = await getMangaList({ contentRating: validContentRating, limit: 1, includes: { coverArt: 'cover_art' } });
      const [manga] = data;
      return mapMangaDataSingle(manga);
    },

    getCollectionBySimilarTitle: async (similarTitle: string): Promise<Manga[]> => {
      const { data: mangas } = await getMangaList({ title: similarTitle, includes: { coverArt: 'cover_art' } })
      return mapMangaDataCollection(mangas);
    },
    getCollectionByYear: async (year: Date): Promise<Manga[]> => {
      const { data: mangas } = await getMangaList({ year, includes: { coverArt: 'cover_art' } })
      return mapMangaDataCollection(mangas);
    },
    getCollectionByStatus: async (status: string): Promise<Manga[]> => {
      const validStatus = ensureIsValidStatus(status);
      const { data: mangas } = await getMangaList({ status: validStatus, includes: { coverArt: 'cover_art' } })
      return mapMangaDataCollection(mangas);
    },
    getCollectionByCreatedAt: async (date: Date): Promise<Manga[]> => {
      const { data: mangas } = await getMangaList({ createdAtSince: date, includes: { coverArt: 'cover_art' } })
      return mapMangaDataCollection(mangas);
    },
    getCollectionByUpdatedAt: async (date: Date): Promise<Manga[]> => {
      const { data: mangas } = await getMangaList({ updatedAtSince: date, includes: { coverArt: 'cover_art' } })
      return mapMangaDataCollection(mangas);
    },
    getCollectionByLatestUpdatedChapter: async (): Promise<Manga[]> => {
      const { data: mangas } = await getMangaList()
      return mapMangaDataCollection(mangas);
    },
    getCollectionByContentRating: async (contentRating: string): Promise<Manga[]> => {
      const validContentRating = ensureIsValidContentRating(contentRating);
      const { data: mangas } = await getMangaList({ contentRating: validContentRating, includes: { coverArt: 'cover_art' } })
      return mapMangaDataCollection(mangas);
    },
    getAll: async (options): Promise<Manga[]> => {
      const { data: mangas } = await getMangaList({ ...options, includes: { coverArt: 'cover_art' } });
      return mapMangaDataCollection(mangas);
    }
  }
}