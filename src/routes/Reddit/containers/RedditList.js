import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"
import { fetchPostsIfNeeded } from "../actions"
import Reddit from "../components/Reddit"


class RedditList extends Component {

  componentDidMount() {

    let { dispatch, selectedSubreddit } = this.props

    dispatch(fetchPostsIfNeeded(selectedSubreddit))
  }

  render() {

    return (

      <ul>{ this.props.items.map( item=> <Reddit key={item.name} {...item}/> ) }</ul>

    )

  }
}

RedditList.PropTypes = {
  items : PropTypes.array.isRequired,
  dispatch : PropTypes.func.isRequired
}


function mapStateToProps(state) {

  let { postsBySubreddit, selectedSubreddit} = state.reddit

  let posts = postsBySubreddit && postsBySubreddit[selectedSubreddit]

  let items = posts && posts.items || []

  return { items, selectedSubreddit }
}

export default connect(mapStateToProps)(RedditList)
