"use strict";

import React from 'react'
import ReactDOM from "react-dom"

import injectTapEventPlugin from 'react-tap-event-plugin';
import "roboto-fontface"

import Router from "./components/Router"
import GlobalNav from "./components/GlobalNav"

let style = {
  "fontFamily":"roboto"
}

injectTapEventPlugin();


class App extends React.Component {

  render() {

    return (
      <div style={style}>
        <GlobalNav/>
        <Router/>
      </div>
    )
  }
}

ReactDOM.render( <App/> , document.getElementById("content") )
