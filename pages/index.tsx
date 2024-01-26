import { HeadMeta } from '@/components/HeadMeta'
import { getLayout } from '@/components/Layout'

import s from './main.module.scss'

function Home() {
  return (
    <>
      <HeadMeta title={'Create Next App'} />
      <div className={s.container}>
        Welcome to our Rick and Morty Info Hub! Explore the multiverse with our comprehensive guide
        to the beloved animated series "Rick and Morty." Dive into a universe filled with quirky
        characters, bizarre locations, and mind-bending episodes. Discover every character that has
        graced the screen, from the eccentric inventor Rick Sanchez to the ever-curious Morty Smith.
        Learn about the diverse range of locations, from the sprawling Citadel of Ricks to the
        chaotic dimension of Gazorpazorp. Explore each episode and uncover the hidden references,
        inside jokes, and thought-provoking themes that make "Rick and Morty" a cultural phenomenon.
        Whether you're a die-hard fan or a newcomer to the series, our application provides an
        immersive experience that celebrates the creativity and wit of "Rick and Morty." Get ready
        for adventure, humor, and endless possibilities as you journey through the multiverse! Start
        exploring now and embark on an epic Rick and Morty adventure like no other.
      </div>
    </>
  )
}

Home.getLayout = getLayout

export default Home
