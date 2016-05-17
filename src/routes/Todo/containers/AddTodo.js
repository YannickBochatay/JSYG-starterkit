import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { FormattedMessage } from "react-intl"


class AddTodo extends React.Component {

  constructor(props) {

    super(props)

    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(e) {

    e.preventDefault()

    let {input} = this.refs

    if (!input.value.trim()) return

    this.props.dispatch( addTodo(input.value) )

    input.value = ''
  }

  render() {

    return (
      <form onSubmit={ this.onSubmit }>
        <input type="text" id="addTodo" ref="input"/>
        <br/>
        <button type="submit">
          <FormattedMessage id="Submit"/>
        </button>
      </form>
    )

  }

}

export default connect()(AddTodo)
