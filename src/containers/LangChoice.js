import React from "react"
import { connect } from 'react-redux'
import * as actions from '../actions/intl'
import { FormattedMessage } from "react-intl"

let style = {
  display:"inline-block",
  margin:"10px",
  "cursor":"pointer"
}


class LangChoice extends React.Component {

  render() {

    return (

      <div {...this.props}>
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

const mapDispatchToProps = (dispatch,ownProps) => {

  return {

    onClick: () => {

      dispatch( ownProps.lang == "English" ? actions.setLocaleToEnglish() : actions.setLocaleToFrench() )

    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LangChoice)
