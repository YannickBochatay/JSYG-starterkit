"use strict";

import React from "react"
import CommentList from "./containers/CommentList"
import CommentForm from "./containers/CommentForm"
import { FormattedMessage } from "react-intl"

export default class Comments extends React.Component {

    render() {
      return (
        <article pad="medium">
          <header>
            <FormattedMessage id="Comments"/>
          </header>
          <section>
            <CommentList/>
            <CommentForm/>
          </section>
        </article>
      )
    }
}

Comments.contextTypes = {
  router: React.PropTypes.object
}

module.exports = Comments
