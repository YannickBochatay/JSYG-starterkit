"use strict";

import "grommet/grommet.min.css"

import React from 'react'
import ReactDOM from "react-dom"
import { Router, hashHistory } from 'react-router';

import App from "./components/App"
import NotFound from "./components/NotFound"
import Comments from "./routes/Comments/"
import Todo from "./routes/Todo/"

const rootRoute = {

  component:"div",

  childRoutes:[{

    path:"/",

    component:App,

    childRoutes:[{
      path:"comments",
      component:Comments
    },{
      path:"todo",
      component:Todo
    },{
      path:"*",
      component:NotFound
    }]

  }]

}

ReactDOM.render( <Router history={hashHistory} routes={rootRoute} />, document.getElementById("content") )
