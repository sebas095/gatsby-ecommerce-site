import React from "react"

const Tooltip = ({ text, children }) => (
  <div className="tooltip">
    {children}
    <span className="tooltiptext">{text}</span>
  </div>
)

export default Tooltip
