const initialState = {
  locale: null,
  messages: null,
  formats: null
}

export default (state = initialState, action) => {

  switch (action.type) {

    case "SET_LOCALE":

      // Locale data will override IntlProvider props
      return { ...state, ...action.data }

    default:

      return state
  }
}
