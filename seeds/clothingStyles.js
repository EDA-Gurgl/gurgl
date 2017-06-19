exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('style').del()
    .then(function () {
      return knex('style').insert([
        {id: 1, description: 'Pants'},
        {id: 2, description: 'Skirts'},
        {id: 3, description: 'Dresses'},
        {id: 4, description: 'T-shirts'},
        {id: 5, description: 'PJs'},
        {id: 6, description: 'Babygrows and Vests'},
        {id: 7, description: 'Outerwear'},
        {id: 8, description: 'Shoes and Socks'},
        {id: 9, description: 'Other'}
      ])
    })
}
