export type Nullable<T> = T | null

export type ResponseType<T> = {
  info: {
    count: number
    next: null | string
    pages: number
    prev: null | string
  }
  results: T[]
}

export type CharacterType = {
  created: string
  episode: string[]
  gender: 'Female' | 'Genderless' | 'Male' | 'unknown'
  id: number
  image: string // URL
  location: {
    name: string
    url: string
  }
  name: string
  origin: {
    name: string
    url: string
  }
  species: string
  status: 'Alive' | 'Dead' | 'unknown'
  type: string
  url: string // URL
}

export type ParamsType = {
  gender?: string
  name?: string
  page: number
  status?: string
}

export type LocationType = {
  created: string
  dimension: string
  id: number
  name: string
  residents: string[]
  type: string
  url: string
}
