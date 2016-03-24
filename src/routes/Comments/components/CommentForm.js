"use strict";

import React from "react";

class CommentForm extends React.Component {

    constructor(props) {

      super(props);
      this.state = {author:"",text:""};

      this.handleAuthorChange = this.handleAuthorChange.bind(this);
      this.handleTextChange = this.handleTextChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleAuthorChange(e) {

        this.setState({author:e.target.value});
    }

    handleTextChange(e) {

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
            <fieldset>
            <label htmlFor="commentName">Nom</label>
            <input
                id="commentName"
                type="text"
                className="form-control"
                placeholder="Your name"
                value={this.state.author}
                onChange={this.handleAuthorChange}
            />

            <label htmlFor="commentText">Message</label>
            <textarea
                id="commentText"
                className="form-control"
                placeholder="Say something..."
                onChange={this.handleTextChange}
                value={this.state.text}
            />
            <br/>
            <button type="submit" className="btn btn-primary">
              <i className="glyphicon glyphicon-ok"></i>
              Valider
            </button>
            </fieldset>
          </form>
        );
    }
}

export default CommentForm;
