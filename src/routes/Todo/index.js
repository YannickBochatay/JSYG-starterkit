import React from 'react'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

import Article from "grommet/components/Article"
import Header from "grommet/components/Header"
import Section from "grommet/components/Section"

export default class Todo extends React.Component {

  render() {

    return (
      <Article pad="medium">
        <Header>
          TodoList
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
