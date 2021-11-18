import React from 'react'
import styles from './mainheader.module.scss'
import { useTypedText } from '../typingtext'

export function VMainHeader() {
  return (
    <div className={styles.aboutInfo}>
      <h1 className={styles.header}>
        {useTypedText("Hello everyone!", 50)}
        <br/>
        {useTypedText("I'm Omer.", 50, 200)}
      </h1>
      <h2>
        {useTypedText("Hands-on engineer focusing on web technologies, with a diverse background that straddles both industry and research. I love learning new thechnologies/languages, dealing with all web thechnologies, and creating things that are useful for others.", 30, 350)}
      </h2>
    </div>
  )
}