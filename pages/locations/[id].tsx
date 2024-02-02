import React, { useState } from 'react'

import { LocationType } from '@/assets/api/types'
import { useLocation } from '@/assets/hooks/useLocation'
import { HeadMeta } from '@/components/HeadMeta'
import { getLayout } from '@/components/UI/Layout'
import { LocationCard } from '@/components/UI/LocationCard'
import { linkId } from '@/tools/regexes'
import Link from 'next/link'

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
          <Link href={`/characters/${resident.match(linkId)}`} key={i}>
            {resident}
          </Link>
        ))}
      </div>
    </>
  )
}

Character.getLayout = getLayout

export default Character
