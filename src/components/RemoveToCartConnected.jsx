import React from "react"
import { useDispatch } from "react-redux"

import { removeItem } from "../redux/actions/shoppingCart"

import RemoveToCart from "./RemoveToCart"

const RemoveToCartConnected = ({ sku }) => {
  const dispatch = useDispatch()

  const removeItemToCart = ev => {
    dispatch(removeItem(sku))
  }

  return <RemoveToCart removeProduct={removeItemToCart} />
}

export default RemoveToCartConnected
