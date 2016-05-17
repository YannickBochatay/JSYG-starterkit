import React from "react"
import { connect } from 'react-redux'
import * as actions from '../actions/intl'
import { FormattedMessage } from "react-intl"

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

    return (

      <div {...this.props} onClick={ this.handleClick.bind(this) }>
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
