import Immutable from 'immutable'

const initialState = Immutable.Map({
  locale: null,
  messages: null,
  formats: null
})

export default (state = initialState, action) => {

  switch (action.type) {

    case "SET_LOCALE":

      return state.merge(action.data)

    case "ADD_MESSAGES":

      return state.updateIn(['messages'], list => list.push(...action.messages));

    default:

      return state
  }
}
