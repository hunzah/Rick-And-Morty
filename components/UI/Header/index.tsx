import React from 'react'

import rickAndMortyImage from '@/public/Rick_and_Morty.svg'
import nextJsImage from '@/public/next.svg'
import Image from 'next/image'
import Link from 'next/link'

import s from './header.module.scss'

export const Header = () => {
  return (
    <header className={s.header}>
      <Image alt={'next.svg'} src={nextJsImage} width={80} />
      <Link href={'/'}>
        <Image alt={'Rick_and_Morty.svg'} src={rickAndMortyImage} width={300} />
      </Link>
      <button>change theme</button>
    </header>
  )
}
