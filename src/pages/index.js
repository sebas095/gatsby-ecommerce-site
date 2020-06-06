import React from "react"

import Layout from "../components/Layout"
import logo from "../img/ecommerce-logo.png"

export default () => (
  <Layout>
    <div className="text-center overflow-hidden">
      <img className="h-80 inline-block" src={logo} alt="logo" />
    </div>
  </Layout>
)
