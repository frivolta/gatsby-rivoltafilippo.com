import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ProjectWrapper, ProjectDetails, ProjectPageTitle } from "./style"

import IconList from "../../components/IconList/iconList"
import FullTitle from "../../components/FullTitle/fullTitle"
import Timeline from "../../components/Timeline/timeline"

interface ProjectProps {}

type Icon = {
  id: string
  publicURL: string
  name: string
}

const Project: React.FunctionComponent<ProjectProps> = props => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/author.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 1770, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      icons: allFile(
        filter: {
          relativeDirectory: { eq: "projects/budgety" }
          extension: { regex: "/(svg)/" }
        }
      ) {
        edges {
          node {
            id
            publicURL
            name
          }
        }
      }
    }
  `)
  //Describe icon item, titles
  const iconTitles = [
    "JavaScript based",
    "Cross platform",
    "JWT Authentication",
    "Intuitive User Interface",
  ]
  //Describe icon item, elements from static folder
  const icons = Data.icons.edges

  //Combine array of object from node and icon titles, icon titles must be an array of string with the same lenght of the initial node
  const combineTitlesAndNode = () =>
    icons.map(({ node }: { node: Icon }, key: number) => {
      return {
        id: node.id,
        name: node.name,
        url: node.publicURL,
        title: iconTitles[key],
      }
    })
  //Define array of icons with combined title and elements
  const iconsArray = combineTitlesAndNode()

  //Define array of timeline
  const timelineItems = [
    {
      title: "Ui / Ux Design",
      active: false,
    },
    {
      title: "REST API / Backend Dev",
      active: false,
    },
    {
      title: "Front-end development",
      active: true,
    },
    {
      title: "MVP Release",
      active: false,
    },
  ]

  return (
    <ProjectWrapper>
      {/*  <ProjectImage>
          <Image fluid={AuthorImage} alt="author" />
        </ProjectImage> */}
      <ProjectDetails>
        <ProjectPageTitle>
          <h2>
            <span>Budgety</span> is a <span>MERN stack</span> based web and
            native application. Cross-platform, everyday, cash flow and{" "}
            <span>expense tracker.</span>
          </h2>
        </ProjectPageTitle>
        <p>
          Nowadays using an expense tracker is a must, living in a big city can
          easily lead you to lose your financial control. I have come across
          many budgeting applications, most of them were overcomplicated for
          everyday purposes or didn't give me the right look and feel. For this
          reason, I decided to start developing an experimental, fast and
          intuitive app for everyday expenses with a synced database to easily
          manage data between multiple devices.
        </p>
        <IconList icons={iconsArray} />
        <ProjectPageTitle>
          <FullTitle
            title="Front-end Development"
            subtitle="CURRENTLY WORKING ON"
          />
          <Timeline timelineItems={timelineItems} />
        </ProjectPageTitle>
        <ProjectPageTitle>
          <FullTitle title="Technologies" subtitle="STACK TAGS" />
          <p>Tech list</p>
        </ProjectPageTitle>
        <ProjectPageTitle>
          <h2>
            Budgety is a MERN stack based application: <span>Mongo</span>,{" "}
            <span>Nginx</span>, <span>React</span>, <span>Node</span>. The app
            is powered by <span>microservices</span> and deployed on
            Digitalocean.
          </h2>
        </ProjectPageTitle>
        <p>
          The application frontend, developed with React for the web application
          and React Native for the mobile application, uses a single source of
          truth thanks to the help of Redux. Axios takes care of the
          communication to the Express's controller through REST Api's.
          Authentication is made easy with Passport strategies and JWT tokens.
          As soon as the user lands on the login page is prompted with a
          login/signup form, and then is invited to start a new balance account.
          The idea is to drive the user in a simple decision flow without the
          need for any tutorial. The web application is studied to let people
          manage their accounts and expenses in a global manner, on the other
          hand, the native application prefers a more straightforward use,
          allowing the immediate insertion of expenses. All components, from
          buttons to forms are tailored to the application from scratch. Future
          steps involve A/B testing and refactoring. The application's minimum
          viable product will be available soon for beta testing.
        </p>
        <ProjectPageTitle>
          <FullTitle title="Achitecture" subtitle="Structure" />
          <p>ARCHITECTUR IMAGE</p>
        </ProjectPageTitle>
      </ProjectDetails>
    </ProjectWrapper>
  )
}

export default Project
