import { HeadMeta } from '@/components/HeadMeta'
import { Layout, getLayout } from '@/components/Layout'

function Home() {
  return (
    <>
      <HeadMeta title={'Create Next App'} />
    </>
  )
}

Home.getLayout = getLayout

export default Home
