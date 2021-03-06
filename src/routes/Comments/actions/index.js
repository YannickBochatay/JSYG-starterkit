import "whatwg-fetch"

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

export const fetchComments = () => dispatch => {

  fetch("src/routes/Comments/data.json")
  .then( response => response.json() )
  .then( comments => {
      dispatch( addComments(comments) )
  })

}

export const fetchCommentsIfNeeded = () => (dispatch, getState) => {

  if (!getState().comments.length) return dispatch(fetchComments())
  else return Promise.resolve()

}
