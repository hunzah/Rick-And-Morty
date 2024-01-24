import { useState } from 'react'

import { CharacterType } from '@/assets/api/types'
import { useCharacter } from '@/assets/hooks/useCharacter'
import { HeadMeta } from '@/components/HeadMeta'
import { getLayout } from '@/components/Layout'
import { CharacterCard } from '@/components/UI/CharacterCard'

function Character() {
  const [character, setCharacter] = useState<CharacterType | undefined>(undefined)

  useCharacter({ setCharacter })
  if (!character) {
    return null
  }

  return (
    <>
      <HeadMeta title={'Character'} />
      <span>Episodes</span>
      {character.episode.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
      <CharacterCard character={character && character} />
      <a href={character.location.url}>{character.location.name}</a>
    </>
  )
}

Character.getLayout = getLayout

export default Character
