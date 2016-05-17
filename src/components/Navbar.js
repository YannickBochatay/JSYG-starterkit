import React from 'react'
import { Link } from 'react-router'
import { FormattedMessage } from "react-intl"
import LangChoice from "../containers/LangChoice"


class Item extends React.Component {

  render() {

    let style = {
      li:{
        display:"inline-block",
        padding:"0 10px"
      }
    }

    return (
      <li style={style.li}>
        <Link to={this.props.link}>
          <FormattedMessage id={this.props.label}/>
        </Link>
      </li>
    )
  }
}


export default class GlobalNav extends React.Component {

  render() {

    let style = {
      ul : {
        listStyleType:"none",
        display:"inline-block"
      }
    }

    return (

      <nav>

        <ul style={style.ul}>
          <Item link="/" label="Home"/>
          <Item link="comments" label="Comments"/>
          <Item link="todo" label="To do"/>
          <Item link="reddit" label="Reddit"/>
        </ul>

        <ul style={style.ul}>
          <LangChoice lang="French" locale="fr"/>
          &nbsp;
          <LangChoice lang="English" locale="en"/>
        </ul>

      </nav>
    )
  }
}
