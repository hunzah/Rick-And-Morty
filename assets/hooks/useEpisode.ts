import { useEffect } from 'react'

import { getEpisode } from '@/assets/api'
import { EpisodeType } from '@/assets/api/types'
import { useRouter } from 'next/router'

type PropsType = {
  setEpisode: (episode: EpisodeType) => void
}
export const useEpisode = ({ setEpisode }: PropsType) => {
  const router = useRouter()
  const id = router.query.id as string

  useEffect(() => {
    if (id) {
      const fetchEpisode = async () => {
        const fetchedLocation = await getEpisode({ id })

        setEpisode(fetchedLocation)
      }

      fetchEpisode()
    }
  }, [id, setEpisode])
}
