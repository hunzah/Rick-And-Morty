import React from 'react'

import linkedin from '@/public/linkedin.svg'
import nextJsImage from '@/public/next.svg'
import telegram from '@/public/telegram.svg'
import Image from 'next/image'
import Link from 'next/link'

import s from './footer.module.scss'

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <Link href={'https://nextjs.org'}>
        This application is built with
        <Image alt={'next.svg'} src={nextJsImage} width={80} />
      </Link>
      <span>All rights reserved</span>
      <div>
        <Link href={'https://nextjs.org'}>
          <Image alt={'next.svg'} src={linkedin} width={40} />
        </Link>
        <Link href={'https://nextjs.org'}>
          <Image alt={'next.svg'} src={telegram} width={40} />
        </Link>
      </div>
    </footer>
  )
}
