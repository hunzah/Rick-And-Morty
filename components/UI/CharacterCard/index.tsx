import React from 'react'

import { CharacterType, Nullable } from '@/assets/api/types'
import { linkId } from '@/tools/helpers'
import Image from 'next/image'
import Link from 'next/link'

import s from './character-card.module.scss'

type PropsType = {
  character: Nullable<CharacterType>
}
export const CharacterCard = (props: PropsType) => {
  if (!props.character) {
    return null
  }
  const { episode, gender, image, location, name, origin, status, type } = props.character

  return (
    <div className={s.container}>
      <Image
        alt={`Picture of- ${name}`}
        className={s.img}
        height={400}
        priority
        src={image}
        width={400}
      />
      <h1 className={s.name}>{name}</h1>
      <div>
        <span>gender: </span>
        <span>{gender}</span>
      </div>
      <div>
        <span>status: </span>
        <span>{status}</span>
      </div>
      <div>
        <span>location: </span>
        <Link href={`/locations/${location.url.match(linkId)}`}>{location.name}</Link>
      </div>
      <div>
        <span>origin: </span>
        <Link href={`/locations/${origin.url.match(linkId)}`}>{origin.name}</Link>
      </div>

      <div className={s.episodesBlockWrapper}>
        <h3>Episodes where {name} took part </h3>
        <div className={s.episodesWrapper}>
          {episode.map((episode, i) => (
            <Link href={`/episodes/${episode.match(linkId)}`} key={i}>
              {i + 1}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
