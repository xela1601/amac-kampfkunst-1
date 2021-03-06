import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTemplate from "../templates/page"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    Test <br />
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage
