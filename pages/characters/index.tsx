import { useEffect, useState } from 'react'

import axios from 'axios'

const Characters = () => {
  const [characters, setCharacters] = useState<CharacterType[] | null>(null)

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then(res => setCharacters(res.data.results))
  }, [])

  return <>{characters && characters.map(character => character.id)}</>
}

export default Characters

type CharacterType = {
  id: number
}
