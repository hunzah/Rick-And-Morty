import React, { useState } from 'react'

import { EpisodeType } from '@/assets/api/types'
import { useEpisode } from '@/assets/hooks/useEpisode'
import { HeadMeta } from '@/components/HeadMeta'
import { getLayout } from '@/components/Layout'
import { EpisodeCard } from '@/components/UI/EpisodeCard'

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
      <br />
      <a href={'https://www.adultswim.com/videos/rick-and-morty'}> go watch)</a>
    </>
  )
}

Episode.getLayout = getLayout
export default Episode
