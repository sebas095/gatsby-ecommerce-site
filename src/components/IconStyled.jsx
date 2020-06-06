import React from "react"
import { IconContext } from "react-icons"

const IconStyled = ({ className, children }) => (
  <IconContext.Provider
    value={{ className: `inline-block text-xl ${className}` }}
  >
    {children}
  </IconContext.Provider>
)

export default IconStyled
