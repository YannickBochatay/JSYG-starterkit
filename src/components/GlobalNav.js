import React from 'react'
import Layer from 'grommet/components/Layer'
import Menu from 'grommet/components/Menu'
import Header from "grommet/components/Header"
//import Title from "grommet/components/Title"
import Anchor from "grommet/components/Anchor"
import IconMenu from "grommet/components/icons/base/Menu"
import FlagIcon from "./FlagIcon"

import { Link } from 'react-router'
import { FormattedMessage } from "react-intl"


export default class GlobalNav extends React.Component {

  constructor(props) {

    super(props)

    this.state = { hidden : true }
  }

  toggleSideBar() {

    this.setState({ hidden : !this.state.hidden })
  }

  closeSideBar() {

    this.setState({ hidden : true})
  }

  render() {

    let that = this

    function toggle(e) {
      e.preventDefault()
      that.toggleSideBar()
    }

    let clickFlag = this.props.onClickFlag

    let close = this.closeSideBar.bind(this)

    let flagStyle = {
      display:"inline-block",
      margin:"10px",
      "cursor":"pointer"
    }

    return (

      <Header pad="medium">

        <Anchor href="#" label={<IconMenu/>} onClick={toggle} />

        <h1 style={{marginLeft:"30px",marginRight:"30px"}}>
          <FormattedMessage id="My App"/>
        </h1>

        <FormattedMessage id="French">
          { (country)=> <FlagIcon country="fr" countryLong={country} onClick={ () => clickFlag("fr") } style={flagStyle}/> }
        </FormattedMessage>

        <FormattedMessage id="English">
          { (country)=> <FlagIcon country="en" countryLong={country} onClick={ () => clickFlag("en") } style={flagStyle}/> }
        </FormattedMessage>

        <Layer onClose={close} closer={true} align="left" hidden={this.state.hidden}>
          <Menu pad={ { vertical:"large" } }>
            <Link to="/" onClick={close}>
              <FormattedMessage id="Home"/>
            </Link>
            <Link to="comments" onClick={close}>
              <FormattedMessage id="Comments"/>
            </Link>
          </Menu>
        </Layer>

      </Header>
    )
  }
}
