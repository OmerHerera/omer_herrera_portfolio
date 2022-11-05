import Image from 'next/image'
import {
  appsflyerLogo, livePersonLogo, sizmekLogo, bizzaboLogo, dyLogo
}from './../assets'
import styles from './timelinegrid.module.scss'
export interface PositionProps {
  company: string;
  title: string;
  date: string;
  description?: React.ReactNode;
};

import cn from 'classnames';

function getLogo(company: string): StaticImageData {
  switch (company) {
    case "appsflyer":
      return appsflyerLogo;
    case "LivePerson":
      return livePersonLogo;
    case "Sizmek":
      return sizmekLogo;
    case "Bizzabo":
      return bizzaboLogo;
    case "Dynamic Yield":
      return dyLogo;
  }
  return appsflyerLogo;
}
export function PositionCard({ company, title, date, description }: PositionProps) {
  return (
    <div
      className={styles.timelineGridItemCard}>
        <div className={styles.cardContent}>
          <div className={styles.cardContentHeader}>
            <div className={styles.companyLogo}>
            <Image
              alt={`{company} logo.`}
                src={getLogo(company)}
                height={50}
                width={50} />
            </div>
            <div className={styles.companyInfo}>
            <h1 className={styles.companyTitle}>{ company }</h1>
            <h2 className={styles.cardContentDetails}>{ title }</h2>
            <h2 className={styles.cardContentDetails}>{ date}</h2></div>
          </div>
        <p className={styles.cardContentDescription}>
          {description}
        </p>
        </div>
      </div>
  )
}