import { CoverData } from "../types/cover_art";
import { MangaData } from "../types/manga";
import { Chapter as ChapterData } from "../types/chapter";

type ApiResult = "ok" | "error";
type ApiResponse = "entity" | "collection";
type ApiData = CoverData | MangaData | MangaData[]
type DataType = "manga" | "cover_art";

interface BaseResponse<R extends ApiResponse, D extends ApiData> {
  result: ApiResult
  response?: R
  data: D
}

export interface MangaResponse extends BaseResponse<"entity", MangaData> {
}

export interface CoverResponse extends BaseResponse<"entity", CoverData> {
}

export interface MangaListResponse extends BaseResponse<"collection", MangaData[]> {
  limit: number
  offset: number
  total: number
}

export interface ChapterResponse {
  result: string
  baseUrl: string
  chapter: ChapterData
}

export interface MangaListOptions {
  limit?: number
  offset?: number
  contentRating?: ContentRating
  createdAtSince?: Date
  updatedAtSince?: Date
  coverArt?: boolean
  artist?: boolean
  author?: boolean
  order?: boolean
}

type ContentRating = 'safe' | 'suggestive' | 'erotica';