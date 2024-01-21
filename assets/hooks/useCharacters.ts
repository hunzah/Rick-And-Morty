import { useEffect, useState } from 'react'

import { CharactersType, Nullable } from '@/assets/hooks/types'
import axios from 'axios'

type PropsType = {
  page: number
}
export const useCharacters = (props: PropsType): Nullable<CharactersType> => {
  const { page } = props
  const [characters, setCharacters] = useState<Nullable<CharactersType>>(null)

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL}/character?page=${page}`)
      .then(res => setCharacters(res.data))
  }, [page])

  return characters
}
