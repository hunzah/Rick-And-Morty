import { useState } from 'react'

import { getCharacters } from '@/assets/api'
import { CharacterType, ResponseType } from '@/assets/api/types'
import { useCharacters } from '@/assets/hooks/useCharacters'
import { HeadMeta } from '@/components/HeadMeta'
import { CharactersCard } from '@/components/UI/CharactersCard'
import { FilterCharacters } from '@/components/UI/FilterCharacters'
import { getLayout } from '@/components/UI/Layout'
import { Pagination } from '@/components/UI/Pagination'
import Link from 'next/link'

import s from './characters.module.scss'

export const getStaticProps = async () => {
  const characters = await getCharacters()

  if (!characters) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      characters,
    },
  }
}
type PropsType = {
  characters: ResponseType<CharacterType>
}

function Characters(props: PropsType) {
  const { characters } = props
  const [filteredCharacters, setFilteredCharacters] =
    useState<ResponseType<CharacterType>>(characters)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [gender, setGender] = useState<string>('')
  const [status, setStatus] = useState<string>('')
  const [name, setName] = useState<string>('')

  const { filterByGender, filterByName, filterByStatus, paginate } = useCharacters({
    currentPage,
    gender,
    name,
    setCurrentPage,
    setFilteredCharacters,
    setGender,
    setName,
    setStatus,
    status,
  })
  const characterItems = filteredCharacters?.results.map(character => (
    <li key={character.id}>
      <Link href={`/characters/${character.id}`}>
        <CharactersCard character={character} />
      </Link>
    </li>
  ))

  return (
    <>
      <HeadMeta title={'Characters'} />
      <div className={s.container}>
        <FilterCharacters
          searchByName={filterByName}
          setGender={filterByGender}
          setStatus={filterByStatus}
        />
        <ul className={s.characters}>{characterItems}</ul>
        {characters && (
          <Pagination
            currentPage={currentPage}
            elementsPerPage={20}
            onChange={paginate}
            setCurrentPage={setCurrentPage}
            totalElements={filteredCharacters?.info.count}
          />
        )}
      </div>
    </>
  )
}

Characters.getLayout = getLayout

export default Characters
