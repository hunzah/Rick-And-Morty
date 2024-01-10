import { useEffect, useState } from 'react'

import { CharacterType, Nullable } from '@/assets/hooks/types'
import axios from 'axios'
import { useRouter } from 'next/router'

export const useCharacter = () => {
  const [character, setCharacter] = useState<Nullable<CharacterType>>(null)

  const router = useRouter()

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${router.query.id}`)
      .then(res => setCharacter(res.data))
  }, [router.query.id])

  return character
}
