import { useEffect, useState } from 'react'

import { log } from 'util'

import { getCharacters } from '@/assets/api'
import { CharacterType, Nullable, ResponseType } from '@/assets/hooks/types'
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

  const [filteredCharacters, setFilteredCharactersA] = useState<Nullable<CharacterType[]>>(
    characters.results
  )
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [gender, setGender] = useState<string>('')
  const [status, setStatus] = useState<string>('')
  const [name, setName] = useState<string>('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const updatedCharacters = await getCharacters({ gender, name, page: currentPage, status })

        setFilteredCharactersA(updatedCharacters.results)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [gender, status, name, currentPage])

  // logic
  const onSetGender = (gender: string) => {
    setGender(gender)
    setCurrentPage(1)
  }

  const onSetStatus = (status: string) => {
    setStatus(status)
    setCurrentPage(1)
  }
  const onSearchByName = (name: string) => {
    setName(name)
    setCurrentPage(1)
  }
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
  //

  return (
    <>
      <HeadMeta title={'Characters'} />
      <div className={s.container}>
        <FilterCharacters
          searchByName={onSearchByName}
          setGender={onSetGender}
          setStatus={onSetStatus}
        />
        <div className={s.characters}>
          {filteredCharacters?.map(character => (
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
            totalElements={characters?.info.count}
          />
        )}
      </div>
    </>
  )
}

Characters.getLayout = getLayout

export default Characters
