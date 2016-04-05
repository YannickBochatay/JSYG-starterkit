import React from 'react'
import LeftNav from 'material-ui/lib/left-nav'
import AppBar from 'material-ui/lib/app-bar'
import MenuItem from 'material-ui/lib/menus/menu-item'
import IconButton from 'material-ui/lib/icon-button'
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert'
import IconMenu from 'material-ui/lib/menus/icon-menu'
import page from "page"


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

  signOut() {
    window.alert("Bye bye")
  }

  render() {

    return (

      <AppBar
        title="My App"
        onLeftIconButtonTouchTap={this.toggleMenu}
        //onTitleTouchTap={ goHome }
        //titleStyle={ {cursor:"pointer"} }

        iconElementRight={
          <IconMenu
            iconButtonElement={ <IconButton><MoreVertIcon /></IconButton> }
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            <MenuItem primaryText="Sign out" onClick={this.signOut} />
          </IconMenu>
        }
      >
      <LeftNav
        open={this.state.menuOpen}
        docked={false}
        onRequestChange={menuOpen => this.setState({menuOpen})}
      >
        <MenuItem onClick={ () => { page('/'); this.closeMenu() } }>Home</MenuItem>
        <MenuItem onClick={ () => { page('/comments'); this.closeMenu() } }>Comments</MenuItem>
        <MenuItem onClick={ () => { page('/this_is_a_bad_link'); this.closeMenu() } }>Bad link</MenuItem>
      </LeftNav>
      </AppBar>

    )
  }
}

export default GlobalNav
