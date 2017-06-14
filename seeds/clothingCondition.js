exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('clothing_condition').del()
    .then(function () {
      return knex('clothing_condition').insert([
        {condition_id: '1', clothing_condtion: 'As new'},
        {condition_id: '2', clothing_condtion: 'Good'},
        {condition_id: '3', clothing_condtion: 'Some wear'},
        {condition_id: '4', clothing_condtion: 'Worn'}
      ]);
    });
};
