import React from "react"

const Price = ({ price, currency, className }) => (
  <span className={`inline-block uppercase ${className}`}>
    ${price / 100}
    <span className="text-sm">{currency}</span>
  </span>
)

export default Price
