import React, { useState } from 'react'

import { getEpisodes } from '@/assets/api'
import { EpisodeType, ResponseType } from '@/assets/api/types'
import { useEpisodes } from '@/assets/hooks/useEpisodes'
import { HeadMeta } from '@/components/HeadMeta'
import { EpisodesCard } from '@/components/UI/EpisodesCard'
import { FilterItems } from '@/components/UI/FilterItems'
import { getLayout } from '@/components/UI/Layout'
import { Pagination } from '@/components/UI/Pagination'
import Link from 'next/link'

import s from './epiosodes.module.scss'

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

  const episodeItems = filteredEpisodes?.results.map(episode => (
    <li key={episode.id}>
      <EpisodesCard episode={episode} />
    </li>
  ))

  return (
    <>
      <HeadMeta title={'Episodes'} />
      <div className={s.container}>
        <FilterItems searchByName={filterByName} />

        <ul className={s.episodes}>{episodeItems}</ul>
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
