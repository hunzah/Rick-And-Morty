import React from 'react'

import { Input } from '@/components/Input'
import { Select } from '@/components/Select/Select'

import s from './filter-characters.module.scss'

type PropsType = {
  searchByName: (name: string) => void
  setGender: (gender: string) => void
  setStatus: (status: string) => void
}
export const FilterCharacters = (props: PropsType) => {
  const { searchByName, setGender, setStatus } = props

  return (
    <div className={s.container}>
      <Input alias={'filter-by-name'} debounce={300} onChange={searchByName} />
      <Select
        callback={setGender}
        options={['male', 'female', 'genderless', 'unknown']}
        placeholder={'Gender'}
      />
      <Select callback={setStatus} options={['alive', 'dead', 'unknown']} placeholder={'Status'} />
    </div>
  )
}
