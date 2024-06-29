// get chapter image from an chapter id
// dataSaver contains the id of the image compressed

import { ENDPOINTS } from "@/consts";
import type { CoverResponse, ChapterResponse, MangaResponse, MangaListResponse, MangaListOptions } from "./types";

class FetchError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'FetchError';
  }
}

export const getMangaData = async (id: string): Promise<MangaResponse> => {
  try {
    const res = await fetch(`${ENDPOINTS.MANGA}/${id}`);
    return (await res.json());
  } catch (err) {
    throw new FetchError('Manga not found');
  }
}

export const getMangaRandomData = async (): Promise<MangaResponse> => {
  try {
    const res = await fetch(ENDPOINTS.MANGA_RANDOM);
    return (await res.json());
  } catch (err) {
    throw new FetchError('Manga random not found');
  }
}

export const getAuthorData = async (id: string) => {
  try {
    const res = await fetch(`${ENDPOINTS.AUTHOR}/${id}`);
    return (await res.json());
  } catch (err) {
    throw new FetchError('Author not found');
  }
}

export const getCoverArtData = async (id: string): Promise<CoverResponse> => {
  try {
    const res = await fetch(`${ENDPOINTS.COVER_ART}/${id}`);
    return (await res.json());
  } catch (err) {
    throw new FetchError('Cover art not found');
  }
}

// chapters images
export const getChapterImagesData = async (chapterId: string): Promise<ChapterResponse> => {
  try {
    const res = await fetch(
      `${ENDPOINTS.CHAPTER_IMAGES}/${chapterId}`
    );
    return (await res.json());
  } catch (err) {
    throw new FetchError('Chapter images data not found');
  }
}

export const getPageImage = async (hash: string, pageId: string, dataSaver = true) => {
  try {
    const image = await fetch(`${ENDPOINTS.UPLOADS}/${dataSaver ? 'dataSaver' : 'data'}/${hash}/${pageId}`)
    return image;
  } catch (err) {
    throw new FetchError('Page image not found');
  }
}

/*
Example url:
`https://api.mangadex.org/manga?includes[]=cover_art&includes[]=artist&includes[]=author&order[followedCount]=desc&contentRating[]=safe&hasAvailableChapters=true&createdAtSince=${encodeURIComponent(dateTime)`
*/

export const createMangaListURL = (options?: MangaListOptions, baseURL = ENDPOINTS.MANGA_LIST): URL => {
  const INCLUDES = 'includes[]';
  const url = new URL(baseURL);

  if (!options) return url;

  const { limit, offset, contentRating, createdAtSince, updatedAtSince, coverArt, artist, author, order } = options;

  if (limit) url.searchParams.append(`limit`, limit.toString());

  if (offset) url.searchParams.append('offset', offset.toString());

  if (coverArt) url.searchParams.append(INCLUDES, 'cover_art');

  if (artist) url.searchParams.append(INCLUDES, 'artist');

  if (author) url.searchParams.append(INCLUDES, 'author');

  if (order) url.searchParams.append('order[followedCount]', 'desc');

  if (contentRating) url.searchParams.append("contentRating[]", contentRating);

  if (createdAtSince) url.searchParams.append('createdAtSince', createdAtSince.toISOString().slice(0, -5));

  if (updatedAtSince) url.searchParams.append('updatedAtSince', updatedAtSince.toISOString().slice(0, -5));

  return url;
}

export const getMangaList = async (options?: MangaListOptions): Promise<MangaListResponse> => {
  try {
    const res = await fetch(createMangaListURL(options).toString());
    return (await res.json());
  } catch (err) {
    throw new FetchError('Manga collection not found');
  }
}