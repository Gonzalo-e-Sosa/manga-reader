type Status = "ongoing" | "completed" | "hiatus" | "cancelled";
type ContentRating = 'safe' | 'suggestive' | 'erotica';

export interface Manga {
  id: string
  attributes: {
    title: string
    description: string
    tags: string[]
    year: number
    contentRating: ContentRating
    status: Status
    lastVolume: string
    lastChapter: string
    originalLanguage: string
    publicationDemographic: string
    createdAt: string
    updatedAt: string
    availableTranslatedLanguages: string[]
    latestUploadedChapter: string
  }
  relationships: Array<{
    id: string
    type: string
    attributes?: { fileName?: string }
  }>
}

export function ensureIsValidStatus(status: string): Status {
  if (status !== 'ongoing' && status !== 'completed' && status !== 'hiatus' && status !== 'cancelled')
    throw new Error('Invalid status');
  return status;
}

export function ensureIsValidContentRating(contentRating: string): ContentRating {
  if (contentRating !== 'safe' && contentRating !== 'suggestive' && contentRating !== 'erotica')
    throw new Error('Invalid content rating');
  return contentRating;
}