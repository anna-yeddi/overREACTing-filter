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
  }

  render() {
    const { category, isSelected } = this.props.filter

    return (
      <li>
        <button
          onClick={this.onSelect}
          aria-selected={isSelected}
          className={isSelected && 'filter-selected'}>
          {category}
        </button>
      </li>
    )
  }
}

{
  /* <Toolbar
  filters={["All", "Websites", "Flayers", "Business Cards"]}
  isSelected="All"
  onSelectFilter={(filter) => {console.log(filter);}}/> */
}
