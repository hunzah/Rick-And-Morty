import React from 'react'

import s from './filter-locations.module.scss'

import { Input } from '../Input'

type PropsType = {
  searchByName: (name: string) => void
}
export const FilterLocations = (props: PropsType) => {
  const { searchByName } = props

  return (
    <div className={s.container}>
      <Input alias={'filter-locations'} debounce={300} onChange={searchByName} />
    </div>
  )
}
