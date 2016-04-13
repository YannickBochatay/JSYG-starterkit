import "isomorphic-fetch"

export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'

export function selectSubreddit(subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  }
}


export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'

export function invalidateSubreddit(subreddit) {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit
  }
}


export const REQUEST_POSTS = 'REQUEST_POSTS'

export function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}


export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export function receivePosts(subreddit, json) {

  let posts = (json && json.data) ? json.data.children.map(child => child.data) : []

  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: posts,
    receivedAt: Date.now()
  }
}

function checkHTTPStatus(response) {

  var s = response.status;

  if (s >= 200 && s < 300 || s === 304) return response;

  var error = new Error(response.statusText);

  error.response = response;

  throw error;
}

export function fetchPosts(subreddit) {

  return function (dispatch) {

    dispatch(requestPosts(subreddit))

    return fetch(`http://www.reddit.com/r/${subreddit}.json`)
      .then(checkHTTPStatus)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(subreddit, json)))
      .catch( (e) => console.error(e) )
  }
}

function shouldFetchPosts(state, subreddit) {

  const posts = state.reddit.postsBySubreddit[subreddit]

  if (!posts) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
}

export function fetchPostsIfNeeded(subreddit) {

  return (dispatch, getState) => {

    if (shouldFetchPosts(getState(), subreddit)) {
      return dispatch(fetchPosts(subreddit))
    } else {
      return Promise.resolve()
    }
  }
}
