import React from 'react'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

import { FormattedMessage } from "react-intl"

export default class Todo extends React.Component {

  render() {

    return (
      <article>
        <header>
          <FormattedMessage id="Todo List"/>
        </header>
        <section>
          <VisibleTodoList />
          <AddTodo />
          <Footer />
        </section>
      </article>
    )

  }
}

module.exports = Todo
