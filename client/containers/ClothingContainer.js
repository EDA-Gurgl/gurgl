import {connect} from 'react-redux'

import Clothing from '../components/Clothing'

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

function searchClothing (term, items) {
  return items.filter((item) => {
    return item.description.includes(term)
  })
}

function mapStateToProps (state) {
  let searchResults
  if (state.search) searchResults = searchClothing(state.search, clothingSeeds)
  return {
    search: state.search,
    clothing: searchResults || clothingSeeds
  }
}

export default connect(
  mapStateToProps
)(Clothing)
