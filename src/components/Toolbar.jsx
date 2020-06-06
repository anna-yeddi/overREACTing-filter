import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FilterModel from '../models/FilterModel'

export default class Toolbar extends Component {
  static propTypes = {
    filterItem: PropTypes.oneOfType([
      PropTypes.instanceOf(FilterModel),
      PropTypes.shape(PropTypes.String),
    ]).isRequired,
    onSelect: PropTypes.func.isRequired,
  }

  onSelect = () => {
    this.props.onSelect(this.props.filterItem)
    console.log(this.props.filterItem)
  }

  render() {
    const { category, isSelected } = this.props.filterItem

    return (
      <li className="toolbar-item">
        <button
          onClick={this.onSelect}
          aria-current={isSelected}
          className={`filter ${isSelected ? 'filter-selected' : ''}`}>
          {category}
        </button>
      </li>
    )
  }
}
