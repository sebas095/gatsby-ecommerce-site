import React from "react"

import SEO from "./SEO"
import Nav from "./Nav"

const Layout = ({ children }) => (
  <>
    <SEO />
    <Nav />
    <main>{children}</main>
  </>
)

export default Layout
