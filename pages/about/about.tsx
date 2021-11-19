import Head from 'next/head'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { track } from './../../utils/analytics'
import {
  VMenuBar,
  VPhotoGrid,
  VFooter
} from '../../utils'
import styles from './about.module.scss'

export default function VAbout() {
  track('About');
  return (
    <div className={styles.aboutContainer}>
      <Head>
        <title>About me</title>
        <meta name="description" content="Omer Herrera Portfolio Page" />
        <meta name="author" content="Omer Herrera"/>
        <meta name="keywords" content="Omer, Herrera, Herera, Portfolio, Frontend"/>
        <link rel="shortcut icon" href="/favicon.ico?" type="image/x-icon"/>
      </Head>
      <VMenuBar activeTab="About"/>
      <div className={styles.content}>
        <div className={styles.summary}>
          <Fade>
            <h1>
              Long story short about me
            </h1>
            <h2>
              I have a few passions in my life one is to create.
              I love to create software, especially web applications, 3d Graphic design and making 3d animations give me a lot of fun as well.
              Lately got into the photography world.
              Whenever I have some spare time, I try to dedicate it to learning new technologies, spending my time
              with friends and family. To relax I usually watch movies/tv series.
              I also pay high attention to my self-development, in order to be up to date with current trends on the market.
              Here are some example of my 3d graphic works, using blender program
            </h2>
          </Fade>
        </div>
        <div className={styles.photoGallery}>
          <Fade>
          <VPhotoGrid />
        </Fade>
        </div>
      </div>
      <VFooter/>
    </div>
  )
}