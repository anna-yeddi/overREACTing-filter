import React from 'react'
import Masonry from 'react-masonry-css'
import data from './data/data.json'

function ProjectList() {
  // const queries = [
  //   {
  //     columns: 2,
  //     query: 'min-width: 30rem',
  //   },
  //   {
  //     columns: 3,
  //     query: 'min-width: 60rem',
  //   },
  // ]

  return (
    <Masonry
      breakpointCols={3}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column">
      {data.map((data, i) => (
        <li key={i}>
          <img
            src={data.img}
            alt={data.alt + ', category: ' + data.category}
            className="project-item"
          />
        </li>
      ))}
    </Masonry>
  )

  // return (
  //   <Columns gap="1rem" queries={queries}>
  //     {data.map((data, i) => (
  //       <li key={i}>
  //         <img
  //           src={data.img}
  //           alt={data.alt + ', category: ' + data.category}
  //           className="projectItem"
  //         />
  //       </li>
  //     ))}
  //   </Columns>
  // )
}

export default ProjectList
