import React from "react"
import Sticky from "react-stickynode"
import { ThemeProvider } from "styled-components"
import ScrollToTop from "react-scroll-up"
import Navbar from "./Navbar/navbar"
import Newsletter from "./Newsletter/newsletter"
import Footer from "./Footer/footer"
import ScrollUpButton from "./ScrollUpButton/scrollUpButton"
import ResetCss from "./resetCSS"
import { theme } from "../theme"

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <ResetCss />
        <Sticky top={0} innerZ={9999} activeClass="nav-sticky">
          <Navbar />
        </Sticky>

        {children}

        <Newsletter />
        <Footer>
          Copyright &copy; {new Date().getFullYear()}
          <a href="https://wwwrivoltafilippo.com/"> Filippo Rivolta.</a>
        </Footer>
        <ScrollToTop
          showUnder={300}
          duration={700}
          easing="easeInOutCubic"
          style={{ bottom: 30, right: 20 }}
        >
          <ScrollUpButton />
        </ScrollToTop>
      </>
    </ThemeProvider>
  )
}

export default Layout
