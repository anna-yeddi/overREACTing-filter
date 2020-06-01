import shortid from 'shortid'

class FilterModel {
  constructor(category, isSelected = false) {
    this.id = shortid.generate()
    this.category = category
    this.isSelected = isSelected
  }
}

export default FilterModel
