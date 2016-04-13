import React, { Component, PropTypes } from "react"
import Comment from "../components/Comment"
import Tiles from "grommet/components/Tiles"
import { connect } from 'react-redux'
import { fetchCommentsIfNeeded } from "../actions"

class CommentList extends Component {

  componentDidMount() {

    this.props.dispatch(fetchCommentsIfNeeded())

  }

  render() {

    let commentNodes = this.props.comments.map( comment=>(
        <Comment author={comment.author} key={comment.id} text={comment.text}/>
    ))

    return (
      <Tiles pad="large">
        {commentNodes}
      </Tiles>
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
