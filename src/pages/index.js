// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Nestlenook Farms arched bridge in winter. Decorated with lights and wreath."
        src="../images/nestlenook_bridge.png"
        />
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage