import type { ArtistAttributes, ArtistRelationship } from "./artist";
import type { AuthorAttributes, AuthorRelationship } from "./author";
import type { CoverAttributes, CoverRelationship } from "./cover_art";
import type { ChapterAttributes, ChapterFeedAttributes, ChapterFeedRelationship } from "./chapter";
import type { MangaAttributes, MangaRelationship } from "./manga";

type Error = 'error';
type OK = 'ok';
type ResponseResult = Error | OK;
type EntityType = 'entity' | 'collection';
type DataType = 'artist' | 'author' | 'cover_art' | 'chapter' | 'user' | 'manga';
type Attributes = ArtistAttributes | AuthorAttributes | CoverAttributes | ChapterFeedAttributes | MangaAttributes;
type Relationship = ArtistRelationship | AuthorRelationship | CoverRelationship | ChapterFeedRelationship | MangaRelationship;

interface ResponseBase<R extends ResponseResult> {
  result: R
}

export interface ResponseError extends ResponseBase<Error> {
  errors: Array<{
    id: string
    status: number
    title: string
    detail: string
    context: null
  }>
}

interface Data<T extends DataType, A extends Attributes, R extends Relationship> {
  id: string
  type: T
  attributes: A
  relationship: Array<R>
}

type ArtistData = Data<"artist", ArtistAttributes, ArtistRelationship>;
type AuthorData = Data<"author", AuthorAttributes, AuthorRelationship>;
type CoverData = Data<"cover_art", CoverAttributes, CoverRelationship>;
type ChapterFeedData = Data<"chapter", ChapterFeedAttributes, ChapterFeedRelationship>;
type MangaData = Data<"manga", MangaAttributes, MangaRelationship>;

type ResponseData = ArtistData | AuthorData | CoverData | ChapterFeedData | MangaData;

interface ResponseOK<T extends EntityType> extends ResponseBase<OK> {
  response: T
}

interface ResponseEntity<D extends ResponseData> extends ResponseOK<"entity"> {
  data: D
}

interface ResponseCollection<D extends ResponseData> extends ResponseOK<"collection"> {
  data: Array<D>
  limit: number
  offset: number
  total: number
}

export type ResponseAuthor = ResponseEntity<AuthorData>
export type ResponseArtist = ResponseEntity<ArtistData>
export type ResponseChapterFeed = ResponseEntity<ChapterFeedData>
export type ResponseCover = ResponseEntity<CoverData>
export type ResponseManga = ResponseEntity<MangaData>

export interface ResponseChapter {
  result: string
  baseUrl: string
  chapter: ChapterAttributes
}

export type ResponseAuthorList = ResponseCollection<AuthorData>
export type ResponseArtistList = ResponseCollection<ArtistData>
export type ResponseChapterFeedList = ResponseCollection<ChapterFeedData>
export type ResponseCoverList = ResponseCollection<CoverData>
export type ResponseMangaList = ResponseCollection<MangaData>