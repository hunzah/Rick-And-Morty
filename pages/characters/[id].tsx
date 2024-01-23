import { useEffect, useState } from 'react'

import { getCharacter } from '@/assets/api'
import { CharacterType } from '@/assets/api/types'
import { CharacterCard } from '@/components/CharacterCard'
import { HeadMeta } from '@/components/HeadMeta'
import { getLayout } from '@/components/Layout'
import { useRouter } from 'next/router'

function Character() {
  const [character, setCharacter] = useState<CharacterType | undefined>(undefined)
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
  }, [id])

  if (!id || !character) {
    return null
  }

  return (
    <>
      <HeadMeta title={'Character'} />
      <CharacterCard character={character && character} />
    </>
  )
}

Character.getLayout = getLayout

export default Character
