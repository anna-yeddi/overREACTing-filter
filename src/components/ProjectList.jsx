import React from 'react'
import PropTypes from 'prop-types'

function ProjectList(props) {
  const { projects } = props.projects

  return <div></div>
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape).isRequired,
}

export default ProjectList
