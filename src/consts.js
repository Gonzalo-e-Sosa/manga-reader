export const API_BASE_URL = 'https://api.mangadex.org';
export const UPLOADS_BASE_URL = 'https://uploads.mangadex.org';

export const URL_MANGA = `${API_BASE_URL}/manga`;
export const URL_MANGA_RANDOM = `${URL_MANGA}/random`;
export const URL_AUTHOR = `${API_BASE_URL}/author`;
export const URL_COVER_ART = `${API_BASE_URL}/cover`;
export const URL_COVER_ART_IMAGE = `${UPLOADS_BASE_URL}/covers`;
export const URL_CHAPTER_IMAGES = `${API_BASE_URL}/at-home/server`;

export const ENDPOINTS = {
  MANGA: URL_MANGA,
  MANGA_LIST: URL_MANGA,
  MANGA_RANDOM: URL_MANGA_RANDOM,
  AUTHOR: URL_AUTHOR,
  COVER_ART: URL_COVER_ART,
  COVER_ART_IMAGE: URL_COVER_ART_IMAGE,
  CHAPTER_IMAGES: URL_CHAPTER_IMAGES,
  UPLOADS: UPLOADS_BASE_URL
}

export const PATH_TO_PARTIALS = "/partials";