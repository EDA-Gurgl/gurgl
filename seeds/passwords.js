exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('passwords').del()
    .then(function () {
      return knex('members').insert([
        {id: 1, member_id: 51, username: 'bwalter', hash: ''},
        {id: 2, member_id: 52, username: 'ayunusova', hash: ''},
        {id: 3, member_id: 53, username: 'acondon', hash: ''},
        {id: 4, member_id: 54, username: 'tabraham', hash: ''},
      ]);
    });
};
