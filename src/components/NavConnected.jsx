import React from "react"
import { useSelector } from "react-redux"

import Nav from "./Nav"

const NavConnected = () => {
  const shoppingCart = useSelector(({ shoppingCart }) => shoppingCart)

  return <Nav shoppingCart={shoppingCart} />
}

export default NavConnected
