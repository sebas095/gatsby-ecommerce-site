import React from "react"
import { IoMdCart } from "react-icons/io"

import { Link } from "gatsby"

import IconStyled from "./IconStyled"

const navItems = [
  {
    caption: "Home",
    href: "/",
  },
  {
    caption: "Products",
    href: "/products",
  },
]

const Nav = ({ shoppingCart }) => (
  <header className="bg-blue-900 text-blue-100 shadow-md">
    <nav className="flex">
      <ul className="flex flex-1">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              className="hover:bg-blue-700 px-6 py-4 inline-block"
              to={item.href}
            >
              {item.caption}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        className="hover:bg-blue-800 bg-blue-500 px-6 py-4 inline-block"
        to="/cart"
      >
        <IconStyled className="mr-2">
          <IoMdCart />
        </IconStyled>
        {shoppingCart.length}
      </Link>
    </nav>
  </header>
)

export default Nav
