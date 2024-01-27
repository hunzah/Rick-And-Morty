import React, { useState } from 'react'

import { getEpisodes } from '@/assets/api'
import { EpisodeType, ResponseType } from '@/assets/api/types'
import { useEpisodes } from '@/assets/hooks/useEpisodes'
import { FilterEpisodes } from '@/components/FilterEpisodes'
import { HeadMeta } from '@/components/HeadMeta'
import { getLayout } from '@/components/Layout'
import { EpisodeCard } from '@/components/UI/EpisodeCard'
import { Pagination } from '@/components/UI/Pagination'
import Link from 'next/link'

import s from './epiosodes.module.scss'
import bs from '@/styles/boilerplate.module.scss'

export const getStaticProps = async () => {
  const episodes = await getEpisodes()

  if (!episodes) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      episodes,
    },
  }
}
type PropsType = {
  episodes: ResponseType<EpisodeType>
}

function Episodes(props: PropsType) {
  const { episodes } = props
  const [filteredEpisodes, setFilteredEpisodes] = useState<ResponseType<EpisodeType>>(episodes)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [name, setName] = useState<string>('')

  const { filterByName, paginate } = useEpisodes({
    currentPage,
    name,
    setCurrentPage,
    setFilteredEpisodes,
    setName,
  })

  return (
    <>
      <HeadMeta title={'Episodes'} />
      <div className={s.container}>
        <FilterEpisodes searchByName={filterByName} />
        <div className={s.episodes}>
          {filteredEpisodes?.results.map(episode => (
            <Link href={`/episodes/${episode.id}`} key={episode.id}>
              <EpisodeCard episode={episode} />
            </Link>
          ))}
        </div>
        {filteredEpisodes && (
          <Pagination
            currentPage={currentPage}
            elementsPerPage={20}
            onChange={paginate}
            setCurrentPage={setCurrentPage}
            totalElements={filteredEpisodes?.info.count}
          />
        )}
      </div>
    </>
  )
}

Episodes.getLayout = getLayout

export default Episodes
