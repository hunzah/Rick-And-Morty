import React from 'react'

import { EpisodeType, Nullable } from '@/assets/api/types'

import s from './episode-card.module.scss'

type PropsType = {
  episode: Nullable<EpisodeType>
}
export const EpisodeCard = (props: PropsType) => {
  if (!props.episode) {
    return null
  }
  const { created, episode, id, name, url } = props.episode

  return (
    <div className={s.container}>
      <span>{id}</span>
      {/*<span>{name}</span>*/}
      {/*<span>{created}</span>*/}
      <span>{url}</span>
    </div>
  )
}
