exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('size').del()
    .then(function () {
      return knex('size').insert([
        {id: 31, description: 'Prem'},
        {id: 32, description: '0-3 months'},
        {id: 33, description: '3-6 months'},
        {id: 34, description: '6-9 months'},
        {id: 35, description: '9-12 months'},
        {id: 36, description: '12-18 months'},
        {id: 37, description: '18-24 months'}
      ]);
    });
};
