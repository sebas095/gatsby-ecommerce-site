import React from "react"
import { GoPlus } from "react-icons/go"

import IconStyled from "./IconStyled"

const AddToCart = ({ addProduct }) => (
  <button onClick={addProduct} className="app-btn text-xl">
    <IconStyled className="mr-2">
      <GoPlus />
    </IconStyled>
    Agregar al carrito
  </button>
)

export default AddToCart
