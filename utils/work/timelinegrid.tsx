import styles from './timelinegrid.module.scss'
import { VPosition } from './position'
export function VTimelineGrid() {
  return (
    <div className={styles.timelineGrid}>
      <div className={styles.timelineGridItemWide}>
        <h1>2021</h1>
        <div className={styles.timelinePoint} />
      </div>
      {/* BIZZABO */}
      <VPosition
        company={"Bizzabo"}
        title={"Building Web Platform's Infrastructure"}
        date={"Nov 2021 - Present"}
        description={
          <>
            Building tools and frameworks that are used by front-end developers in the company.
            Design and implement internal tools and frameworks
            Build examples and documentation for the tools we are building
            Educate the developers about the tools
            Collaborate with different stakeholders in the company (developers, designers, product managers, engineering managers) to help them make the most out of the tools
          </>
        }
      />
      <div className={styles.timelineGridItemAdjoiningCard} />
      <div className={styles.timelineGridItemAdjoiningCard}/>
      {/* APPSFLYER */}
      <VPosition
        company={"Appsflyer"}
        title={"Web Tech Lead Platform Team"}
        date={"Feb 2020 - Nov 2021"}
        description={
          <>
            Part of Platform team that builds, deploy, monitor, and be on call for the platform components and underlying platform infrastructure. 
            <br />* Infrastructure and components used across R&D
            <br />* Monitoring and development of fault-tolerant and highly available infrastructure of projects. Нorizontal Scaling of services
            <br />* Documentation, guidance, and escort of developers across the organization
            <br />* Architecture using modern technologies/frameworks like GraphQL, TypeScript, NodeJS, React, webpack, Amazon AWS
            <br />* Modern CI/CD pipeline (Gitlab, Jenkins, Artifactory)
          </>
        }
      />
      {/* APPSFLYER */}
      <VPosition
        company={"Appsflyer"}
        title={"Front End Tech Lead Infra Team"}
        date={"Mar 2016 - Feb 2020"}
        description={
          <>
            Take part in the design and hands-on development of Appsflyer's Front-End infrastructure."
            <br />* Modules and components used across R&D
            <br />* Micro-services architecture using modern technologies/frameworks like NodeJS, React, SASS, webpack, Amazon AWS
            <br />*Modern CI/CD pipeline (Gitlab, Jenkins, Artifactory)
            <br />*Documentation, guidance and escort of developers across the organization
          </>
        }
      />
      <div className={styles.timelineGridItemAdjoiningCard} />
      <div className={styles.timelineGridItemAdjoiningCard}/>
      {/* LIVEPERSON */}
      <VPosition
        company={"LivePerson"}
        title={"Front End Engineer Infrastructure Team"}
        date={"Jan 2013 - Feb 2016"}
        description={
          <>
            Take part in the design and hands-on development of LivePerson's Front-End infrastructure.
            Responsibility for all front-end development, building both on native browser capabilities and modern client side libraries
            Researching and designing solutions for new features.
            Leading application through complete release cycle, including Build Process of the application using technologies like RequireJS Optimizer(r.js) and GruntJS.
            Web development in Client Side deployment and coding in high level JS, CSS, HTML.
            An excellent cross-browser compatibility understanding (Web standards/XHTML/CSS/Javascript).
            Knowledge in Backbone, MarionetteJS, jQuery, AJAX, GruntJS, NodeJS and Sass.
          </>
        }
      />
      {/* LIVEPERSON */}
      <VPosition
        company={"LivePerson"}
        title={"Software Engineer"}
        date={"May 2012 – Jan 2013"}
        description={
          <>
            Part of the team that developed the new LivePerson chat engagements (buttons & invitations) application:
            Developing both server side and client side of the engagements configuration in the application back-end.
          </>
        }
      />
      <div className={styles.timelineGridItemAdjoiningCard} />
      <div className={styles.timelineGridItemAdjoiningCard}/>
      {/* SIZMEK */}
      <VPosition
        company={"Sizmek"}
        title={"Web Software Engineer"}
        date={"Feb 2007 - Jun 2012"}
        description={
          <>
            Development in the Web Client infrastructure of the served ads. Written in core JavaScript.
            The role involved both logic and visual (HTML DOM manipulation) challenges, knowledge of Internet technologies, development in high level JavaScript, cross browsers knowledge, ASP/.NET and other server side scripting languages.
            Responsible for defining, designing and building the client infrastructure of the company.
          </>
        }
      />
      {/* SIZMEK */}
      <VPosition
        company={"Sizmek"}
        title={"Software Engineer"}
        date={"Feb 2005 - Jun 2007"}
        description={
          <>
            Developing IIS server extension(ISAPI), server infrastructure (C++) ,windows services (C#), low latency infrastructure and ad serving server.
            Implementation of methodologies and standards.
            Multithreading and interprocess communications
          </>
        }
      />
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItemWide}>
        <div className={styles.timelinePoint}/>
      </div>
    </div>
  )
}