import React from 'react'
import LeftNav from 'material-ui/lib/left-nav'
import AppBar from 'material-ui/lib/app-bar'
import MenuItem from 'material-ui/lib/menus/menu-item'

class GlobalNav extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      menuOpen : false
    }

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {

    this.setState({ menuOpen: !this.state.menuOpen })
  }

  closeMenu() {

    this.setState({ menuOpen: false })
  }

  createGoToFct(path) {

    var that = this;

    return () => {
      that.closeMenu()
      that.context.router.push(path)
    }
  }

  render() {

    let goHome = this.createGoToFct('/')

    return (

      <AppBar
        title="My App"
        onLeftIconButtonTouchTap={this.toggleMenu}
        onTitleTouchTap={ goHome }
        titleStyle={ {cursor:"pointer"} }
      >
      <LeftNav
        open={this.state.menuOpen}
        docked={false}
        onRequestChange={menuOpen => this.setState({menuOpen})}
      >
        <MenuItem onClick={ goHome }>Home</MenuItem>
        <MenuItem onClick={ this.createGoToFct('/comments') }>Comments</MenuItem>
      </LeftNav>
      </AppBar>

    )
  }
}

GlobalNav.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default GlobalNav
