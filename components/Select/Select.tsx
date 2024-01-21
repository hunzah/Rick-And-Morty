import React from 'react'

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
  ref?: React.Ref<string>
  required?: boolean
  value?: string
}
type ItemPropsType = {
  className: string
  options: number[] | string[]
}
export const Select = (props: PropsType) => {
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
      <SelectRadix.Trigger className={`${s.button} ${isDisabled && s.disabled}`}>
        <SelectRadix.Value className={s.placeholder} placeholder={placeholder ? placeholder : ''} />
        <Image alt={'select-arrow-icon'} className={s.arrowImg} src={selectArrow} />
      </SelectRadix.Trigger>

      <SelectRadix.Content className={s.content} position={'popper'}>
        <SelectRadix.Viewport className={s.viewport}>
          <SelectRadix.Group>
            <SelectItem className={s.item} options={options} ref={ref} />
          </SelectRadix.Group>
        </SelectRadix.Viewport>
      </SelectRadix.Content>
    </SelectRadix.Root>
  )
}

const SelectItem = React.forwardRef(({ className, options }: ItemPropsType, forwardedRef) => {
  return (
    <>
      {options.map((option, i) => (
        <SelectRadix.Item
          className={className}
          key={i}
          // ref={forwardedRef}
          value={option.toString()}
        >
          <SelectRadix.ItemText>{option}</SelectRadix.ItemText>
        </SelectRadix.Item>
      ))}
    </>
  )
})
