import "grommet/grommet.min.css"

import React from 'react'

import GlobalNav from "./GlobalNav"
import GrommetApp from "grommet/components/App"
import Welcome from "./Welcome"

import {addLocaleData, IntlProvider} from 'react-intl'

class App extends React.Component {

  constructor(props) {

    super(props)

    this.state = {}

    this.mounted = false

    this.setLangToFrench()
  }

  componentDidMount() {

    this.mounted = true
  }


  setLangToFrench() {

    let localeData = require('react-intl/locale-data/fr')
    let messages = require("../localeData/fr")

    let state = {
      lang:"fr",
      messages : messages
    }

    addLocaleData(localeData)

    if (this.mounted) this.setState(state)
    else this.state = state
  }

  setLangToEnglish() {

    let that = this

    require.ensure([],function(require) {

      let localeData = require("react-intl/locale-data/en.js")
      let messages = require("grommet/messages/en.js")
      let messagesAPP = require("../localeData/en.js")

      addLocaleData(localeData)

      that.setState({
        lang:"en",
        messages : Object.assign(messages,messagesAPP)
      })
    })
  }

  setLang(lang) {

    switch (lang) {
      case "fr" : this.setLangToFrench(); break
      case "en" : this.setLangToEnglish(); break
      default : throw new Error(lang+" : langue incorrect")
    }
  }

  render() {
/*
    let iconStyle = {
      margin:"10px",
      display:"inline-block",
      cursor:"pointer"
    }

    let iconSelected = {
      ...iconStyle,
      "boxShadow":"0 0 4px 2px"
    }*/

    return (
      <IntlProvider locale={this.state.lang} messages={this.state.messages}>
        <GrommetApp>
          <GlobalNav onClickFlag={ this.setLang.bind(this) }/>
          <div>
            {this.props.children || <Welcome/>}
          </div>
        </GrommetApp>
      </IntlProvider>
    )
  }

}

export default App
