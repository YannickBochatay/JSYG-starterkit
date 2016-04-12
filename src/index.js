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

        require.ensure([], function (require) {

          let Comments = require('./routes/Comments')
          let commentReducer = require('./routes/Comments/reducers')
          injectAsyncReducer(store,'comments', commentReducer)
          callback(null, Comments)
        })
      }

    },{

      path:"todo",

      getComponents : function(location, callback) {

        require.ensure([], function (require) {

          let Todo = require('./routes/Todo')
          let todoReducer = require('./routes/Todo/reducers')
          injectAsyncReducer(store,'todo', todoReducer)

          callback(null, Todo)
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
