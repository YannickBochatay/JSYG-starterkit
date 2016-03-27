"use strict";

import React from "react";
import "whatwg-fetch";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

class CommentBox extends React.Component {

    constructor(props) {

      super(props);

      this.state = {data:[]};

      this.url = "/src/routes/Comments/data.json";

      this.routerWillLeave = this.routerWillLeave.bind(this);
    }

    loadCommentsFromServer() {

        var that = this;

        return fetch(this.url)
        .then(function(response) {

            return response.json();
        })
        .then(function(data) {

            that.setState({data: data});
        })
        .catch(function(e) {

            console.error(that.props.url,e)
        });
    }

    handleCommentSubmit(comment) {

        var that = this;
        var comments = this.state.data;

        comment.id = Date.now();

        this.setState({ data : comments.concat([comment]) });

        return fetch(this.url,{
            method:"post",
            body:JSON.stringify(comment)
        })
        .catch(function(e) {
            console.error(that.props.url,e)
        });
    }

    componentDidMount() {

        if (this.context.router) this.context.router.setRouteLeaveHook(this.props.route, this.routerWillLeave)

        this.loadCommentsFromServer();

        if (this.props.pollInterval) {

            window.setInterval( this.loadCommentsFromServer.bind(this), this.props.pollInterval);
        }
    }

    routerWillLeave() {

      return true;

      //return 'Your work is not saved! Are you sure you want to leave?'
    }

    render() {
        return (
          <div className="commentBox">
            <h1>Comments</h1>
            <CommentList data={this.state.data} />
            <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)}/>
          </div>
        );
    }

}

CommentBox.contextTypes = {
  router: React.PropTypes.object
};

module.exports = CommentBox;

export default CommentBox;
