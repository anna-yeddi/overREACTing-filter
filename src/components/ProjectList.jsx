import React from 'react'
import PropTypes from 'prop-types'

function ProjectList(props) {
  const project = props.project

  return (
    <img
      src={project.img}
      alt={`${project.alt}, category: ${project.category}`}
      className="project-list-item"
    />
  )
}

ProjectList.propTypes = {
  project: PropTypes.objectOf(PropTypes.string).isRequired,
}

export default ProjectList
