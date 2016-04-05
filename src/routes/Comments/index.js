"use strict";

import "whatwg-fetch"
import React from "react"
import CommentList from "./components/CommentList"
import CommentForm from "./components/CommentForm"
import page from "page"

class Comments extends React.Component {

    constructor(props) {

      super(props)

      this.state = {
        data:[]
      }

      this.url = "./src/routes/Comments/data.json"
    }

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

    handleCommentSubmit(comment) {

        let comments = this.state.data

        comment.id = Date.now()

        this.setState({ data : comments.concat([comment]) })

        /*
        //var that = this;
        return fetch(this.url,{
            method:"post",
            body:JSON.stringify(comment)
        })
        .catch(function(e) {
            console.error(that.props.url,e)
        });
        */
    }

    componentDidMount() {

        if (this.context.router) this.context.router.setRouteLeaveHook(this.props.route, this.routerWillLeave.bind(this) )

        this.loadCommentsFromServer()
    }

    routerWillLeave() {

      return this.state.unsaved ? 'Your work is not saved! Are you sure you want to leave?' : true
    }

    commentIsUnsaved(bool) {

      this.setState({unsaved:bool})
    }

    render() {
        return (
          <div className="commentBox">
            <h1>Comments</h1>
            <CommentList data={this.state.data} />
            <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} onCommentChange={this.commentIsUnsaved.bind(this)}/>
          </div>
        );
    }

}

Comments.contextTypes = {
  router: React.PropTypes.object
}

console.log(page)

module.exports = Comments

export default Comments
