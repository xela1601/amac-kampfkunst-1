import React from "react"
import Button from "../components/Button"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Button to="/page-2/">Go to page 2</Button> <br />
    <Button to="/wp-react/beispiel-seite/">Go to page WP</Button> <br />
  </Layout>
)

export default IndexPage
