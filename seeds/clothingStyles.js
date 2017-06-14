exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('style').del()
    .then(function () {
      return knex('style').insert([
        {id: 1, description: 'Pants'},
        {id: 2, description: 'Skirts'},
        {id: 3, description: 'Dresses'},
        {id: 4, description: 'Jumpers'},
        {id: 5, description: 'Hoodies'},
        {id: 6, description: 'T-shirts'},
        {id: 7, description: 'PJs'},
        {id: 8, description: 'Babygrows and Vests'},
        {id: 9, description: 'Coats'},
        {id: 10, description: 'Shoes and Socks'},
        {id: 11, description: 'Other'},
        {id: 12, description: 'Accessories'}
      ]);
    });
};
