"use strict";

import React from "react"
import FontIcon from 'material-ui/lib/font-icon'
import Button from 'material-ui/lib/raised-button'
import Paper from 'material-ui/lib/paper'
import TextField from 'material-ui/lib/text-field'


class CommentForm extends React.Component {

    constructor(props) {

      super(props);
      this.state = {author:"",text:""}

      this.handleAuthorChange = this.handleAuthorChange.bind(this)
      this.handleTextChange = this.handleTextChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSomethingChange() {

      this.props.onCommentChange(true)
    }

    handleAuthorChange(e) {

        this.handleSomethingChange()
        this.setState({author:e.target.value})
    }

    handleTextChange(e) {

        this.handleSomethingChange()
        this.setState({text:e.target.value})
    }

    handleSubmit(e) {

        e.preventDefault();

        var author = this.state.author.trim()
        var text = this.state.text.trim()

        if (!text || !author) return

        this.props.onCommentChange(false)

        this.props.onCommentSubmit({author:author,text:text})

        this.setState({author:"",text:""})
    }

    render() {

      return (
        <Paper zDepth={1} style={ {marginTop:50,padding:20} }>
          <form onSubmit={this.handleSubmit}>
            <h2>Leave a comment</h2>
            <TextField
              hintText="Name"
              onChange={this.handleAuthorChange}
              defaultValue={this.state.text}
            />
            <br/>
            <TextField
              hintText="Say something..."
              multiLine={true}
              onChange={this.handleTextChange}
              defaultValue={this.state.text}
            />
            <br/>
            <Button
              label="Valider"
              type="submit"
              secondary={true}
              icon={<FontIcon className="muidocs-icon-custom-github"/>}
            />
          </form>
        </Paper>
      );
    }
}

export default CommentForm;
