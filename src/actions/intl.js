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

  let messages = require("grommet/messages/en")
  let messagesAPP = require("../localeData/en")

  return {
    type:"SET_LOCALE",
    data : {
      locale : "en",
      messages :  Object.assign({},messages,messagesAPP)
    }
  }
}

