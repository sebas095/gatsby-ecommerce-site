import React from "react"

import RemoveToCartConnected from "./RemoveToCartConnected"

import Tooltip from "./Tooltip"
import Price from "./Price"

const CartItem = ({ sku }) => (
  <div className="p-6 border-b flex">
    <div className="flex-1">
      <p className="font-bold uppercase">
        {sku.name}
        <Tooltip text="Eliminar">
          <RemoveToCartConnected sku={sku} />
        </Tooltip>
      </p>
      <Price
        className="text-blue-300 mt-1"
        price={sku.unit_amount}
        currency={sku.currency}
      />
    </div>
    <div className="mt-4">
      <p className="px-4">{sku.quantity}</p>
    </div>
  </div>
)

export default CartItem
