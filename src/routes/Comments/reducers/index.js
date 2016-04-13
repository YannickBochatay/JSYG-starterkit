export const comments = (state = [], action) => {

  switch (action.type) {

    case 'ADD_COMMENT':

      return [
        ...state,
        {
          id: action.id,
          author: action.author,
          text: action.text
        }
      ]

    case 'ADD_COMMENTS':

      return state.concat(action.comments)

    default:
      return state
  }
}

module.exports = comments
