exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('condition').del()
    .then(function () {
      return knex('condition').insert([
        {id: 21, description: 'As new'},
        {id: 22, description: 'Good'},
        {id: 23, description: 'Some wear'},
        {id: 24, description: 'Worn'}
      ]);
    });
};
