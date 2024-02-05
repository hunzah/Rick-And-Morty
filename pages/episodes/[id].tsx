import React, { useState } from 'react'

import { EpisodeType } from '@/assets/api/types'
import { useEpisode } from '@/assets/hooks/useEpisode'
import { HeadMeta } from '@/components/HeadMeta'
import { EpisodeCard } from '@/components/UI/EpisodeCard'
import { getLayout } from '@/components/UI/Layout'

function Episode() {
  const [episode, setEpisode] = useState<EpisodeType | null>(null)

  useEpisode({ setEpisode })
  if (!episode) {
    return null
  }

  return (
    <>
      <HeadMeta title={'Episode'} />
      <EpisodeCard episode={episode && episode} />
    </>
  )
}

Episode.getLayout = getLayout
export default Episode
