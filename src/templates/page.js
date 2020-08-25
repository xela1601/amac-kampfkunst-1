import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class PageTemplate extends Component {
  render() {
    const currentPage = this.props.data.wordpressPage

    console.log(currentPage)

    return (
      <div>
        <Layout>
          <SEO title="Home" />
          <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
          <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />

          <p dangerouslySetInnerHTML={{ __html: currentPage.date }} />
          <p dangerouslySetInnerHTML={{ __html: currentPage.slug }} />

          <p>Seite veröffentlicht von: {currentPage.author.name}</p>
        </Layout>
      </div>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query currentPageQuery($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      slug
      id
      date(formatString: "MMMM DD, YYYY")
      author {
          name
      }
    }
    site {
      id
      siteMetadata {
        title
        subtitle
      }
    }
  }
`
