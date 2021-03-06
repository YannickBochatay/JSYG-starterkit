import React, { PropTypes } from 'react'
import Todo from './Todo'

class TodoList extends React.Component {

  render() {

    let onTodoClick = this.props.onTodoClick.bind(this)

    return (

      <ul style={{listStyleType:"none"}}>
        {this.props.todos.map(todo =>

          <Todo
            key={todo.id}
            {...todo}
            onClick={() => onTodoClick(todo.id)}
          />

        )}
      </ul>

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
