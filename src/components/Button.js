import React, { Component } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

export default class Button extends Component {
  render() {
    return (
      <div className="Button">
        <Link to={this.props.to}>{this.props.children}</Link>
      </div>
    )
  }
}

Button.propTypes = {
  to: PropTypes.string.isRequired
}
