import { useState } from 'react'

import { getCharacters } from '@/assets/api'
import { CharacterType, ResponseType } from '@/assets/api/types'
import { useCharacters } from '@/assets/hooks/useCharacters'
import { CharacterCard } from '@/components/CharacterCard'
import { FilterCharacters } from '@/components/FilterCharacters'
import { HeadMeta } from '@/components/HeadMeta'
import { getLayout } from '@/components/Layout'
import { Pagination } from '@/components/Pagination'
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

  return (
    <>
      <HeadMeta title={'Characters'} />
      <div className={s.container}>
        <FilterCharacters
          searchByName={filterByName}
          setGender={filterByGender}
          setStatus={filterByStatus}
        />
        <div className={s.characters}>
          {filteredCharacters?.results.map(character => (
            <Link href={`/characters/${character.id}`} key={character.id}>
              <CharacterCard character={character} />
            </Link>
          ))}
        </div>
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
