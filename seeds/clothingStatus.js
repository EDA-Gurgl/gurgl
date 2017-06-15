exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('status').del()
    .then(function () {
      return knex('status').insert([
        {id: 51, description: 'In'},
        {id: 52, description: 'Out'},
        {id: 53, description: 'With admin'},
        {id: 54, description: 'Retired'}
      ])
    })
}
