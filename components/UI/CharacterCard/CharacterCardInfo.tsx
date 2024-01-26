import React from 'react'

import { CharacterType } from '@/assets/api/types'
import Link from 'next/link'

type PropsType = {
  character: CharacterType
}
export const CharacterLocationInfo = ({ character }: PropsType) => {
  return (
    <>
      {character.location.name !== 'unknown' ? (
        <Link href={`/locations/${character.location.url.match(/\d+$/)}`}>
          Находится:
          {character.location.name}
        </Link>
      ) : (
        <span>Unknown</span>
      )}
      {character.origin.name !== 'unknown' ? (
        <Link href={`/locations/${character.origin.url.match(/\d+$/)}`}>
          Рожден:
          {character.origin.name}
        </Link>
      ) : (
        <span>Unknown</span>
      )}
    </>
  )
}
