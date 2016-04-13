"use strict";

import "whatwg-fetch"
import React from "react"
import CommentList from "./containers/CommentList"
import CommentForm from "./containers/CommentForm"
import { FormattedMessage } from "react-intl"
import Article from "grommet/components/Article"
import Header from "grommet/components/Header"
import Section from "grommet/components/Section"

class Comments extends React.Component {
/*
    loadCommentsFromServer() {

        let that = this

        return fetch(this.url)
        .then(function(response) {

            return response.json()
        })
        .then(function(data) {

            that.setState({data: data})
        })
        .catch(function(e) {

            console.error(that.props.url,e)
        });
    }

    componentDidMount() {

        this.loadCommentsFromServer()
    }
*/
    render() {
        return (
          <Article pad="medium">
            <Header>
                <FormattedMessage id="Comments"/>
            </Header>
            <Section>
                <CommentList/>
                <CommentForm/>
            </Section>
          </Article>
        );
    }

}

Comments.contextTypes = {
  router: React.PropTypes.object
}

module.exports = Comments

export default Comments
