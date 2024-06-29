export interface CoverData {
  id: string
  type: "cover_art"
  attributes: CoverAttributes
  relationships: Relationship
}

export interface CoverAttributes {
  description: string
  volume: string
  fileName: string
  locale: string
  createdAt: string
  updatedAt: string
  version: number
}

interface Relationship {
  manga: {
    id: string
    type: string
  }
  user: {
    id: string
    type: string
  }
}