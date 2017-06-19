export const setClothes = (clothes) => {
  return {
    type: 'GET_CLOTHING',
    clothes
  }
}

export const fetchClothes = (message) => {
  return {
    type: 'FETCH_CLOTHING',
    message
  }
}

export function setFilters (clothes) {
  let filterObject = {
    size: [],
    brand: [],
    style: []
  }

  clothes.forEach((item) => {
    if (!filterObject.size.includes(item.size_description)) filterObject.size.push(item.size_description)
    if (!filterObject.brand.includes(item.brand_description)) filterObject.brand.push(item.brand_description)
    if (!filterObject.style.includes(item.style_description)) filterObject.style.push(item.style_description)
  })

  return {
    type: 'POSSIBLE_FILTERS',
    filterObject
  }
}

export const updateFilter = (kind, term) => {
  return {
    type: 'UPDATE_FILTER',
    kind,
    term
  }
}
