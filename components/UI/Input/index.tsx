import React, { ChangeEvent, FC, ReactNode, useEffect, useState } from 'react'

import s from './input.module.scss'

interface PropsType {
  alias: string
  className?: string
  debounce: number
  errorText?: string
  onChange: (value: string) => void
  placeholder: string
}

export const Input: FC<PropsType> = props => {
  const { alias, className, debounce, errorText, onChange, placeholder, ...rest } = props
  const [inputValue, setInputValue] = useState<string>('')

  useEffect(() => {
    const timerId = setTimeout(() => {
      onChange(inputValue)
    }, debounce)

    return () => {
      clearTimeout(timerId)
    }
  }, [inputValue])

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <input
      className={`${s.input} ${className}`}
      name={alias}
      onChange={onChangeHandler}
      placeholder={placeholder}
      {...rest}
    />
  )
}
