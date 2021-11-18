import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Fade } from "react-awesome-reveal"
import {
  VFooter,
  VMainHeader,
  VMenuBar,
} from '../../utils'
import {
  chevronDown,
  profilePicture
} from '../../assets'
import styles from './home.module.scss'
import { track } from './../../utils/analytics'

export default function VHome() {
  track('Home');
  return (
    <div className={styles.homeContainer}>
      <Head>
        <title>Omer Herrera</title>
        <meta name="description" content="This is my portfolio page. The purpose of this page is to introduce my person, my coding style, and show off a little bit of my web development skills." />
        <meta name="author" content="Omer Herrera"/>
        <meta name="keywords" content="Omer, Herrera, Herera, Portfolio, Frontend"/>
        <meta property="og:image" content="https://omher.dev/portfolioPage.png" key="ogimage"/>
        <link rel="shortcut icon" href="/favicon.ico?" type="image/x-icon"/>
      </Head>
      <VMenuBar activeTab="Home"/>
      <div className={styles.content}>
        <div className={styles.intro}>
          <div className={styles.introduction}>
            <VMainHeader/>
            <div className={styles.profilePicture}>
              <Image
                alt="Profile picture of Omer Herrera."
                src={profilePicture}/>
            </div>
          </div>
          <div className={styles.swipeDownIcon}>
            <Image
              alt="Chevron down icon."
              src={chevronDown}
              width="40px"
              height="15px"/>
          </div>
        </div>
        <div className={styles.workHistory}>
          <div className={styles.linkBox}>
            <Fade>
              <h1 className={styles.linkBoxTitle}>Work<br/>History</h1>
              <h2 className={styles.linkBoxTextContent}>Here you can find out more about the companies I've collaborated with, projects I've been part of and the technologies I use every day.</h2>
              <Link href={`/work/work`}>
                <a className={styles.linkBoxButton}>
                  Check out my work history
                </a>
              </Link>
            </Fade>
          </div>
          <div className={styles.workHistoryBackground}/>
        </div>
        <div className={styles.personalProjects}>
            <div className={styles.linkBox}>
              <Fade>
                <h1 className={styles.linkBoxTitle}>About me</h1>
                <h2 className={styles.linkBoxTextContent}>Here you can find out more about me, my hobbies and personal project I'm currently working on.</h2>
                <Link href={`/about/about`}>
                  <a className={styles.linkBoxButton}>
                    Get to know more about me
                  </a>
                </Link>
              </Fade>
            </div>
          <div className={styles.personalProjectsBackground}/>
        </div>
      </div>
      <VFooter/>
    </div>
  )
}
