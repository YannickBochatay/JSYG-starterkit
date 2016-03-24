"use strict";

import React from "react";
import Input from "react-toolbox/lib/input";
import Button from "react-toolbox/lib/button";


class CommentForm extends React.Component {

    constructor(props) {

      super(props);
      this.state = {author:"",text:""};

      this.handleAuthorChange = this.handleAuthorChange.bind(this);
      this.handleTextChange = this.handleTextChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleAuthorChange(value,e) {

        this.setState({author:e.target.value});
    }

    handleTextChange(value,e) {

        this.setState({text:e.target.value});
    }

    handleSubmit(e) {

        e.preventDefault();

        var author = this.state.author.trim();
        var text = this.state.text.trim();

        if (!text || !author) return;

        this.props.onCommentSubmit({author:author,text:text});

        this.setState({author:"",text:""});
    }

    render() {
        return (
          <form className="commentForm" onSubmit={this.handleSubmit}>
            <label htmlFor="commentName">Nom</label>
            <Input
                id="commentName"
                type="text"
                className="form-control"
                placeholder="Your name"
                value={this.state.author}
                onChange={this.handleAuthorChange}
            />

            <label htmlFor="commentText">Message</label>
            <Input
                multiline
                id="commentText"
                className="form-control"
                placeholder="Say something..."
                onChange={this.handleTextChange}
                value={this.state.text}
            />
            <br/>
            <Button type="submit" className="btn btn-primary" raised accent>
              <i className="glyphicon glyphicon-ok"></i>
              Valider
            </Button>
          </form>
        );
    }
}

export default CommentForm;
