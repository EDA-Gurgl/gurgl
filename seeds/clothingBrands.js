exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('brand').del()
    .then(function () {
      return knex('brand').insert([
         {id: 1, description: 'The Warehouse'},
         {id: 2, description: 'Kmart'},
         {id: 3, description: 'Farmers'},
         {id: 4, description: 'T&T'},
         {id: 5, description: 'Baby Factory'},
         {id: 6, description: 'Kids Republic'},
         {id: 7, description: 'JK'},
         {id: 8, description: 'Pumpkin Patch'},
         {id: 9, description: 'Designer'},
         {id: 10, description: 'Other'}
      ]);
    });
};
