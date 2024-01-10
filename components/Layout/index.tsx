import React, { PropsWithChildren, ReactElement } from 'react'

import { Navbar } from '@/components/Navbar'
import { NextPage } from 'next'

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
