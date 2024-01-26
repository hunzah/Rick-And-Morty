import React, { PropsWithChildren, ReactElement } from 'react'

import rickAndMortyImage from '@/public/Rick_and_Morty.svg'
import nextJsImage from '@/public/next.svg'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import s from './layout.module.scss'

import { Navbar } from '../UI/Navbar'

export const Layout: NextPage<PropsWithChildren> = props => {
  const { children } = props

  return (
    <div className={s.content}>
      <Header />
      <main className={s.main}>
        <Navbar />
        {children}
      </main>
      <footer className={s.footer}>footer</footer>
    </div>
  )
}

export const getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

const Header = () => {
  return (
    <header className={s.header}>
      <Link href={'/'}>
        <Image alt={'Rick_and_Morty.svg'} src={rickAndMortyImage} width={300} />
      </Link>
      <Image alt={'next.svg'} src={nextJsImage} width={100} />
    </header>
  )
}
