import React from 'react'

import { CharacterType, Nullable } from '@/assets/api/types'
import Image from 'next/image'
import Link from 'next/link'

import s from './characters-card.module.scss'

type PropsType = {
  character: Nullable<CharacterType>
}
export const CharactersCard = (props: PropsType) => {
  if (!props.character) {
    return null
  }
  const { episode, id, image, name } = props.character

  return (
    <div className={s.container}>
      <Image
        alt={`Picture of- ${name}`}
        className={s.img}
        height={216}
        priority
        src={image}
        width={216}
      />
      <span className={s.info}>{name}</span>
    </div>
  )
}
