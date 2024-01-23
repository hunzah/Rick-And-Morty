import { useState } from 'react'

import { CharacterType } from '@/assets/api/types'
import { useCharacter } from '@/assets/hooks/useCharacter'
import { CharacterCard } from '@/components/CharacterCard'
import { HeadMeta } from '@/components/HeadMeta'
import { getLayout } from '@/components/Layout'

function Character() {
  const [character, setCharacter] = useState<CharacterType | undefined>(undefined)

  useCharacter({ setCharacter })
  if (!character) {
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
