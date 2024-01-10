import React from 'react'

import { useCharacters } from '@/assets/hooks/useCharacters'

export const Character = () => {
  const characters = useCharacters()

  return <>{characters && characters.map(character => character.id)}</>
}
