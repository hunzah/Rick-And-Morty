import { useEffect } from 'react'

import { getEpisodes } from '@/assets/api'
import { EpisodeType, ResponseType } from '@/assets/api/types'

type PropsType = {
  currentPage: number
  name: string
  setCurrentPage: (page: number) => void
  setFilteredEpisodes: (episodes: ResponseType<EpisodeType>) => void
  setName: (name: string) => void
}
export const useEpisodes = (props: PropsType) => {
  const { currentPage, name, setCurrentPage, setFilteredEpisodes, setName } = props
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const updatedLocations = await getEpisodes({ name, page: currentPage })

        setFilteredEpisodes(updatedLocations)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [currentPage, name, setFilteredEpisodes])

  const filterByName = (name: string) => {
    setName(name)
    setCurrentPage(1)
  }

  return { filterByName, paginate }
}
