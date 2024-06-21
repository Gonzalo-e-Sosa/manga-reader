// Manga List returns 10 results by default limit
// Manga List return cover_art and artist in the results

export const ENDPOINTS = {
  MANGA_LIST_CREATED_AT: dateTime => `https://api.mangadex.org/manga?includes[]=cover_art&includes[]=artist&includes[]=author&order[followedCount]=desc&contentRating[]=safe&hasAvailableChapters=true&createdAtSince=${encodeURIComponent(dateTime)}`
};

export const API_BASE_URL = 'https://api.mangadex.org';
export const UPLOADS_BASE_URL = 'https://uploads.mangadex.org';

export const URL_MANGA = `${API_BASE_URL}/manga`;
export const URL_MANGA_RANDOM = `${URL_MANGA}/random`;
export const URL_AUTHOR = `${API_BASE_URL}/author`;
export const URL_COVER_ART = `${API_BASE_URL}/cover`;
export const URL_COVER_ART_IMAGE = `${UPLOADS_BASE_URL}/covers`;
export const URL_CHAPTER_IMAGES = `${API_BASE_URL}/at-home/server`;
