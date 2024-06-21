// get chapter image from an chapter id
// dataSaver contains the id of the image compressed

import { URL_MANGA, UPLOADS_BASE_URL, URL_CHAPTER_IMAGES, URL_COVER_ART_IMAGE, URL_AUTHOR, URL_COVER_ART, URL_MANGA_RANDOM } from "@/consts";
import type { CoverResponse, ThumbnailSize, ChapterResponse, MangaResponse } from "./types";

export const getMangaData = async (id: string): Promise<MangaResponse> => {
  const res = await fetch(`${URL_MANGA}/${id}`);

  return (await res.json());
}

export const getMangaRandomData = async (): Promise<MangaResponse> => {
  const res = await fetch(URL_MANGA_RANDOM);

  return (await res.json());
}

export const getAuthorData = async (id: string) => {
  const res = await fetch(`${URL_AUTHOR}/${id}`);

  return (await res.json());
}

export const getCoverArtData = async (id: string): Promise<CoverResponse> => {
  const res = await fetch(`${URL_COVER_ART}/${id}`);

  return (await res.json());
}

export const getCoverArtFilename = (res: CoverResponse) => {
  return res.data.attributes.fileName;
}

// cover image
// default width size is unknown but if you need it you can use the thumbnailSize parameter

export const getCoverArtImage = (mangaId: string, coverArtFilename: string, thumbnailSize?: ThumbnailSize) => {
  const width = thumbnailSize ? `.${thumbnailSize}.jpg` : '';

  return `${URL_COVER_ART_IMAGE}/${mangaId}/${coverArtFilename}${width}`;
}


// chapters images
export const getChapterImagesData = async (chapterId: string): Promise<ChapterResponse> => {
  const res = await fetch(
    `${URL_CHAPTER_IMAGES}/${chapterId}`
  );

  return (await res.json());
}

export const getPageImage = async (hash: string, pageId: string, dataSaver = true) => {
  const image = await fetch(
    `${UPLOADS_BASE_URL}/${dataSaver ? 'dataSaver' : 'data'}/${hash}/${pageId}`
  )
  return image;
}

