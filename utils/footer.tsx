import { VIcon } from './icon'
import {
  twitterLogo,
  twitterLogoHover,
  linkedInLogo,
  linkedInLogoHover,
  gitHubLogo,
  gitHubLogoHover
} from '../assets'
import styles from './footer.module.scss'

export function VFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.goUpSquare}/>
      <h4 className={styles.copyrights}>
        ©2021
        <br/>
        Build with <span>Next.js/TypeSript</span>
      </h4>
      <div className={styles.icons}>
        <VIcon
          defaulIcon={linkedInLogo}
          onHoverIcon={linkedInLogoHover}
          href="https://www.linkedin.com/in/omer-herera-15846a6"
          height="30px"
          width="30px"
          name="LinkedIn"/>
        <VIcon
          defaulIcon={twitterLogo}
          onHoverIcon={twitterLogoHover}
          href="https://twitter.com/Omer_He"
          height="30px"
          width="30px"
          name="Twitter"/>
        <VIcon
          defaulIcon={gitHubLogo}
          onHoverIcon={gitHubLogoHover}
          href="https://github.com/OmerHerera"
          height="30px"
          width="30px"
          name="GitHub"/>
      </div>
    </footer>
  )
}