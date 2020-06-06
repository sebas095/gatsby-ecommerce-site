import React from "react"
import { useDispatch } from "react-redux"

import { clearShoppingCart } from "../redux/actions/shoppingCart"

import ClearShoppingCart from "./ClearShoppingCart"

const ClearShoppingCartConnected = () => {
  const dispatch = useDispatch()

  const clear = () => {
    dispatch(clearShoppingCart())
  }

  return <ClearShoppingCart clear={clear} />
}

export default ClearShoppingCartConnected
