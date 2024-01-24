import { useEffect } from 'react'

import { getLocation } from '@/assets/api'
import { LocationType } from '@/assets/api/types'
import { useRouter } from 'next/router'

type PropsType = {
  setLocation: (location: LocationType) => void
}
export const useLocation = ({ setLocation }: PropsType) => {
  const router = useRouter()
  const id = router.query.id as string

  useEffect(() => {
    if (id) {
      const fetchLocation = async () => {
        const fetchedLocation = await getLocation({ id })

        setLocation(fetchedLocation)
      }

      fetchLocation()
    }
  }, [id, setLocation])
}
