import { useEffect, useState } from 'react'

import { CharactersType, Nullable } from '@/assets/hooks/types'
import axios from 'axios'

type PropsType = {
  gender?: string
  name?: string
  page: number
  status?: string
}
export const useCharacters = (props: PropsType): Nullable<CharactersType> => {
  const { gender, name, page, status } = props
  const [characters, setCharacters] = useState<Nullable<CharactersType>>(null)

  useEffect(() => {
    let url = `${process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL}/character?page=${page}`

    if (gender) {
      url += `&gender=${gender}`
    }

    if (status) {
      url += `&status=${status}`
    }

    if (name) {
      url += `&name=${name}`
    }
    axios.get(url).then(res => setCharacters(res.data))
  }, [page, gender, status, name])

  return characters
}
