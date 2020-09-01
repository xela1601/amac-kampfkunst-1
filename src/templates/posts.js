import React, { Component } from "react"
import Layout from "../components/layout"
import Button from "../components/Button"
import PropTypes from "prop-types"

class PostsTemplate extends Component {
    render() {
        const data = this.props.data

        return(
            <div>
                <Layout>
                    <h1>Posts</h1>

                    {data.allWordpressPost.edges.map(({node}) => (
                        <div key={node.slug} className={"post"} style={{ marginBottom: 50 }}>
                            <Button to={'/post/' + node.slug}>
                                {node.title}
                            </Button>
                            <date>{node.date}</date>
                            <pre className={"post-content"} dangerouslySetInnerHTML={{__html: node.excerpt}} />
                        </div>
                    ))}
                </Layout>
            </div>
        )
    }
}

PostsTemplate.propTypes = {
    data: PropTypes.object.isRequired,
    edges: PropTypes.array,
}

export default PostsTemplate

export const pageQuery = graphql`
    query postsQuery{
        allWordpressPost{
            edges{
                node{
                    id
                    title
                    excerpt
                    slug
                    date(formatString: "MMMM DD, YYYY")
                    categories {
                        id
                        name
                    }
                }
            }
        }
    }
`