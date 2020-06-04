import React, { useState, useEffect } from "react"

const CheckoutTemp = ({ sku }) => {
  const [stripe, setStripe] = useState({})

  useEffect(() => {
    setStripe(window.Stripe(process.env.STRIPE_PUBLIC_KEY))
  }, [])

  const redirectToCheckout = async ev => {
    const response = await stripe.redirectToCheckout({
      lineItems: [{ price: sku.id, quantity: 1 }],
      mode: "payment",
      successUrl: `http://localhost:8000/complete`,
      cancelUrl: `http://localhost:8000`,
    })

    if (response.error) {
      console.log(response.error)
    }
  }

  return (
    <button className="app-btn text-xl" onClick={redirectToCheckout}>
      Checkout
    </button>
  )
}

export default CheckoutTemp
