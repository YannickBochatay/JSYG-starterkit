import React from 'react'
import { connect } from 'react-redux'
import { addComment } from '../actions'

import Form from "grommet/components/Form"
import FormField from "grommet/components/FormField"
import Footer from "grommet/components/Footer"
import Button from "grommet/components/Button"
import { FormattedMessage } from "react-intl"

let CommentForm = ({ dispatch }) => {

  let inputAuthor
  let inputText

  function onSubmit(e)  {

    e.preventDefault();

    let author = inputAuthor.value.trim()
    let text = inputText.value.trim()

    if (!text || !author) return

    dispatch(addComment(author,text))

    inputAuthor.value = ""
    inputText.value = ""
  }

  return (

    <Form pad={ {vertical:"large",horizontal:"none"} } onSubmit={onSubmit}>

      <fieldset>
        <legend>
          <FormattedMessage id="Leave a comment"/>
        </legend>

        <FormField label="Name" htmlFor="inputAuthor">
          <input id="inputAuthor" type="text" ref={node => { inputAuthor = node }}/>
        </FormField>

        <FormField label="Say something..." htmlFor="inputText">
          <textarea id="inputText"  ref={node => { inputText = node }}/>
        </FormField>

      </fieldset>

      <FormattedMessage id="Submit">
        {
          (label) => ( <Button label={label} type="submit" onClick={ ()=>1 }/> )
        }
      </FormattedMessage>

    </Form>
  )
}

export default connect()(CommentForm)
