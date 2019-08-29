import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import SocialProfile from "components/SocialProfile/socialProfile"
import { IntroWrapper, IntroImage, IntroTitle, Desciption } from "./style"
import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io"

type IntroProps = {}

const SocialLinks = [
  {
    icon: <IoLogoInstagram />,
    url: "https://www.instagram.com/filippo.jsx/",
    tooltip: "Instagram",
  },
  {
    icon: <IoLogoLinkedin />,
    url: "https://www.linkedin.com/in/filippo-rivolta-49b9723b/",
    tooltip: "Linkedin",
  },
]

const Intro: React.FunctionComponent<IntroProps> = props => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/author.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 210, maxHeight: 210, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      site {
        siteMetadata {
          author
          about
        }
      }
    }
  `)

  const AuthorImage = Data.avatar.childImageSharp.fluid

  return (
    <IntroWrapper>
      <IntroImage>
        <Image fluid={AuthorImage} alt="author" />
      </IntroImage>
      <IntroTitle>
        Front-end <b>development </b>
        and Ui Design.
      </IntroTitle>
      <Desciption>
        Hi, I am a highly motivated <b>front-end developer</b> and Ui designer
        crafting rich <b>User Experiences</b> with minimal and aesthetically
        pleasing interfaces located in <b>Milan, Italy</b>. I have experience in
        developing websites and web applications based on web standard
        technologies like HTML, CSS, <b>JavaScript</b> and PHP. I am passionate
        about web development with a special affinity for{" "}
        <b>client-side technologies.</b>
      </Desciption>
      <SocialProfile items={SocialLinks} />
    </IntroWrapper>
  )
}

export default Intro
