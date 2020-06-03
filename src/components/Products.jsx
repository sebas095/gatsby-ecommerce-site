import React from "react"

import ProductCard from "./ProductCard"

const Products = ({ products }) => (
  <div>
    {products.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
)

export default Products
