let nextCommentId = 3

export const addComment = (author,text) => {
  return {
    type: 'ADD_COMMENT',
    author,
    text,
    id: nextCommentId++
  }
}
