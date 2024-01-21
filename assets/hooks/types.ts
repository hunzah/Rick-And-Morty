export type Nullable<T> = T | null

export type CharactersType = {
  info: {
    count: number
    next: null | string
    pages: number
    prev: null | string
  }
  results: CharacterType[]
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
