import Link from 'next/link'
import styles from './menubar.module.scss'

type MenuBarProps = {
  activeTab: "Home" | "Work" | "About"
}

export function VMenuBar(props: MenuBarProps) {
  return (
    <nav className={styles.menuBar}>
      <Link href={`/`}>
        <a className={styles.title}>
          <div className={styles.squareInitials}>
            OH
          </div>
          <h3 className={styles.name}>
            Omer Herrera
          </h3>
        </a>
      </Link>
      <Link href={`/`}>
        <a className={styles.tab}>
          <h3 style={props.activeTab === "Home" ? {color: "#90a0d9"} : {color: "#D5D5D5"}}>
            Home
          </h3>
        </a>
      </Link>
      <Link href={`/work`}>
        <a className={styles.tab}>
          <h3 style={props.activeTab === "Work" ? {color: "#90a0d9"} : {color: "#D5D5D5"}}>
            Work
          </h3>
        </a>
      </Link>
      <Link href={`/about`}>
        <a className={styles.tab}>
          <h3 style={props.activeTab === "About" ? {color: "#90a0d9"} : {color: "#D5D5D5"}}>
            About
          </h3>
        </a>
      </Link>
    </nav>
  )
}