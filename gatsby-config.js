/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })
}

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ["Sku", "Product", "Balance", "Price"],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: true,
      },
    },
    `gatsby-plugin-stripe`,
  ],
  siteMetadata: {
    title: "CódigoFacilito Store",
    url: "https://codigofacilito.com", // URI
    description: "Buy and acquire SWAG from CódigoFacilito",
  },
}
