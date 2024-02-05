import React, { PropsWithChildren, ReactElement } from 'react'

import { Footer } from '@/components/UI/Footer'
import { Header } from '@/components/UI/Header'
import { NextPage } from 'next'

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
