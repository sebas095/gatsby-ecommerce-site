import React from "react"

import cardSuccess from "../img/card-success.png"

const Success = () => (
  <div className="card p-12 text-center">
    <img className="h-48 inline-block" src={cardSuccess} alt="card-success" />
    <p className="text-4xl mt-12 font-semibold">Tu pago fue procesado</p>
    <p>
      Recibirás en tu correo electrónico un comprobante de pago e instrucciones
      adicionales
    </p>
  </div>
)

export default Success
