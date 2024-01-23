import { useEffect } from 'react'

import { getCharacter } from '@/assets/api'
import { CharacterType } from '@/assets/api/types'
import { useRouter } from 'next/router'

type PropsType = {
  setCharacter: (character: CharacterType) => void
}
export const useCharacter = ({ setCharacter }: PropsType) => {
  const router = useRouter()
  const id = router.query.id as string

  useEffect(() => {
    if (id) {
      const fetchCharacter = async () => {
        const fetchedCharacter = await getCharacter({ id })

        setCharacter(fetchedCharacter)
      }

      fetchCharacter()
    }
  }, [id, setCharacter])

  return {}
}
