function clothing (state = [], action) {
  switch (action.type) {
    case 'GET_CLOTHING':
      console.log('hitting the reducer', [...action.allClothes])
      return [...action.allClothes]
    default:
      return state
  }
}

export default clothing
