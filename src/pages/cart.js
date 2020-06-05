import React from "react"
import { useSelector } from "react-redux"

import Layout from "../components/Layout"
import ShoppingCart from "../components/ShoppingCart"

export default () => {
  const shoppingCart = useSelector(state => state.shoppingCart)

  return (
    <Layout>
      <ShoppingCart shoppingCart={shoppingCart} />
    </Layout>
  )
}
