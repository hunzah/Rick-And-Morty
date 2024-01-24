import { useEffect } from 'react'

import { getLocations } from '@/assets/api'
import { LocationType, ResponseType } from '@/assets/api/types'

type PropsType = {
  currentPage: number
  name: string
  setCurrentPage: (page: number) => void
  setFilteredLocations: (locations: ResponseType<LocationType>) => void
  setName: (name: string) => void
}
export const useLocations = (props: PropsType) => {
  const { currentPage, name, setCurrentPage, setFilteredLocations, setName } = props
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const updatedLocations = await getLocations({ name, page: currentPage })

        setFilteredLocations(updatedLocations)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [currentPage, name, setFilteredLocations])

  const filterByName = (name: string) => {
    setName(name)
    setCurrentPage(1)
  }

  return { filterByName, paginate }
}
