import React, { FC, Ref } from 'react'

import * as SelectRadix from '@radix-ui/react-select'
import Image from 'next/image'

import s from './select.module.scss'

import selectArrow from './assets/icons/arrow.svg'

type PropsType = {
  callback: (e: string) => void
  isDisabled?: boolean
  name?: string
  options: number[] | string[]
  placeholder?: string
  ref?: Ref<HTMLButtonElement>
  required?: boolean
  value?: string
}
type ItemPropsType = {
  className: string
  options: number[] | string[]
}
export const Select: FC<PropsType> = props => {
  const { callback, isDisabled = false, options, placeholder, ref, required, value } = props

  const setSelectedValueHandler = (e: string) => {
    callback(e)
  }

  return (
    <SelectRadix.Root
      disabled={isDisabled}
      onValueChange={e => setSelectedValueHandler(e.toString())}
      required={required}
    >
      <SelectRadix.Trigger className={`${s.button} ${isDisabled && s.disabled}`} ref={ref}>
        <SelectRadix.Value className={s.placeholder} placeholder={placeholder ? placeholder : ''} />
        <Image alt={'select-arrow-icon'} className={s.arrowImg} src={selectArrow} />
      </SelectRadix.Trigger>

      <SelectRadix.Content className={s.content} position={'popper'}>
        <SelectRadix.Viewport className={s.viewport}>
          <SelectRadix.Group>
            <SelectItem className={s.item} options={options} />
          </SelectRadix.Group>
        </SelectRadix.Viewport>
      </SelectRadix.Content>
    </SelectRadix.Root>
  )
}

const SelectItem = ({ className, options }: ItemPropsType) => {
  return (
    <>
      {options.map((option, i) => (
        <SelectRadix.Item className={className} key={i} value={option.toString()}>
          <SelectRadix.ItemText>{option}</SelectRadix.ItemText>
        </SelectRadix.Item>
      ))}
    </>
  )
}
