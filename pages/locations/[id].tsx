import React, { useState } from 'react'

import { LocationType } from '@/assets/api/types'
import { useLocation } from '@/assets/hooks/useLocation'
import { HeadMeta } from '@/components/HeadMeta'
import { getLayout } from '@/components/Layout'
import { LocationCard } from '@/components/UI/LocationCard'

function Character() {
  const [location, setLocation] = useState<LocationType | undefined>(undefined)

  useLocation({ setLocation })
  if (!location) {
    return null
  }

  return (
    <>
      <HeadMeta title={'Location'} />
      <LocationCard location={location && location} />
      <div>
        {location.residents.map((resident, i) => (
          <a href={`/characters/${resident.match(/\d+$/)}`} key={i}>
            {resident}
          </a>
        ))}
      </div>
    </>
  )
}

Character.getLayout = getLayout

export default Character
