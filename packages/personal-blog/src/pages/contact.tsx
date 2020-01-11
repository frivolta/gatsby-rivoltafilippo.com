import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../containers/Contact"

type ContactPageProps = {}

const ContactPage: React.FunctionComponent<ContactPageProps> = props => {
  return (
    <Layout>
      <SEO
        title="Contact Me"
        description="I am a highly motivated Front-end developer crafting rich User Experiences with minimal and aesthetically pleasing interfaces located in Milan, Italy"
      />

      <Contact />
    </Layout>
  )
}

export default ContactPage
