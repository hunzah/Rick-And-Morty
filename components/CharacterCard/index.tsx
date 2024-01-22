import React from 'react'

import { CharacterType, Nullable } from '@/assets/hooks/types'
import Image from 'next/image'

import s from './characterCard.module.scss'

type PropsType = {
  character: Nullable<CharacterType>
}
export const CharacterCard = (props: PropsType) => {
  if (!props.character) {
    return null
  }
  const { id, image, name, species } = props.character

  return (
    <div className={s.container}>
      <Image alt={`Picture of- ${name}`} height={300} priority src={image} width={300} />
      <span>{name}</span>
      <span>{id}</span>
    </div>
  )
}
