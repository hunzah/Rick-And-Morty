import React from 'react'

import { EpisodeType, Nullable } from '@/assets/api/types'
import Link from 'next/link'

import s from './episodes-card.module.scss'

type PropsType = {
  episode: Nullable<EpisodeType>
}
export const EpisodesCard = (props: PropsType) => {
  if (!props.episode) {
    return null
  }
  const { created, episode, id, name, url } = props.episode

  return (
    <Link className={s.container} href={`/episodes/${id}`}>
      <span className={s.number}>{id}</span>
      <span className={s.name}>{name}</span>
    </Link>
  )
}
