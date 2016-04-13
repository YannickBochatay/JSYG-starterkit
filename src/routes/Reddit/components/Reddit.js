import React, { Component, PropTypes } from "react"

class Reddit extends Component {

  render() {

    let { url, title } = this.props

    return (
      <li>
        <a href={url}>{title}</a>
      </li>
    )
  }
}

Reddit.PropTypes = {
  url:PropTypes.string.isRequired,
  title:PropTypes.string.isRequired
}

export default Reddit
