import React from "react"

import Price from "./Price"

const Total = ({ shoppingCart }) => {
  const total = shoppingCart.reduce(
    (total, product) => product.unit_amount * product.quantity + total,
    0
  )

  return (
    <div>
      <p className="uppercase text-blue-200">Total</p>
      <Price price={total} currency={"MXN"} className="text-2xl" />
    </div>
  )
}

export default Total
