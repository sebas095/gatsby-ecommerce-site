import React from "react"
import { FiDelete } from "react-icons/fi"
import { IconContext } from "react-icons"

const ClearShoppingCart = ({ clear }) => (
  <button onClick={clear} className="app-btn-flat">
    Vaciar el carrito
    <IconContext.Provider value={{ className: "inline-block ml-2 text-xl" }}>
      <FiDelete />
    </IconContext.Provider>
  </button>
)

export default ClearShoppingCart
