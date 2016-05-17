import React from 'react'
import { FormattedMessage } from "react-intl"

export default class Welcome extends React.Component {

  render() {

    return (
      <article pad="medium">
        <header>
          <h1><FormattedMessage id="Welcome"/></h1>
        </header>
        <section>
          <p>

            <FormattedMessage id="This is a very simple template"/>
            <br/>

            <FormattedMessage id="The comments section is from the"/>&nbsp;
            <a href="https://facebook.github.io/react/docs/tutorial.html">
              <FormattedMessage id="React tutorial"/>
            </a>.
            <br/>

            <FormattedMessage id="The todo section is from the"/>&nbsp;
            <a href="http://redux.js.org/docs/basics/ExampleTodoList.html">
              <FormattedMessage id="Redux tutorial"/>
            </a>.
            <br/>

            <FormattedMessage id="The reddit section is from the"/>&nbsp;
            <a href="http://redux.js.org/docs/advanced/ExampleRedditAPI.html">
              <FormattedMessage id="advanced Redux tutorial"/>
            </a>.
            <br/>



          </p>
        </section>
      </article>
    )
  }
}
