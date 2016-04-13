import React, { Component } from "react"
import { connect } from "react-redux"
import { selectSubreddit,fetchPostsIfNeeded } from "../actions"

class SearchReddit extends Component {

  handleOnChange(e) {

    let { dispatch } = this.props
    let search = e.target.value

    dispatch(selectSubreddit(search))

    if (search.length > 3) dispatch(fetchPostsIfNeeded(search))
  }

  render() {

    return (
      <input
        type="text"
        onChange={ this.handleOnChange.bind(this) }
        value={this.props.selectedSubreddit}
      />
    )
  }
}

SearchReddit.propTypes = {

}

function mapStateToProps(state) {

  let { selectedSubreddit} = state.reddit

  return { selectedSubreddit }
}

export default connect(mapStateToProps)(SearchReddit)
