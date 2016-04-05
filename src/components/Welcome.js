import React from 'react'
import RaisedButton from "material-ui/lib/raised-button"

class Welcome extends React.Component {

  render() {

    return (
      <div>
        <h2>Welcome</h2>
        <p>
          This is a very simple template built with <a href="http://www.material-ui.com/">material-ui</a>.
        </p>
        <p>
          The comments section is from the <a href="https://facebook.github.io/react/docs/tutorial.html">react tutorial</a>.
        </p>
        <a href="comments">
          <RaisedButton
            label="See comments"
            secondary={true}
          />
        </a>
      </div>
    );
  }
}

export default Welcome;
