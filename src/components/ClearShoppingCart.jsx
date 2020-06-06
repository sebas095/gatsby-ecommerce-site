import React from "react"
import { FiDelete } from "react-icons/fi"

import IconStyled from "./IconStyled"

const ClearShoppingCart = ({ clear }) => (
  <button onClick={clear} className="app-btn-flat">
    Vaciar el carrito
    <IconStyled className="ml-2">
      <FiDelete />
    </IconStyled>
  </button>
)

export default ClearShoppingCart
