import React from "react"
import { FiXCircle } from "react-icons/fi"

import IconStyled from "./IconStyled"

const RemoveToCart = ({ removeProduct }) => (
  <button onClick={removeProduct} className="app-btn-flat">
    <IconStyled className="text-red-500">
      <FiXCircle />
    </IconStyled>
  </button>
)

export default RemoveToCart
