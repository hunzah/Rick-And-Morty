import { useState } from 'react'

import { CharacterType } from '@/assets/api/types'
import { useCharacter } from '@/assets/hooks/useCharacter'
import { HeadMeta } from '@/components/HeadMeta'
import { getLayout } from '@/components/Layout'
import { CharacterCard, CharacterLocationInfo } from '@/components/UI/CharacterCard'
import Link from 'next/link'

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
        <Link
          href={`/episodes/${character.location.url.match(/\d+$/)}`}
          key={i}
          style={{ paddingLeft: '10px' }}
        >
          Эпизод: {item.match(/\d+$/)}
        </Link>
      ))}
      <CharacterCard character={character && character} />
      <CharacterLocationInfo character={character} />
    </>
  )
}

Character.getLayout = getLayout

export default Character
