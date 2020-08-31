import React, { Component } from "react"

export default class NavBar extends Component {
    render() {
        return (
            <nav className="NavBar">
                <ul>{this.props.children}</ul>
            </nav>
        )
    }
}
