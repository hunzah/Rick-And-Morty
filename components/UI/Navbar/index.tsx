import { useEffect, useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import s from './navbar.module.scss'

export const Navbar = () => {
  const router = useRouter()
  const [activeItem, setActiveItem] = useState<string>('/')

  useEffect(() => {
    setActiveItem(router.pathname)
  }, [router.pathname])

  return (
    <div className={s.container}>
      <Link className={activeItem === '/' ? s.active : ''} href={'/'}>
        Main
      </Link>
      <Link className={activeItem === '/characters' ? s.active : ''} href={'/characters'}>
        Characters(826)
      </Link>
      <Link className={activeItem === '/locations' ? s.active : ''} href={'/locations'}>
        Locations(125)
      </Link>
      <Link className={activeItem === '/episodes' ? s.active : ''} href={'/episodes'}>
        Episodes(51)
      </Link>
    </div>
  )
}
