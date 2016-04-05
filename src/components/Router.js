"use strict";

import React from 'react'
import Welcome from "./Welcome"
import NotFound from "./NotFound"
import Loading from "./Loading"
import page from "page"


class Router extends React.Component {

  constructor(props) {

    super(props)

    this.state = {component:null}
  }

  load(component) {

    let that = this

    this.setState({component:<Loading/>})

    window.setTimeout(function() {

      that.setState({component:component})

    },500)
  }

  setCommentPage() {

    let that = this

    let regComments = /\/comments\/?/

    page(regComments, () => {

      require.ensure([], require => {

        let Comments = require("../routes/Comments/")

        that.load(<Comments/>)
      })

    })
  }

  componentDidMount() {

    let that = this

    this.setCommentPage();

    page('/', () => that.load(<Welcome/>) )

    page('*', () => that.load(<NotFound/>) )

    page({
      hashbang:true
    })
  }

  render() {

    return this.state.component
  }
}

export default Router
