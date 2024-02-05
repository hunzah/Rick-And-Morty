import React from 'react'

import { EpisodeType, Nullable } from '@/assets/api/types'
import { convertDateFormat, convertToFullTitle, linkId } from '@/tools/helpers'
import Link from 'next/link'

import s from './episode-card.module.scss'

type PropsType = {
  episode: Nullable<EpisodeType>
}

export const EpisodeCard = (props: PropsType) => {
  if (!props.episode) {
    return null
  }
  const { air_date, characters, created, episode, id, name, url } = props.episode

  return (
    <div className={s.container}>
      <span className={s.name}>{convertToFullTitle(episode)}</span>
      <span>{convertDateFormat(created)}</span>
      <span>air date{air_date}</span>
      <Link href={`/locations/${url.match(linkId)}`}>Location used in this episode: {name}</Link>
      <Link href={'https://www.adultswim.com/videos/rick-and-morty'} target={'_blank'}>
        {' '}
        go watch)
      </Link>
    </div>
  )
}
