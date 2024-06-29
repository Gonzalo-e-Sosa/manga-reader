import { AuthorAttributes } from "./author"
import { ArtistAttributes } from "./artist"
import { CoverAttributes } from "./cover_art"

type RelationshipType = "author" | "artist" | "cover_art";
type RelationShipAttributes = AuthorAttributes | ArtistAttributes | CoverAttributes;

interface Relationship<T extends RelationshipType> {
  id: string
  type: T
  attributes?:
  T extends "author" ? AuthorAttributes :
  T extends "artist" ? ArtistAttributes :
  T extends "cover_art" ? CoverAttributes : never
}

