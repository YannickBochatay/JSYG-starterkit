"use strict";

import "grommet/grommet.min.css"

import React from 'react'
import ReactDOM from "react-dom"

import Router from "./components/Router"
import GlobalNav from "./components/GlobalNav"

import App from "grommet/components/App"

import {addLocaleData, IntlProvider} from 'react-intl'
import frLocaleData from 'react-intl/locale-data/fr'
import messages from "./localeData/fr"

addLocaleData(frLocaleData)

ReactDOM.render(
  <IntlProvider locale="fr" messages={messages}>
    <App>
      <GlobalNav/>
      <Router/>
    </App>
  </IntlProvider>,

document.getElementById("content") )
