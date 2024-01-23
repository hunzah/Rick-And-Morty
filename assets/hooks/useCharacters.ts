import { useEffect } from 'react'

import { getCharacters } from '@/assets/api'
import { CharacterType, ResponseType } from '@/assets/api/types'

type PropsType = {
  currentPage: number
  gender: string
  name: string
  setCurrentPage: (page: number) => void
  setFilteredCharacters: (characters: ResponseType<CharacterType>) => void
  setGender: (gender: string) => void
  setName: (name: string) => void
  setStatus: (status: string) => void
  status: string
}
export const useCharacters = (props: PropsType) => {
  const {
    currentPage,
    gender,
    name,
    setCurrentPage,
    setFilteredCharacters,
    setGender,
    setName,
    setStatus,
    status,
  } = props
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const updatedCharacters = await getCharacters({ gender, name, page: currentPage, status })

        setFilteredCharacters(updatedCharacters)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [gender, status, name, currentPage, setFilteredCharacters])

  const filterByGender = (gender: string) => {
    setGender(gender)
    setCurrentPage(1)
  }

  const filterByStatus = (status: string) => {
    setStatus(status)
    setCurrentPage(1)
  }
  const filterByName = (name: string) => {
    setName(name)
    setCurrentPage(1)
  }

  return { filterByGender, filterByName, filterByStatus, paginate }
}
