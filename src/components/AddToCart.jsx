import React from "react"
import { GoPlus } from "react-icons/go"
import { IconContext } from "react-icons"

const AddToCart = ({ addProduct }) => (
  <button onClick={addProduct} className="app-btn text-xl">
    <IconContext.Provider value={{ className: "inline-block mr-2 text-xl" }}>
      <GoPlus />
    </IconContext.Provider>
    Agregar al carrito
  </button>
)

export default AddToCart
