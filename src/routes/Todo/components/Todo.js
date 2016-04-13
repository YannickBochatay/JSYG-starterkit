import React from "react"
import ListItem from "grommet/components/ListItem"
import CheckBox from "grommet/components/CheckBox"


class Todo extends React.Component {

  render() {

    return (

      <ListItem>
        <CheckBox
          onChange={ this.props.onClick }
          checked={this.props.completed}
          label={this.props.text}
          id={"checkbox"+this.props.key}/>
      </ListItem>
    )
  }
}

Todo.propTypes = {
  onClick : React.PropTypes.func.isRequired,
  completed: React.PropTypes.bool.isRequired,
  text : React.PropTypes.string.isRequired
}

export default Todo
