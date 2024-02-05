import React from 'react'

import { LocationType, Nullable } from '@/assets/api/types'

import s from './locations-card.module.scss'

type PropsType = {
  location: Nullable<LocationType>
}
export const LocationsCard = (props: PropsType) => {
  if (!props.location) {
    return null
  }
  const { dimension, name, residents, type } = props.location

  return (
    <div className={s.container}>
      <div className={s.titleWrap}>
        <span className={s.name}>{name}</span>
      </div>
      <span>Dimension: {dimension}</span>
      <span>Type: {type}</span>
    </div>
  )
}
