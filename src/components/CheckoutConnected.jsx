import React, { useState, useEffect } from "react"

import Checkout from "./Checkout"

const CheckoutConnected = ({ shoppingCart }) => {
  const [stripe, setStripe] = useState({})

  useEffect(() => {
    setStripe(window.Stripe(process.env.STRIPE_PUBLIC_KEY))
  }, [])

  const redirectToCheckout = async ev => {
    const response = await stripe.redirectToCheckout({
      lineItems: shoppingCart.map(sku => ({
        price: sku.id,
        quantity: sku.quantity,
      })),
      mode: "payment",
      successUrl: `http://localhost:8000/complete`,
      cancelUrl: `http://localhost:8000`,
    })

    if (response.error) {
      console.log(response.error)
    }
  }

  return <Checkout redirectToCheckout={redirectToCheckout} />
}

export default CheckoutConnected
