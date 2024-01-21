import React from 'react'

import { Select } from '@/components/Select/Select'

type PropsType = {
  setGender: (name: string) => void
  setStatus: (status: string) => void
}
export const FilterCharacters = (props: PropsType) => {
  const { setGender, setStatus } = props

  return (
    <div>
      <Select
        callback={setGender}
        options={['male', 'female', 'genderless', 'unknown']}
        placeholder={'Gender'}
      />
      <Select callback={setStatus} options={['alive', 'dead', 'unknown']} placeholder={'Status'} />
    </div>
  )
}
