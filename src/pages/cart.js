import React from "react"
import { useSelector, shallowEqual } from "react-redux"

import Layout from "../components/Layout"
import ShoppingCart from "../components/ShoppingCart"

export default () => {
  const shoppingCart = useSelector(state => state.shoppingCart, shallowEqual)

  return (
    <Layout>
      <ShoppingCart shoppingCart={shoppingCart} />
    </Layout>
  )
}
