import { useState } from 'react'

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
      <HeadMeta title={'Character'} />
      <LocationCard location={location && location} />
    </>
  )
}

Character.getLayout = getLayout

export default Character
