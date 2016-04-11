import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import Form from "grommet/components/Form"
import FormField from "grommet/components/FormField"
import Footer from "grommet/components/Footer"
import Button from "grommet/components/Button"

let AddTodo = ({ dispatch }) => {

  let input

  return (
    <Form pad={ {horizontal:"none",vertical:"large"} }  onSubmit={e => {
      e.preventDefault()
      if (!input.value.trim()) {
        return
      }
      dispatch(addTodo(input.value))
      input.value = ''
    }}>
      <FormField htmlFor="addTodo">
        <input type="text" id="addTodo" ref={node => {
          input = node
        }} />
      </FormField>
      <Footer pad={ { vertical:"large" } }>
        <Button type="submit" label="Add todo" onClick={ ()=>1 }/>
      </Footer>
    </Form>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
