/*globals COURSES:true */
import React from 'react'
import Dashboard from './Dashboard'
import GlobalNav from './GlobalNav'

import "normalize.css"
import "roboto-fontface"
import "material-design-icons"
import "react-toolbox/lib/commons"
import ToolboxApp from 'react-toolbox/lib/app'

import '../stubs/COURSES';

class App extends React.Component {

  render() {

    return (
      <ToolboxApp>
        <GlobalNav />
        <div style={{ padding: 20 }}>
          {this.props.children || <Dashboard courses={COURSES} />}
        </div>
      </ToolboxApp>
    )
  }
}

module.exports = App
