import shortid from 'shortid'

class ProjectModel {
  constructor(category, img) {
    this.id = shortid.generate()
    this.category = category
    this.img = img
  }
}

export default ProjectModel
