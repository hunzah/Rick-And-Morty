import { useState } from 'react'

import { useCharacters } from '@/assets/hooks/useCharacters'
import { CharacterCard } from '@/components/CharacterCard'
import { HeadMeta } from '@/components/HeadMeta'
import { getLayout } from '@/components/Layout'
import { Pagination } from '@/components/Pagination'
import Link from 'next/link'

import s from './characters.module.scss'

function Characters() {
  const [currentPage, setCurrentPage] = useState<number>(3)
  const characters = useCharacters({ page: currentPage })

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <>
      <HeadMeta title={'Characters'} />
      <main>
        <div className={s.container}>
          {characters?.results.map(character => (
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
      </main>
    </>
  )
}

Characters.getLayout = getLayout

export default Characters
