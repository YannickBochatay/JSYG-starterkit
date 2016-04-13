import "isomorphic-fetch"

let nextCommentId = 0

export function addComment(author,text) {
  return {
    type: 'ADD_COMMENT',
    author,
    text,
    id: nextCommentId++
  }
}

export function addComments(comments) {
  return {
    type: 'ADD_COMMENTS',
    comments : comments.map( comment => addComment(comment.author,comment.text) )
  }
}

export function fetchComments() {

  return (dispatch) => {

    fetch("src/routes/Comments/data.json")
    .then( response => response.json() )
    .then( comments => {
        dispatch( addComments(comments) )
    })

  }
}

export function fetchCommentsIfNeeded() {

  return (dispatch, getState) => {

    if (!getState().comments.length) return dispatch(fetchComments())
    else return Promise.resolve()

  }
}
