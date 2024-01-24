import React from 'react'

import s from './filter-episodes.module.scss'

import { Input } from '../UI/Input'

type PropsType = {
  searchByName: (name: string) => void
}
export const FilterEpisodes = (props: PropsType) => {
  const { searchByName } = props

  return (
    <div className={s.container}>
      <Input alias={'filter-episodes'} debounce={300} onChange={searchByName} />
    </div>
  )
}
