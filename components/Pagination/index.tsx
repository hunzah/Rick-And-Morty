import { useState } from 'react'

import { PagLogic } from './Paglogic'
// import { Select } from '@/components/ui/select'
// import { Typography } from '@/components/ui/typography'

import s from './pagination.module.scss'

type PropsType = {
  currentPage: number
  elements: number
  itemsPerPage?: number
  setCurrentPage: (currentPage: number) => void
  setItemsPerPage: (value: number) => void
}

export const Pagination = (props: PropsType) => {
  const { currentPage, elements, itemsPerPage, setCurrentPage, setItemsPerPage } = props
  const [perPage, setPerPage] = useState(itemsPerPage ? itemsPerPage : 10)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
  // const setPerPageHandler = (value: number) => {
  //   setItemsPerPage(value)
  //   setPerPage(value)
  // }

  const selectCallback = (e: string) => {
    setPerPage(Number(e))
    setItemsPerPage(Number(e))
    setCurrentPage(1)
  }

  return (
    <div className={s.root}>
      <PagLogic
        currentPage={currentPage}
        elements={elements}
        elementsPerPage={perPage}
        onChange={paginate}
        setCurrentPage={setCurrentPage}
        totalElements={elements}
      />
      {/*<div className={s.selectContainer}>*/}
      {/*  <span>Показать</span>*/}
      {/*<Select*/}
      {/*  callback={selectCallback}*/}
      {/*  options={[10, 20, 30, 50, 100]}*/}
      {/*  textStyle={'body2'}*/}
      {/*  value={`${itemsPerPage}`}*/}
      {/*/>*/}
      {/*<span>на странице</span>*/}
      {/*</div>*/}
    </div>
  )
}
