import { useState } from 'react'

import { CharacterType } from '@/assets/api/types'
import { useCharacter } from '@/assets/hooks/useCharacter'
import { HeadMeta } from '@/components/HeadMeta'
import { CharacterCard } from '@/components/UI/CharacterCard'
import { getLayout } from '@/components/UI/Layout'

import s from './character.module.scss'

function Character() {
  const [character, setCharacter] = useState<CharacterType | undefined>(undefined)

  useCharacter({ setCharacter })
  if (!character) {
    return null
  }

  return (
    <>
      <HeadMeta title={'Character'} />

      <div className={s.container}>
        <CharacterCard character={character && character} />
      </div>
    </>
  )
}

Character.getLayout = getLayout

export default Character
