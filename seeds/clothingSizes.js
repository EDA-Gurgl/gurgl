exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('clothing_sizes').del()
    .then(function () {
      return knex('clothing_sizes').insert([
        {size_id: '1', clothing_sizes: 'Premmy'},
        {size_id: '2', clothing_sizes: '0-3 months'},
        {size_id: '3', clothing_sizes: '3-6 months'},
        {size_id: '4', clothing_sizes: '6-9 months'},
        {size_id: '5', clothing_sizes: '9-12 months'},
        {size_id: '6', clothing_sizes: '12-18 months'},
        {size_id: '7', clothing_sizes: '18-24 months'},
        {size_id: '8', clothing_sizes: 'Other'}
      ]);
    });
};
