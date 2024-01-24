import React, { ChangeEvent, FC, ReactNode, useEffect, useState } from 'react'

interface PropsType {
  alias: string
  children?: ReactNode
  className?: string
  debounce: number
  error?: boolean
  errorText?: string
  onChange: (value: string) => void
}

export const Input: FC<PropsType> = props => {
  const { alias, children, debounce, error, errorText, onChange, ...rest } = props
  const [inputValue, setInputValue] = useState<string>('')

  useEffect(() => {
    const timerId = setTimeout(() => {
      onChange(inputValue)
    }, debounce)

    return () => {
      clearTimeout(timerId)
    }
  }, [debounce, inputValue, onChange])

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <div>
      <input name={alias} onChange={onChangeHandler} placeholder={' '} {...rest} />
      <label htmlFor={alias}>{error ? errorText : children}</label>
    </div>
  )
}
