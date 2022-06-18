require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Hillshire Designs`,
    siteUrl: `https://hillshiredesigns.com`,
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        password: process.env.SHOPIFY_APP_PASSWORD,
        storeUrl: process.env.hillshire-designs.myshopify.com,
        salesChannel: process.env.SHOPIFY_APP_ID, // Optional but recommended
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],
}
