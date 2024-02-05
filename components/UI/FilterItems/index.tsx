import React from 'react'

import { Select } from '@/components/UI/Select/Select'

import s from './filter-characters.module.scss'

import { Input } from '../Input'

type PropsType = {
  searchByName: (name: string) => void
  setGender?: (gender: string) => void
  setStatus?: (status: string) => void
}
export const FilterItems = (props: PropsType) => {
  const { searchByName, setGender, setStatus } = props

  return (
    <div className={s.container}>
      {searchByName && (
        <Input
          alias={'filter-characters'}
          debounce={300}
          onChange={searchByName}
          placeholder={'Search'}
        />
      )}
      {setGender && (
        <Select
          callback={setGender}
          options={['male', 'female', 'genderless', 'unknown']}
          placeholder={'Gender'}
        />
      )}
      {setStatus && (
        <Select
          callback={setStatus}
          options={['alive', 'dead', 'unknown']}
          placeholder={'Status'}
        />
      )}
    </div>
  )
}
