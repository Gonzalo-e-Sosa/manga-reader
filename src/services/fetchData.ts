// get chapter image from an chapter id
// dataSaver contains the id of the image compressed

import { ENDPOINTS } from "@/consts";
import type { CoverResponse, ThumbnailSize, ChapterResponse, MangaResponse, MangaListResponse, ListOptions } from "./types";

export const getMangaData = async (id: string): Promise<MangaResponse> => {
  const res = await fetch(`${ENDPOINTS.MANGA}/${id}`);

  return (await res.json());
}

export const getMangaRandomData = async (): Promise<MangaResponse> => {
  const res = await fetch(ENDPOINTS.MANGA_RANDOM);

  return (await res.json());
}

export const getAuthorData = async (id: string) => {
  const res = await fetch(`${ENDPOINTS.AUTHOR}/${id}`);

  return (await res.json());
}

export const getCoverArtData = async (id: string): Promise<CoverResponse> => {
  const res = await fetch(`${ENDPOINTS.COVER_ART}/${id}`);

  return (await res.json());
}

export const getCoverArtFilename = (res: CoverResponse) => {
  return res.data.attributes.fileName;
}

// cover image
// default width size is unknown but if you need it you can use the thumbnailSize parameter

export const getCoverArtImage = (mangaId: string, coverArtFilename: string, thumbnailSize?: ThumbnailSize) => {
  const width = thumbnailSize ? `.${thumbnailSize}.jpg` : '';

  return `${ENDPOINTS.COVER_ART_IMAGE}/${mangaId}/${coverArtFilename}${width}`;
}


// chapters images
export const getChapterImagesData = async (chapterId: string): Promise<ChapterResponse> => {
  const res = await fetch(
    `${ENDPOINTS.CHAPTER_IMAGES}/${chapterId}`
  );

  return (await res.json());
}

export const getPageImage = async (hash: string, pageId: string, dataSaver = true) => {
  const image = await fetch(
    `${ENDPOINTS.UPLOADS}/${dataSaver ? 'dataSaver' : 'data'}/${hash}/${pageId}`
  )
  return image;
}

/*
`https://api.mangadex.org/manga?includes[]=cover_art&includes[]=artist&includes[]=author&order[followedCount]=desc&contentRating[]=safe&hasAvailableChapters=true&createdAtSince=${encodeURIComponent(dateTime)`
*/

export const createMangaListURL = (options?: ListOptions, baseURL = ENDPOINTS.MANGA_LIST) => {
  const INCLUDES = 'includes[]';
  const url = new URL(baseURL);

  if (!options) return url.toString();

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

  return url.toString();
}

export const getMangaList = async (options?: ListOptions): Promise<MangaListResponse> => {
  const res = await fetch(createMangaListURL(options));
  return (await res.json());
}