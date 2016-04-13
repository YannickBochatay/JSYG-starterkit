const initialState = [
  {"id": 1, "author": "Yannick Bochatay", "text": "Bonjour tout le monde"},
  {"id": 2, "author": "Yannick", "text": "Bonjour à nouveau"}
]

export const comments = (state = initialState, action) => {

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

    default:
      return state
  }
}

module.exports = comments
