import { useEffect, useState } from 'react'

import { CharacterType, Nullable } from '@/assets/api/types'
import axios from 'axios'
import { useRouter } from 'next/router'

export const useCharacter = () => {
  const [character, setCharacter] = useState<Nullable<CharacterType>>(null)

  const router = useRouter()

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL}/character/${router.query.id}`)
      .then(res => setCharacter(res.data))
  }, [router.query.id])

  return character
}
