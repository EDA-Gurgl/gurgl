import {connect} from 'react-redux'

import FilterRow from '../components/subcomponents/FilterRow_Clothing'

var clothingSeeds =
  [{
    id: 100,
    size_id: 32,
    style_id: 8,
    brand_id: 5,
    condition_id: 22,
    status_id: 51,
    description: 'Very cute babygrow, in nice condition.  Please note there is slight pilling on rear. Fit  comes up slightly small. Suitable as an under-layer or for use in warmer weather.',
    photo1: '/images/babyg_1.jpg',
    photo2: ''
  },
  {
    id: 120,
    size_id: 35,
    style_id: 4,
    brand_id: 2,
    condition_id: 21,
    status_id: 51,
    description: 'I am a clothing',
    photo1: '/images/babyg_2.jpg',
    photo2: ''
  },
  {
    id: 121,
    size_id: 34,
    style_id: 3,
    brand_id: 1,
    condition_id: 24,
    status_id: 51,
    description: 'Very cute babygrow, in nice condition.  Please note there is slight pilling on rear. Fit comes up slightly small. Suitable as an under-layer or for use in summer.',
    photo1: '/images/babyg_3.jpg',
    photo2: ''
  },
  {
    id: 122,
    size_id: 37,
    style_id: 6,
    brand_id: 5,
    condition_id: 22,
    status_id: 51,
    description: 'Very pink babygrow, in nice condition. Please note there is slight pilling on rear. Fit comes up slightly small. Suitable as an under-layer or for use in warmer weather.',
    photo1: '/images/dress_1.jpg',
    photo2: ''
  },
  {
    id: 123,
    size_id: 35,
    style_id: 7,
    brand_id: 3,
    condition_id: 21,
    status_id: 51,
    description: 'Very cute babygrow, in nice condition. Please note there is slight pilling on rear. Fit comes up slightly small. Suitable as an under-layer or for use in warmer weather or winter.',
    photo1: '/images/dress_2.jpg',
    photo2: ''
  }]

function filterOptions (items) {
  let filterObject = {
    size: [],
    style: [],
    brand: []
  }
  items.forEach((item) => {
    if (!filterObject.size.includes(item.size_id)) filterObject.size.push(item.size_id)
    if (!filterObject.style.includes(item.style_id)) filterObject.style.push(item.style_id)
    if (!filterObject.brand.includes(item.brand_id)) filterObject.brand.push(item.brand_id)
  })
  return filterObject
}

var filterTerms = {
  size: [],
  style: [],
  brand: []
}

function mapStateToProps (state) {
  let filterObject = filterOptions(clothingSeeds)
  return {
    filterObject,
    filterTerms
  }
}

export default connect(
  mapStateToProps
)(FilterRow)
