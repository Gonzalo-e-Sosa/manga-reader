// get chapter image from an chapter id
// dataSaver contains the id of the image compressed

import { ENDPOINTS } from "@/consts";
import type { ResponseChapter, ResponseChapterFeed, ResponseCover, ResponseManga, ResponseMangaList } from "../types/response";
import type { MangaListOptions, MangaOptions } from "./types";

class FetchError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'FetchError';
  }
}

export const getMangaData = async (id: string, options?: MangaOptions): Promise<ResponseManga> => {
  try {
    const url = new URL(`${ENDPOINTS.MANGA}/${id}`);
    if (options) {
      Object.values(options).filter(value => value).forEach(value => url.searchParams.append('includes[]', value));
    }
    const res = await fetch(url);
    return (await res.json());
  } catch (err) {
    throw new FetchError('Manga not found');
  }
}

export const getMangaRandomData = async (): Promise<ResponseManga> => {
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

export const getCoverArtData = async (id: string): Promise<ResponseCover> => {
  try {
    const res = await fetch(`${ENDPOINTS.COVER_ART}/${id}`);
    return (await res.json());
  } catch (err) {
    throw new FetchError('Cover art not found');
  }
}

export const getMangaChapterFeed = async (mangaId: string): Promise<ResponseChapterFeed> => {
  try {
    const res = await fetch(`${ENDPOINTS.MANGA}/${mangaId}/feed`);
    return (await res.json());
  } catch (err) {
    throw new FetchError('Manga chapter feed not found');
  }
}

// chapters images
export const getChapterImagesData = async (chapterId: string): Promise<ResponseChapter> => {
  try {
    const res = await fetch(
      `${ENDPOINTS.CHAPTER_IMAGES}/${chapterId}`
    );
    return (await res.json());
  } catch (err) {
    throw new FetchError('Chapter images data not found');
  }
}

export const getPageImage = (hash: string, pageId: string, dataSaver = true) => {
  try {
    const image = (`${ENDPOINTS.UPLOADS}/${dataSaver ? 'data-saver' : 'data'}/${hash}/${pageId}`)
    return image;
  } catch (err) {
    throw new FetchError('Page image not found');
  }
}


// TODO: add query params to the fetched url

/**
 * Creates a URL for fetching manga list based on the provided options.
 *
 * @param {MangaListOptions} options - The options to customize the manga list URL.
 * @param {string} baseURL - The base URL for the manga list API.
 * @returns {URL} The generated URL for fetching manga list.

 * Example url generated:
`https://api.mangadex.org/manga?includes[]=cover_art&includes[]=artist&includes[]=author&order[followedCount]=desc&contentRating[]=safe&hasAvailableChapters=true&createdAtSince=${encodeURIComponent(dateTime)`
 */
export const createMangaListURL = (options?: MangaListOptions, baseURL = ENDPOINTS.MANGA_LIST): URL => {
  const INCLUDES = 'includes[]';
  const url = new URL(baseURL);

  if (!options) return url;

  const {
    limit,
    offset,
    /*title,
    authorOrArtist,
    authors,
    artist,
    year,
    includedTags,
    includedTagsMode,
    excludedTags,
    excludedTagsMode,
    status,
    originalLanguage,
    excludedOriginalLanguage,
    availableTranslatedLanguage,
    publicationDemographic,
    ids,*/
    contentRating,
    createdAtSince,
    updatedAtSince,
    order,
    includes/*,
    hasAvailableChapters,
    group*/
  } = options;

  if (offset === 0 || offset) url.searchParams.append('offset', offset.toString());

  if (limit) url.searchParams.append(`limit`, limit.toString());

  if (includes) {
    Object.values(includes).filter(value => value).forEach(value => url.searchParams.append(INCLUDES, value));
  }

  if (order) url.searchParams.append('order[followedCount]', 'desc');

  if (contentRating) url.searchParams.append("contentRating[]", contentRating);

  if (createdAtSince) url.searchParams.append('createdAtSince', createdAtSince.toISOString().slice(0, -5));

  if (updatedAtSince) url.searchParams.append('updatedAtSince', updatedAtSince.toISOString().slice(0, -5));

  console.log(url.toString());
  return url;
}

export const getMangaList = async (options?: MangaListOptions): Promise<ResponseMangaList> => {
  const res = await fetch(createMangaListURL(options).toString());
  if (!res.ok || res.status !== 200) {
    const error = await res.json();
    throw { message: error.message, status: error.cod };
  }
  return (await res.json());
}
