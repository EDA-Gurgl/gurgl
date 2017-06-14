
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('loans').del()
    .then(function () {
      return knex('loans').insert([
        {id: 201,
        member_id: 51,
        clothing_id: 100,
        loaned_on: '20/06/2017',
        due_back_on: '20/08/2017',
        returned_on: '09/08/2017' }
      ]);
    });
};
