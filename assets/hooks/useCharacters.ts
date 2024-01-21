import { useEffect, useState } from 'react'

import { CharactersType, Nullable } from '@/assets/hooks/types'
import axios from 'axios'

export const useCharacters = (): Nullable<CharactersType> => {
  const [characters, setCharacters] = useState<Nullable<CharactersType>>(null)

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL}/character`)
      .then(res => setCharacters(res.data))
  }, [])

  return characters
}
