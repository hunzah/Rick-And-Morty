import { useEffect, useState } from 'react'

import { CharacterType, Nullable } from '@/assets/hooks/types'
import axios from 'axios'

export const useCharacters = (): Nullable<CharacterType[]> => {
  const [characters, setCharacters] = useState<CharacterType[] | null>(null)

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then(res => setCharacters(res.data.results))
  }, [])

  return characters
}
