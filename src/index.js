"use strict";

import "grommet/grommet.min.css"

import React from 'react'
import ReactDOM from "react-dom"
import { Router, hashHistory } from 'react-router';

import App from "./components/App"
import NotFound from "./components/NotFound"

import { createAndConfigStore, injectAsyncReducer }  from "./store"

import { Provider } from 'react-redux'
import IntlProvider from "./containers/IntlProvider"

import { addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import fr from 'react-intl/locale-data/fr'

addLocaleData(en)
addLocaleData(fr)


let store = createAndConfigStore()

const rootRoute = {

  component:"div",

  childRoutes:[{

    path:"/",

    component:App,

    childRoutes:[{

      path:"comments",

      getComponents(location, callback) {

        //this way the code is loaded dynamically when accessing this route
        require.ensure([], function (require) {

          let Component = require('./routes/Comments')
          let reducer = require('./routes/Comments/reducers')
          injectAsyncReducer(store,'comments', reducer)
          callback(null, Component)
        })
      }

    },{

      path:"todo",

      getComponents : function(location, callback) {

        require.ensure([], function (require) {

          let Component = require('./routes/Todo')
          let reducer = require('./routes/Todo/reducers')
          injectAsyncReducer(store,'todo', reducer)

          callback(null, Component)
        })
      }

    },{

      path:"reddit",

      getComponents : function(location, callback) {

        require.ensure([], function (require) {

          let Component = require('./routes/Reddit')
          let reducer = require('./routes/Reddit/reducers')
          injectAsyncReducer(store,'reddit', reducer)

          callback(null, Component)
        })
      }

    },{
      path:"*",
      component:NotFound
    }]

  }]

}

ReactDOM.render(

  <Provider store={store}>
    <IntlProvider>
      <Router history={hashHistory} routes={rootRoute} />
    </IntlProvider>
  </Provider>,

document.getElementById("content") )
