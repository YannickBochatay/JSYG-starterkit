export const setLocaleToFrench = () => {

  let messages = require("../localeData/fr")

  return {
    type:"SET_LOCALE",
    data : {
      locale : "fr",
      messages : messages
    }
  }
}


export const setLocaleToEnglish = () => {

  return (dispatch) => {

    require.ensure([],(require)=>{

      let messages = require("grommet/messages/en")
      let messagesAPP = require("../localeData/en")

      return dispatch({
        type:"SET_LOCALE",
        data : {
          locale : "en",
          messages :  Object.assign({},messages,messagesAPP)
        }
      })
    })
  }
}

