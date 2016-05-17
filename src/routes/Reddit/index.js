import React from 'react'

import { FormattedMessage } from "react-intl"
import SearchReddit from "./containers/SearchReddit"
import RedditList from "./containers/RedditList"

class Reddit extends React.Component {

  render() {

    return (
      <article pad="medium">
        <h2>
          Reddit
        </h2>
        <section>
          <FormattedMessage id="Search on Reddit"/>&nbsp;
          <SearchReddit/>
          <RedditList/>
        </section>
      </article>
    )

  }
}

module.exports = Reddit

export default Reddit
