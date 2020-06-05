import React from "react"

const AddToCart = ({ addProduct }) => (
  <button onClick={addProduct} className="app-btn text-xl">
    Agregar al carrito
  </button>
)

export default AddToCart
