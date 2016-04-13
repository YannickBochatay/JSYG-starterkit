import { IntlProvider } from "react-intl"
import { connect } from "react-redux"

function mapStateToProps(state) {

  return {
    locale: state.intl.locale,
    messages:state.intl.messages,
    key:state.intl.locale
  }
}

export default connect(mapStateToProps)(IntlProvider)
