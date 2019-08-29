import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import SocialProfile from "components/SocialProfile/socialProfile"
import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io"
import {
  IntroWrapper,
  IntroImage,
  IntroTitle,
  Desciption,
} from "../../containers/HomePage/Intro/style"
import {
  AboutWrapper,
  AboutImage,
  AboutPageTitle,
  AboutDetails,
  SocialProfiles,
} from "./style"

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
interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = props => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/author.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 1770, quality: 90) {
            ...GatsbyImageSharpFluid
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

  /*   const AuthorImage = Data.avatar.childImageSharp.fluid
   */
  return (
    <AboutWrapper>
      {/* <AboutImage>
        <Image fluid={Data.avatar.childImageSharp.fluid} alt="author" />
      </AboutImage> */}

      <AboutDetails>
        <AboutPageTitle>
          <h2>
            As a strong believer in <span>Software Craftmanship</span>, I’m
            always looking for <span>new things to learn</span>, with Google as
            my teacher and code editor as my notebook.
          </h2>
        </AboutPageTitle>
        <p>
          Hi, I am a highly motivated <b>Front-end developer</b> and{" "}
          <b>Ui Designer</b>
          crafting rich User Experiences with minimal and aesthetically pleasing
          interfaces located in <b>Milan, Italy</b>. I have experiece in
          developing websites and web applications based on web standards
          technologies like HTML, CSS, <b>JavaScript</b> and PHP. I am
          passionate about web development with a special affinity for{" "}
          <b>client-side technologies</b>. The web is my life, exploring web
          technologies and techniques, developing cool web apps, for this
          reason, I think working in a team is one of the best ways to improve.
          Anything that can help me expand my knowledge is always welcome. I
          love spending time on f<b>ixing little details</b> and optimizing web
          apps. After hours I am a geek, a wakeboarder / snowboarder, also I
          love to cook and I admire great food.
        </p>

        <SocialProfiles>
          <SocialProfile items={SocialLinks} />
        </SocialProfiles>
      </AboutDetails>
    </AboutWrapper>
  )
}

export default About
