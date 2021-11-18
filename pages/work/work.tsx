import React from 'react'
import Head from 'next/head'
import { Fade } from 'react-awesome-reveal'
import { track } from './../../utils/analytics'
import {
  VFooter,
  VMenuBar,
  VTimelineGrid
} from '../../utils'
import styles from './work.module.scss'

export default function VWork() {
  track('Work');
  return(
    <div className={styles.workContainer}>
      <Head>
        <title>Work history</title>
        <meta name="description" content="Omer Herrera Portfolio Page" />
        <meta name="author" content="Omer Herrera"/>
        <meta name="keywords" content="Omer, Herrera, Herera, Portfolio, Frontend"/>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
      </Head>
      <VMenuBar activeTab="Work"/>
      <div className={styles.content}>
        <div className={styles.summary}>
          <Fade>
            <h1>
              My work history
            </h1>
          </Fade>
        </div>
        <Fade>
          <div className={styles.timelineGridCotainer}>
            <VTimelineGrid/>
          </div>
        </Fade>
      </div>
      <VFooter/>
    </div>
  )
}