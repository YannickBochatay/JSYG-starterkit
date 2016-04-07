"use strict";

import "grommet/grommet.min.css"

import React from 'react'
import ReactDOM from "react-dom"
import { Router, hashHistory } from 'react-router';

import App from "./components/App"
import NotFound from "./components/NotFound"
import Comments from "./routes/Comments/"

const rootRoute = {

  component:"div",

  childRoutes:[{

    path:"/",

    component:App,

    childRoutes:[{

      path:"comments",
      component:Comments

    },{

      path:"*",
      component:NotFound

    }]

  }]

}

ReactDOM.render( <Router history={hashHistory} routes={rootRoute} />, document.getElementById("content") )
