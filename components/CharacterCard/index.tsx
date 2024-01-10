import React from 'react'

import { CharacterType, Nullable } from '@/assets/hooks/types'

type PropsType = {
  character: Nullable<CharacterType>
}
export const CharacterCard = (props: PropsType) => {
  const { character } = props

  return <span>{character && character.id}</span>
}
