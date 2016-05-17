import React from "react"

class Todo extends React.Component {

  render() {

    return (

      <li>
        <label>
          <input
            type="checkbox"
            onChange={this.props.onClick}
            checked={this.props.completed}
            id={"checkbox"+this.props.key}
          />
          {this.props.text}
        </label>
      </li>
    )
  }
}

Todo.propTypes = {
  onClick : React.PropTypes.func.isRequired,
  completed: React.PropTypes.bool.isRequired,
  text : React.PropTypes.string.isRequired
}

export default Todo
