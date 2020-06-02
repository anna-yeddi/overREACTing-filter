import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Toolbar extends Component {
  static propTypes = {
    filters: PropTypes.arrayOf(PropTypes.string).isRequired,
    isSelected: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired,
  }

  onSelect = () => {
    this.props.onSelect(this.props.filter)
    console.log(this.props.filter)
  }

  render() {
    const { category, isSelected } = this.props.filter

    return (
      <li className="toolbarItem">
        <button
          onClick={this.onSelect}
          aria-current={isSelected}
          className={(isSelected ? 'filterSelected' : null) + ' ' + 'filter'}>
          {category}
        </button>
      </li>
    )
  }
}
