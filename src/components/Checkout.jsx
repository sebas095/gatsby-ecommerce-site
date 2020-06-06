import React from "react"

const Checkout = ({ redirectToCheckout }) => (
  <button onClick={redirectToCheckout} className="w-full app-btn text-xl">
    Checkout
  </button>
)

export default Checkout
