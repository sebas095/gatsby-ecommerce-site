import React from "react"

import Price from "./Price"

const CartItem = ({ sku }) => (
  <div className="p-6 border-b flex">
    <div className="flex-1">
      <p className="font-bold uppercase">{sku.name}</p>
      <Price
        className="text-blue-300 mt-1"
        price={sku.unit_amount}
        currency={sku.currency}
      />
    </div>
    <div>
      <p className="px-4">{sku.quantity}</p>
    </div>
  </div>
)

export default CartItem
