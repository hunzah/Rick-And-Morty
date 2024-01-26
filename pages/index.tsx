import { HeadMeta } from '@/components/HeadMeta'
import { getLayout } from '@/components/Layout'

import s from './main.module.scss'

function Home() {
  return (
    <>
      <HeadMeta title={'Create Next App'} />
      <div className={s.container}>da</div>
    </>
  )
}

Home.getLayout = getLayout

export default Home
