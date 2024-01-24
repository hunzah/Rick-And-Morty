import React from 'react'

import { CharacterType, Nullable } from '@/assets/api/types'
import Image from 'next/image'
import Link from 'next/link'

import s from './characterCard.module.scss'

type PropsType = {
  character: Nullable<CharacterType>
}
export const CharacterCard = (props: PropsType) => {
  if (!props.character) {
    return null
  }
  const { episode, id, image, name } = props.character

  return (
    <div className={s.container}>
      <Image alt={`Picture of- ${name}`} height={300} priority src={image} width={300} />
      <span>{name}</span>
      <span>{id}</span>
      {/*{episode.map((url, i) => (*/}
      {/*  <Link href={`episodes/3`} key={i}>*/}
      {/*    s*/}
      {/*  </Link>*/}
      {/*))}*/}
    </div>
  )
}
