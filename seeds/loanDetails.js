
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('loans').del()
    .then(function () {
      return knex('loans').insert([
        {
          id: 201,
          member_id: 51,
          clothing_id: 100,
          loaned_on: '2017-07-22',
          due_back_on: '2017-09-22',
          returned_on: '2017-09-02'
        }
      ])
    })
}
