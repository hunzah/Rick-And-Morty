import React from 'react'

import rickAndMortyImage from '@/public/Rick_and_Morty.svg'
import buttonDark from '@/public/button-dark.svg'
import logo from '@/public/logo-dark.svg'
import Image from 'next/image'
import Link from 'next/link'

import s from './header.module.scss'

export const Header = () => {
  return (
    <header className={s.header}>
      <Image alt={'next.svg'} src={logo} width={80} />
      <Link href={'/'}>
        <Image alt={'Rick_and_Morty.svg'} src={rickAndMortyImage} width={300} />
      </Link>

      <Image
        alt={'Rick_and_Morty.svg'}
        onClick={() => alert('click')}
        src={buttonDark}
        width={100}
      />
    </header>
  )
}
