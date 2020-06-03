import React from "react"

import SEO from "./SEO"
import Nav from "./Nav"

const Layout = ({ children }) => (
  <>
    <SEO />
    <Nav />
    <main className="max-w-4xl mx-auto">{children}</main>
  </>
)

export default Layout
