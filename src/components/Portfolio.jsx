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
    }))
  }

  render() {
    // React-masonry-css breakpoints:
    const breakpointColumnsObj = {
      default: 4,
      1280: 3,
      840: 2,
      680: 1,
    }

    const { filters } = this.state

    // Filter projects:
    const projectItems = []
    let filterSelected = filters.find((filterItem) => filterItem.isSelected)
      .category
    data.forEach((project) => {
      if (filterSelected === project.category || filterSelected === 'All') {
        return projectItems.push(project)
      }
    })

    return (
      <>
        <ul className="toolbar">
          {filters.map((o) => (
            <Toolbar key={o.id} filterItem={o} onSelect={this.onSelectFilter} />
          ))}
        </ul>
        {/* <ul className="list"> */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="project-list"
          columnClassName="project-list_column">
          {projectItems.map((project, i) => (
            <div key={i}>
              <ProjectList project={project} />
            </div>
          ))}
        </Masonry>
        {/* </ul> */}
      </>
    )
  }
}
