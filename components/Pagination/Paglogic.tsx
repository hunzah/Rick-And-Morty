import { usePagination } from '@/components/Pagination/assets/hooks/usePagination'
import Image from 'next/image'

import s from './pagination.module.scss'

import arrowLeft from './assets/icons/arrow-left.svg'
import arrowRight from './assets/icons/arrow-right.svg'

type PropsType = {
  currentPage: number
  elementsPerPage: number
  onChange: (page: number) => void
  setCurrentPage: (currentPage: number) => void
  totalElements: number
}

export const PagLogic = (props: PropsType) => {
  const { currentPage, elementsPerPage, onChange, setCurrentPage, totalElements } = props

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  const totalPages = Math.ceil(totalElements / elementsPerPage)

  // Функции для кнопок
  const prev = () => {
    setCurrentPage(currentPage - 1)
  }

  const next = () => {
    setCurrentPage(currentPage + 1)
  }

  const { pageNumbers } = usePagination({ currentPage, totalPages })

  return (
    <div className={s.pagination}>
      <PrevButton callback={prev} disabled={currentPage === 1} />
      <ul className={s.list}>
        {pageNumbers.map((number: number | string, i: number) => (
          <li className={s.li} key={i}>
            {typeof number === 'number' ? (
              <a
                className={currentPage === number ? s.selected : ''}
                onClick={() => onChange(number)}
              >
                {number}
              </a>
            ) : (
              <span>{number}</span>
            )}
          </li>
        ))}
      </ul>
      <NextButton callback={next} disabled={currentPage === totalPages} />
    </div>
  )
}

type ButtonsPropsType = {
  callback: () => void
  disabled: boolean
}

const PrevButton = ({ callback, disabled }: ButtonsPropsType) => {
  return (
    <button className={s.button} disabled={disabled} onClick={callback}>
      <Image alt={'left-arrow'} src={arrowLeft} />
    </button>
  )
}

const NextButton = ({ callback, disabled }: ButtonsPropsType) => {
  return (
    <button className={s.button} disabled={disabled} onClick={callback}>
      <Image alt={'Next'} src={arrowRight} />
    </button>
  )
}
