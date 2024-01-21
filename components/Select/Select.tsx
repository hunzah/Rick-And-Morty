// import { Typography, TypographyVariantTypes } from 'components/ui/typography'
import * as SelectRadix from '@radix-ui/react-select'
import { clsx } from 'clsx'
import Image from 'next/image'

import s from './select.module.scss'

import selectArrow from './assets/icons/arrow.svg'

type PropsType = {
  buttonClassName?: string
  callback?: (e: string) => void
  contentClassName?: string
  defaultValue?: number
  isDisabled?: boolean
  itemClassName?: string
  name?: string
  options: number[] | string[]
  placeholder?: string
  required?: boolean
  value?: string
}

type SelectItemPropsType = {
  className: string
  options: number[] | string[]
}

export const Select = (props: PropsType) => {
  const {
    buttonClassName,
    callback,
    contentClassName,
    isDisabled = false,
    itemClassName,
    options,
    required,

    value,
  } = props

  const classNames = {
    button: clsx(s.button, isDisabled && s.disabled, buttonClassName),
    content: clsx(s.content, contentClassName && contentClassName),
    item: clsx(s.item, itemClassName && itemClassName),
  }

  const setSelectedValueHandler = (e: string) => {
    // callback(e)
    console.log(e)
  }

  return (
    <SelectRadix.Root
      disabled={isDisabled}
      onValueChange={e => setSelectedValueHandler(e.toString())}
      required={required}
      value={value ? value : '10'}
    >
      <SelectRadix.Trigger className={classNames.button}>
        <SelectRadix.Value
          /*placeholder={defaultValue ? defaultValue : options[0]}*/
          className={s.placeholder}
        />
        <Image alt={'select-arrow-icon'} className={s.arrowImg} src={selectArrow} />
      </SelectRadix.Trigger>

      <SelectRadix.Content className={classNames.content} collisionPadding={0} position={'popper'}>
        <SelectRadix.Group>
          <SelectRadix.Label>
            <SelectItem className={classNames.item} options={options} />
          </SelectRadix.Label>
        </SelectRadix.Group>
      </SelectRadix.Content>
    </SelectRadix.Root>
  )
}
const SelectItem = (props: SelectItemPropsType) => {
  const { className, options, ...rest } = props

  return (
    <>
      {options.map((option, i) => (
        <SelectRadix.Item className={className} key={i} value={option.toString()} {...rest}>
          <SelectRadix.ItemText>{option}</SelectRadix.ItemText>
        </SelectRadix.Item>
      ))}
    </>
  )
}
