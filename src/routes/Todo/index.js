import React from 'react'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

import Article from "grommet/components/Article"
import Header from "grommet/components/Header"
import Section from "grommet/components/Section"
import { FormattedMessage } from "react-intl"

export default class Todo extends React.Component {

  render() {

    return (
      <Article pad="medium">
        <Header>
          <FormattedMessage id="Todo List"/>
        </Header>
        <Section>
          <VisibleTodoList />
          <AddTodo />
          <Footer />
        </Section>
      </Article>
    )

  }
}

module.exports = Todo
