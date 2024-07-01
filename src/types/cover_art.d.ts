export interface CoverAttributes {
  description: string
  volume: string
  fileName: string
  locale: string
  createdAt: string
  updatedAt: string
  version: number
}

export interface CoverRelationship {
  manga: {
    id: string
    type: string
  }
  user: {
    id: string
    type: string
  }
}