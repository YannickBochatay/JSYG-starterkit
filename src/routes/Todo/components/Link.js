import React from 'react'
import Anchor from "grommet/components/Anchor"

class Link extends React.Component {

  render() {

    var that = this

    if (this.props.active) return <span>{this.props.children}</span>

    return (
      <Anchor href=""
         onClick={e => {
           e.preventDefault()
           that.props.onClick()
         }}
      >
        {this.props.children}
      </Anchor>
    )

  }
}

Link.propTypes = {
  active: React.PropTypes.bool.isRequired,
  children: React.PropTypes.node.isRequired,
  onClick: React.PropTypes.func.isRequired
}


export default Link
