import React from 'react'

import Article from "grommet/components/Article"
import Header from "grommet/components/Header"
import Section from "grommet/components/Section"
import { FormattedMessage } from "react-intl"
import SearchReddit from "./containers/SearchReddit"
import RedditList from "./containers/RedditList"

class Reddit extends React.Component {

  render() {

    return (
      <Article pad="medium">
        <Header>
          Reddit
        </Header>
        <Section>
          <FormattedMessage id="Search on Reddit"/>
          <SearchReddit/>
          <RedditList/>
        </Section>
      </Article>
    )

  }
}

module.exports = Reddit

export default Reddit
