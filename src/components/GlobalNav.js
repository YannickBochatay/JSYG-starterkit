import React from 'react';
import { Link } from 'react-router';
import AppBar from "react-toolbox/lib/app_bar"
import Navigation from "react-toolbox/lib/navigation"
import Drawer from 'react-toolbox/lib/drawer';
import Button from 'react-toolbox/lib/button';

class GlobalNav extends React.Component {

  constructor(props, context) {

    super(props, context)

    this.state = { active : false }

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {

    this.setState({active:!this.state.active})
  }

  logOut() {

    alert('log out')
  }

  render() {

    return (
      <AppBar>
        <Button label="&#9776;" onClick={this.handleToggle}/>
         <Drawer active={this.state.active} onOverlayClick={this.handleToggle}>
          <h5>This is your Drawer.</h5>
          <p>You can embed any content you want, for example a Menu.</p>
        </Drawer>
        <Navigation>
          <Link to="/">Home</Link>{' '}
          <Link to="/calendar">Calendar</Link>{' '}
          <Link to="/grades">Grades</Link>{' '}
          <Link to="/comments">Comments</Link>{' '}
        </Navigation>
      </AppBar>
    )
  }
}

GlobalNav.defaultProps = {
  user: {
    id: 1,
    name: 'Ryan Florence'
  }
}

export default GlobalNav
