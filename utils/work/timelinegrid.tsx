import Image from 'next/image'
import {
  appsflyerLogo,
  livePersonLogo,
  sizmekLogo
} from '../../assets'
import styles from './timelinegrid.module.scss'

export function VTimelineGrid() {
  return (
    <div className={styles.timelineGrid}>
      <div className={styles.timelineGridItemWide}>
        <h1>2021</h1>
        <div className={styles.timelinePoint} />
      </div>
      <div className={styles.timelineGridItemCard}>
        <h2 className={styles.hoverTip}>
          Hover to zoom.
        </h2>
        <div className={styles.cardContent}>
          <div className={styles.cardContentHeader}>
            <div className={styles.companyLogo}>
              <Image
                alt="Appsflyer logo."
                src={appsflyerLogo}
                height={50}
                width={50} />
            </div>
            <div className={styles.companyInfo}>
              <h1 className={styles.companyTitle}>Appsflyer</h1>
              <h2 className={styles.cardContentDetails}>Web Tech Lead Platform Team</h2>
              <h2 className={styles.cardContentDetails}>Feb 2020 - Nov 2021</h2>
            </div>
          </div>
          <p className={styles.cardContentDescription}>
            Part of Platform team that builds, deploy, monitor, and be on call for the platform components and underlying platform infrastructure. 
            <br />* Infrastructure and components used across R&D
            <br />* Monitoring and development of fault-tolerant and highly available infrastructure of projects. Нorizontal Scaling of services

            <br />* Documentation, guidance, and escort of developers across the organization
            <br />* Architecture using modern technologies/frameworks like GraphQL, TypeScript, NodeJS, React, webpack, Amazon AWS
            <br />* Modern CI/CD pipeline (Gitlab, Jenkins, Artifactory)
          </p>
          
        </div>
      </div>
      <div className={styles.timelineGridItemAdjoiningCard} />
      <div className={styles.timelineGridItemAdjoiningCard}/>
      <div className={styles.timelineGridItemCard}>
        <div className={styles.cardContent}>
          <div className={styles.cardContentHeader}>
            <div className={styles.companyLogo}>
              <Image
                alt="Appsflyer logo."
                src={appsflyerLogo}
                height={50}
                width={50} />
            </div>
            <div className={styles.companyInfo}>
              <h1 className={styles.companyTitle}>Appsflyer</h1>
              <h2 className={styles.cardContentDetails}>Front End Tech Lead Infra Team </h2>
              <h2 className={styles.cardContentDetails}>Mar 2016 - Feb 2020</h2></div>
          </div>
          <p className={styles.cardContentDescription}>
            Take part in the design and hands-on development of Appsflyer's Front-End infrastructure.
            <br />* Modules and components used across R&D
            <br />* Micro-services architecture using modern technologies/frameworks like NodeJS, React, SASS, webpack, Amazon AWS
            <br />*Modern CI/CD pipeline (Gitlab, Jenkins, Artifactory)
            <br />*Documentation, guidance and escort of developers across the organization
          
          </p>
        </div>
      </div>
      <div className={styles.timelineGridItemCard}>
        <div className={styles.cardContent}>
          <div className={styles.cardContentHeader}>
            <div className={styles.companyLogo}>
              <Image
                alt="LivePerson logo."
                src={livePersonLogo}
                height={50}
                width={50} />
            </div>
            <div className={styles.companyInfo}>
              <h1 className={styles.companyTitle}>LivePerson</h1>
              <h2 className={styles.cardContentDetails}>Front End Engineer Infrastructure Team </h2>
              <h2 className={styles.cardContentDetails}>Jan 2013 - Feb 2016</h2>
            </div>
          </div>
          <p className={styles.cardContentDescription}>
            Take part in the design and hands-on development of LivePerson's Front-End infrastructure.
            Responsibility for all front-end development, building both on native browser capabilities and modern client side libraries
            Researching and designing solutions for new features.
            Leading application through complete release cycle, including Build Process of the application using technologies like RequireJS Optimizer(r.js) and GruntJS.
            Web development in Client Side deployment and coding in high level JS, CSS, HTML.
            An excellent cross-browser compatibility understanding (Web standards/XHTML/CSS/Javascript).
            Knowledge in Backbone, MarionetteJS, jQuery, AJAX, GruntJS, NodeJS and Sass.
          </p>
        </div>
      </div>

      <div className={styles.timelineGridItemAdjoiningCard} />
      <div className={styles.timelineGridItemAdjoiningCard}/>
      <div className={styles.timelineGridItemCard}>
        <div className={styles.cardContent}>
          <div className={styles.cardContentHeader}>
            <div className={styles.companyLogo}>
            <Image
                alt="LivePerson logo."
                src={livePersonLogo}
                height={50}
                width={50} />
            </div>
            <div className={styles.companyInfo}>
              <h1 className={styles.companyTitle}>LivePerson</h1>
              <h2 className={styles.cardContentDetails}>Software Engineer</h2>
              <h2 className={styles.cardContentDetails}>May 2012 – Jan 2013</h2></div>
          </div>
          <p className={styles.cardContentDescription}>
            Part of the team that developed the new LivePerson chat engagements (buttons & invitations) application:
            Developing both server side and client side of the engagements configuration in the application back-end.
          </p>
        </div>
      </div>

      <div className={styles.timelineGridItemCard}>
        <div className={styles.cardContent}>
          <div className={styles.cardContentHeader}>
            <div className={styles.companyLogo}>
              <Image
                alt="Sizmek logo."
                src={sizmekLogo}
                height={50}
                width={50} />
            </div>
            <div className={styles.companyInfo}>
              <h1 className={styles.companyTitle}>MediaMind</h1>
              <h2 className={styles.cardContentDetails}>Web Software Engineer</h2>
              <h2 className={styles.cardContentDetails}>Feb 2007 - Jun 2012</h2>
            </div>
          </div>
          <p className={styles.cardContentDescription}>
            Development in the Web Client infrastructure of the served ads. Written in core JavaScript.
            The role involved both logic and visual (HTML DOM manipulation) challenges, knowledge of Internet technologies, development in high level JavaScript, cross browsers knowledge, ASP/.NET and other server side scripting languages.
            Responsible for defining, designing and building the client infrastructure of the company.
          </p>
        </div>
      </div>

      <div className={styles.timelineGridItemAdjoiningCard} />
      <div className={styles.timelineGridItemAdjoiningCard}/>
      


      <div className={styles.timelineGridItemCard}>
        <div className={styles.cardContent}>
          <div className={styles.cardContentHeader}>
            <div className={styles.companyLogo}>
              <Image
                alt="Sizmek logo."
                src={sizmekLogo}
                height={50}
                width={50} />
            </div>
            <div className={styles.companyInfo}>
              <h1 className={styles.companyTitle}>MediaMind</h1>
              <h2 className={styles.cardContentDetails}>Software Engineer</h2>
              <h2 className={styles.cardContentDetails}>Jan 2005 - Feb 2007</h2>
            </div>
          </div>
          <p className={styles.cardContentDescription}>
            Developing IIS server extension(ISAPI), server infrastructure (C++) ,windows services (C#), low latency infrastructure and ad serving server.
            Implementation of methodologies and standards.
            Multithreading and interprocess communications
          </p>
        </div>
      </div>

      <div className={styles.timelineGridItemAdjoiningCard}/>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItemWide}>
        <div className={styles.timelinePoint}/>
      </div>
    </div>
  )
}