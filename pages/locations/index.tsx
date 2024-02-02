import { useState } from 'react'

import { getLocations } from '@/assets/api'
import { LocationType, ResponseType } from '@/assets/api/types'
import { useLocations } from '@/assets/hooks/useLocations'
import { HeadMeta } from '@/components/HeadMeta'
import { FilterLocations } from '@/components/UI/FilterLocations'
import { getLayout } from '@/components/UI/Layout'
import { LocationCard } from '@/components/UI/LocationCard'
import { Pagination } from '@/components/UI/Pagination'
import Link from 'next/link'

import s from './locations.module.scss'

export const getStaticProps = async () => {
  const locations = await getLocations()

  if (!locations) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      locations,
    },
  }
}
type PropsType = {
  locations: ResponseType<LocationType>
}

function Locations(props: PropsType) {
  const { locations } = props
  const [filteredLocations, setFilteredLocations] = useState<ResponseType<LocationType>>(locations)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [name, setName] = useState<string>('')

  const { filterByName, paginate } = useLocations({
    currentPage,
    name,
    setCurrentPage,
    setFilteredLocations,
    setName,
  })

  const locationItems = filteredLocations?.results.map(location => (
    <li key={location.id}>
      <Link href={`/locations/${location.id}`}>
        <LocationCard location={location} />
      </Link>
    </li>
  ))

  return (
    <>
      <HeadMeta title={'Locations'} />
      <div className={s.container}>
        <FilterLocations searchByName={filterByName} />
        <ul className={s.locations}>{locationItems}</ul>
        {locations && (
          <Pagination
            currentPage={currentPage}
            elementsPerPage={20}
            onChange={paginate}
            setCurrentPage={setCurrentPage}
            totalElements={filteredLocations?.info.count}
          />
        )}
      </div>
    </>
  )
}

Locations.getLayout = getLayout

export default Locations
