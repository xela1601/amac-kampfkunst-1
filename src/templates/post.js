import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
//import Img from "gatsby-image"

class PostTemplate extends Component {
    render() {
        const post = this.props.data.wordpressPost
        const site = this.props.data.site.siteMetadata

        return (
            <div>
                <Layout>
                    <SEO title="Home" />
                    <p>{site.title}</p>
                    <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </Layout>
            </div>
        )
    }
}


export default PostTemplate

export const pageQuery = graphql`
    query currentPostQuery($id: String!) {
        wordpressPost(id: { eq: $id }) {
            title
            content
        }
        site {
            siteMetadata {
                title
                subtitle
            }
        }
    }
`