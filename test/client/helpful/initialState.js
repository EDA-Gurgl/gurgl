export let initialState = {
  clothing: [{
    id: 1,
    size_description: '0-3 months',
    style_description: 'Babygrows and Vests',
    brand_description: 'Baby Factory',
    condition_description: 'Good',
    description: 'Testing',
    photo1: '/images/babyg_2.jpg',
    photo2: ''
  },
  {
    id: 2,
    size_description: '3-6 months',
    style_description: 'PJs',
    brand_description: 'Baby Factory',
    condition_description: 'Good',
    description: 'Testing search',
    photo1: '/images/babyg_1.jpg',
    photo2: ''
  }],
  search: '',
  possibleFilters: {
    size: ['0-3 months', '3-6 months'],
    brand: ['Baby Factory'],
    style: ['PJs', 'Babygrows and Vests']
  }
}
