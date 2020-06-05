import React from "react"
import { useDispatch } from "react-redux"

import { addItem } from "../redux/actions/shoppingCart"

import AddToCart from "./AddToCart"

const AddToCartConnected = ({ sku }) => {
  const dispatch = useDispatch()

  const addProductToCart = ev => {
    dispatch(addItem(sku))
  }

  return <AddToCart addProduct={addProductToCart} />
}

export default AddToCartConnected
