import { IntlProvider } from "react-intl"
import { connect } from "react-redux"

function mapStateToProps(state) {

  let { intl } = state

  return {
    locale: intl.get("locale"),
    messages: intl.get("messages").toJS(),
    key: intl.get("locale")
  }
}

export default connect(mapStateToProps)(IntlProvider)
