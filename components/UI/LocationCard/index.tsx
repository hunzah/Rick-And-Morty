import React from 'react'

import { LocationType, Nullable } from '@/assets/api/types'

import s from './locationCard.module.scss'

type PropsType = {
  location: Nullable<LocationType>
}
export const LocationCard = (props: PropsType) => {
  if (!props.location) {
    return null
  }
  const { dimension, id, name, residents, type } = props.location

  return (
    <div className={s.container}>
      <span>{name}</span>
    </div>
  )
}
