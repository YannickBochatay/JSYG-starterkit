import React, { Component, PropTypes } from "react"
import { connect } from 'react-redux'
import { fetchCommentsIfNeeded } from "../actions"
import Comment from "../components/Comment"

class CommentList extends Component {

  componentDidMount() {

    this.props.dispatch(fetchCommentsIfNeeded())

  }

  render() {

    let commentNodes = this.props.comments.map( comment => (
        <Comment author={comment.author} key={comment.id} text={comment.text}/>
    ))

    return (
      <ul>
        {commentNodes}
      </ul>
    )
  }
}

CommentList.PropTypes = {
  comments : PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    comments : state.comments
  }
}

export default connect(mapStateToProps)(CommentList)
