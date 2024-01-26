import React from 'react'

import Link from 'next/link'

import s from './navbar.module.scss'

export const Navbar = () => {
  return (
    <div className={s.container}>
      <Link href={'/'}>Main</Link>
      <Link href={'/characters'}>Characters</Link>
      <Link href={'/locations'}>Locations</Link>
      <Link href={'/episodes'}>Episodes</Link>
    </div>
  )
}
