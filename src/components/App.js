import "grommet/grommet.min.css"

import React from 'react'

import GlobalNav from "./GlobalNav"
import GrommetApp from "grommet/components/App"
import Welcome from "./Welcome"

class App extends React.Component {

  render() {

    return (
      <GrommetApp>
        <GlobalNav/>
        <div>
          {this.props.children || <Welcome/>}
        </div>
      </GrommetApp>
    )
  }

}

export default App
