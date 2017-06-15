export const setClothes = (clothes) => {
  setFilters(clothes)
  return {
    type: 'GET_CLOTHING',
    clothes
  }
}

export function setFilters (clothes) {
  let filterObject = {
    size: [],
    brand: [],
    style: []
  }

  clothes.forEach((item) => {
    if (!filterObject.size.includes(item.size_id)) filterObject.size.push(item.size_id)
    if (!filterObject.brand.includes(item.brand_id)) filterObject.brand.push(item.brand_id)
    if (!filterObject.style.includes(item.style_id)) filterObject.style.push(item.style_id)
  })

  return {
    type: 'POSSIBLE_FILTERS',
    filterObject
  }
}

export function updateFilter (kind, term) {
  return {
    type: 'UPDATE_FILTER',
    kind,
    term
  }
}
