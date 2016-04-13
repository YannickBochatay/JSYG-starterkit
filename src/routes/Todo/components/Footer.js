import React from 'react'
import FilterLink from '../containers/FilterLink'
import {FormattedMessage} from "react-intl"

export default class Footer extends React.Component {

  render() {

    return (<p>

        <FormattedMessage id="Show"/>&nbsp;:&nbsp;

        <FilterLink filter="SHOW_ALL">
          <FormattedMessage id="TodoAll"/>
        </FilterLink>&nbsp;

        <FilterLink filter="SHOW_ACTIVE">
          <FormattedMessage id="TodoActive"/>
        </FilterLink>&nbsp;

        <FilterLink filter="SHOW_COMPLETED">
          <FormattedMessage id="TodoCompleted"/>
        </FilterLink>

      </p>
    )
  }
}

