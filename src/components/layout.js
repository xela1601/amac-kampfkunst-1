/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"

import Header from "./header"
import "../style/all.scss"

import NavBar from "./Nav/NavBar"
import NavItem from "./Nav/NavItem"

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <>
            <Helmet>
                <Header siteTitle={data.site.siteMetadata.title} />
            </Helmet>

            <NavBar>
                <NavItem to="/">Home</NavItem>
                <NavItem to="/beispiel-seite/">WordPress-Page</NavItem>
                <NavItem to="/posts/">WordPress-Post</NavItem>
            </NavBar>

            <div className="content">
                <main>{children}</main>
                <footer>
                    © {new Date().getFullYear()}, AMAC Kampfkunst
                </footer>
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
