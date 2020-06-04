import React from "react"

const Product = ({ product, skus }) => {
  const sku = skus[0].node

  return (
    <article className="card">
      <header className="bg-blue-800 p-6 text-center">
        <div className="flex text-left">
          <div className="flex-1">
            {product && product.images[0] && (
              <img src={product.images[0]} alt={product.slug} />
            )}
          </div>
          <div className="flex-1">
            <p>
              {sku.unit_amount}
              {sku.currency}
            </p>
          </div>
        </div>
      </header>
      <div className="text-center p-6">
        <h1 className="text-3xl uppercase mb-4">{product.name}</h1>
        <button>Comprar</button>
      </div>
    </article>
  )
}
export default Product
