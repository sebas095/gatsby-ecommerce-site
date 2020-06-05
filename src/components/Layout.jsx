import React from "react"

import SEO from "./SEO"
import NavConnected from "./NavConnected"

const Layout = ({ children }) => (
  <>
    <SEO />
    <NavConnected />
    <main className="max-w-4xl mx-auto">{children}</main>
  </>
)

export default Layout
