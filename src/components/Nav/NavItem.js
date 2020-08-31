import React, { Component } from 'react'
import { Link } from "gatsby"
import PropTypes from "prop-types"

export default class NavItem extends Component {
    render() {
        return (
            <li className="NavItem">
                <Link to={this.props.to} activeClassName="active">
                    {this.props.children}
                </Link>
            </li>
        )
    }
}

NavItem.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
}