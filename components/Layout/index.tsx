import React, { PropsWithChildren, ReactElement } from 'react'

import { NextPage } from 'next'

import { Navbar } from '../UI/Navbar'

export const Layout: NextPage<PropsWithChildren> = props => {
  const { children } = props

  return (
    <main>
      <Navbar />
      {children}
    </main>
  )
}

export const getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}
