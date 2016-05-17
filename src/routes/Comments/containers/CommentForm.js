import React from 'react'
import { connect } from 'react-redux'
import { addComment } from '../actions'

import { FormattedMessage } from "react-intl"

class CommentForm extends React.Component {

  constructor(props) {

    super(props)

    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(e) {

    e.preventDefault();

    let { inputAuthor, inputText } = this.refs

    let author = inputAuthor.value.trim()
    let text = inputText.value.trim()

    if (!text || !author) return

    this.props.dispatch( addComment(author,text) )

    inputAuthor.value = ""
    inputText.value = ""

  }

  render() {

    return (

      <form onSubmit={ this.onSubmit }>

        <fieldset>
          <legend>
            <FormattedMessage id="Leave a comment"/>
          </legend>

          <input id="inputAuthor" type="text" ref="inputAuthor" placeholder="name"/>
          <br/>
          <textarea id="inputText" ref="inputText" placeholder="write something..."/>

        </fieldset>

        <button type="submit">
          <FormattedMessage id="Submit"/>
        </button>

      </form>
    )
  }
}

export default connect()(CommentForm)
