import React from "react"
import { Link } from "gatsby"

const ProductCard = ({ product }) => (
  <article className="card p-4">
    <header>
      <h2 className="font-bold uppercase text-2xl">
        <Link to={`/products/${product.slug}`}>{product.name}</Link>
      </h2>
    </header>
  </article>
)

export default ProductCard
