import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Toolbar from './Toolbar'
import ProjectList from './ProjectList'

export default class Portfolio extends Component {
  static propTypes = {
    prop: PropTypes,
  }
  state = {
    filters: [
      new FilterModel('All', true),
      new FilterModel('Business Cards'),
      new FilterModel('Websites'),
      new FilterModel('Flayers'),
    ],
  }

  onSelectFilter = (filter) => {
    this.setState((prevState) => ({
      filters: prevState.filters.map((o) => {
        if (o.id === filter.id) {
          return { ...o, isSelected: !o.isSelected }
        }
        return o
      }),
    }))
  }

  render() {
    const { filters } = this.state

    return (
      <>
        <ul>
          {filters.map((o) => (
            <Toolbar key={o.id} filter={o} onSelect={this.onSelectFilter} />
          ))}
        </ul>
        <ProjectList category={o.category && o.isSelected} />
      </>
    )
  }
}
