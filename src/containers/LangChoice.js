import React from "react"
import { connect } from 'react-redux'
import * as actions from '../actions/intl'
import { FormattedMessage } from "react-intl"
import FrenchFlag from "../assets/img/Flag_of_France.svg"
import UKFlag from "../assets/img/Flag_of_UK.svg"
import unknownFlag from "../assets/img/Flag_of_unknown.svg"

let style = {
  display:"inline-block",
  cursor:"pointer",
  fontSize:"0.8em",
  lineHeight:"150%"
}


class LangChoice extends React.Component {

  handleClick() {

    this.props.dispatch( this.props.lang == "English" ? actions.setLocaleToEnglish() : actions.setLocaleToFrench() )
  }

  render() {

    let flag = {
      src : null,
      style : {
        width:25,
        marginRight:10
      }
    }

    switch (this.props.lang) {
      case "French" : flag.src = FrenchFlag; break
      case "English" : flag.src = UKFlag; break
      default : flag.src = unknownFlag; break
    }

    return (

      <div {...this.props} onClick={ this.handleClick.bind(this) }>
        <img src={flag.src} alt={ this.props.lang + "flag" } style={flag.style}/>
        <FormattedMessage id={ this.props.lang }/>
      </div>

    )
  }
}


const mapStateToProps = (state,ownProps) => {

  return {
    style : state.intl.get("locale") == ownProps.locale ? { ...style, textDecoration:"underline"} : style
  }
}


export default connect(
  mapStateToProps
)(LangChoice)
