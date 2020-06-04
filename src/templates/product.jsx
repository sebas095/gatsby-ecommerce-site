import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Product from "../components/Product"

export default ({ data }) => {
  const product = data.stripeProduct
  const skus = data.allStripePrice.edges

  return (
    <Layout>
      <Product product={product} skus={skus} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String) {
    stripeProduct(id: { eq: $id }) {
      name
      slug
      images
    }

    allStripePrice(filter: { product: { eq: $id } }) {
      edges {
        node {
          id
          unit_amount
          currency
          created
        }
      }
    }
  }
`
