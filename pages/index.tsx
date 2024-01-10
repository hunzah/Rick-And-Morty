import { HeadMeta } from '@/components/head-meta/HeadMeta'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <HeadMeta title={'Create Next App'} />
}
