import React, { PropsWithChildren, ReactElement } from 'react'

import { Header } from '@/components/UI/Header'
import nextJsImage from '@/public/next.svg'
import { NextPage } from 'next'
import Image from 'next/image'

import s from './layout.module.scss'

import { Navbar } from '../Navbar'

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

const Footer = () => {
  return (
    <footer className={s.footer}>
      <Image alt={'next.svg'} src={nextJsImage} width={80} />
      footer
    </footer>
  )
}
