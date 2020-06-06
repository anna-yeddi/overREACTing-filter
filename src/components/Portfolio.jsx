import React, { Component } from 'react'
import Masonry from 'react-masonry-css'
import Toolbar from './Toolbar'
import ProjectList from './ProjectList'
import FilterModel from '../models/FilterModel'
import data from './data/data.json'

export default class Portfolio extends Component {
  constructor() {
    super()

    this.state = {
      filters: [
        new FilterModel('All', true),
        new FilterModel('Business Cards'),
        new FilterModel('Websites'),
        new FilterModel('Flayers'),
      ],
      filterSelected: 'All',
    }
  }

  onSelectFilter = (filterItem) => {
    this.setState((prevState) => ({
      filters: prevState.filters.map((o) => {
        if (o.id === filterItem.id) {
          return { ...o, isSelected: true }
        } else {
          return { ...o, isSelected: false }
        }
      }),
      filterSelected: (prevState.filterSelected = 'Websites'),
    }))
  }

  render() {
    // React-masonry-css breakpoints:
    const breakpointColumnsObj = {
      default: 4,
      1100: 3,
      700: 2,
      500: 1,
    }

    const { filters } = this.state

    return (
      <>
        <ul className="list toolbar">
          {filters.map((o) => (
            <Toolbar key={o.id} filterItem={o} onSelect={this.onSelectFilter} />
          ))}
        </ul>
        {/* <div className="list"> */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid list"
          columnClassName="my-masonry-grid_column">
          {data
            .filter((project) => project.category.includes('Flayers'))
            .map((project, i) => (
              <li key={i}>
                <ProjectList project={project} />
              </li>
            ))}
        </Masonry>
        {/* </ul> */}
      </>
    )
  }
}
