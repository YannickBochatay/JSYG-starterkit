"use strict";

import React from "react";
import { Card, CardTitle, CardText } from 'react-toolbox/lib/card';

class CommentBox extends React.Component {

    render() {
        return(
            <Card className="comment">
                <CardTitle title={this.props.author}></CardTitle>
                <CardText>{this.props.text}</CardText>
            </Card>
        );
    }
}

export default CommentBox;
