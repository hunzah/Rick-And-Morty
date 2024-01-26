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
      <Footer />
    </div>
  )
}

export const getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

const Header = () => {
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
const Footer = () => {
  return <footer className={s.footer}>footer</footer>
}
