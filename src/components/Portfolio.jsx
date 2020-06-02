import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Toolbar from './Toolbar'
import ProjectList from './ProjectList'
import FilterModel from '../models/FilterModel'

export default class Portfolio extends Component {
  static propTypes = {
    prop: PropTypes.func.isRequired,
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
        <ul className="implicitList toolbar">
          {filters.map((o) => (
            <Toolbar key={o.id} filter={o} onSelect={this.onSelectFilter} />
          ))}
        </ul>
        <ul className="implicitList">
          <ProjectList />
        </ul>
      </>
    )
  }
}
