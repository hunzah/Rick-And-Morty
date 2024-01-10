import React from 'react'

import Link from 'next/link'

export const Navbar = () => {
  return (
    <div>
      <Link href={'/'}>Main</Link>
      <Link href={'/characters'}>Characters</Link>
    </div>
  )
}
