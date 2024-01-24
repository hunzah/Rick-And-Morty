import React from 'react'

import s from './filter-locations.module.scss'

import { Input } from '../UI/Input'

type PropsType = {
  searchByName: (name: string) => void
  // setGender: (gender: string) => void
  // setStatus: (status: string) => void
}
export const FilterLocations = (props: PropsType) => {
  const { searchByName } = props

  return (
    <div className={s.container}>
      <Input alias={'filter-by-type'} debounce={300} onChange={searchByName} />
      {/*<Select*/}
      {/*  callback={setGender}*/}
      {/*  options={['Earth', 'Space Station', 'genderless', 'unknown']}*/}
      {/*  placeholder={'Gender'}*/}
      {/*/>*/}
      {/*<Select callback={setStatus} options={['alive', 'dead', 'unknown']} placeholder={'Status'} />*/}
    </div>
  )
}
