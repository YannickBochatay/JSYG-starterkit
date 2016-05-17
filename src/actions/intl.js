export function setLocaleToFrench() {

  let messages = require("../localeData/fr")

  return {
    type:"SET_LOCALE",
    data : {
      locale : "fr",
      messages : messages
    }
  }
}


export function setLocaleToEnglish() {

  return (dispatch) => {

    require.ensure([],(require)=>{

      let messages = require("../localeData/en")

      return dispatch({
        type:"SET_LOCALE",
        data : {
          locale : "en",
          messages : messages
        }
      })
    })
  }
}

export function addMessages(messages) {

  return {
    type:"ADD_MESSAGES",
    messages
  }

}

