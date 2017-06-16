import update from 'immutability-helper'

update.extend('$removeItem', function (item, original) {
  return original.filter((el) => {
    return el !== item[0]
  })
})

function filterSelection (state = {size: [], style: [], brand: []}, action = {}) {
  switch (action.type) {
    case 'UPDATE_FILTER':
      return (state[action.kind].includes(action.term))
      ? update(state, {
        [action.kind]: {$removeItem: [action.term]}
      })
      : update(state, {
        [action.kind]: {$push: [action.term]}
      })
    default:
      return state
  }
}

export default filterSelection
