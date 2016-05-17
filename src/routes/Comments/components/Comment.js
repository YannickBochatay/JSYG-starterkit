import React from "react"

export default class Comment extends React.Component {

    render() {

      return(
        <li>
          <header>{this.props.author}</header>
          {this.props.text}
        </li>
      )
    }
}
