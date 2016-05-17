import React from 'react'

import Navbar from "./Navbar"
import Welcome from "./Welcome"

class App extends React.Component {

  render() {

    return (
      <div class="container">
        <Navbar/>
        <div>
          {this.props.children || <Welcome/>}
        </div>
      </div>
    )
  }

}

export default App
