import React, { PropTypes } from 'react'
import Todo from './Todo'
import List from "grommet/components/List"

class TodoList extends React.Component {

  render() {

    let onTodoClick = this.props.onTodoClick.bind(this)

    return (

      <List selectable={false}>
        {this.props.todos.map(todo =>

          <Todo
            key={todo.id}
            {...todo}
            onClick={() => onTodoClick(todo.id)}
          />

        )}
      </List>

    )

  }

}

TodoList.propTypes = {

  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,

  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
