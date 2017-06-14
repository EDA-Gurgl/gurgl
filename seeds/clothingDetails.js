
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('clothing').del()
    .then(function () {
      return knex('clothing').insert([
        {id: 100,
        size_id: 32,
        style_id: 8,
        brand_id: 5,
        condition_id: 22,
        status_id: 1,
        description: 'Very cute babygrow, in nice condition. Please note there is slight pilling on rear. Fit comes up slightly small. Suitable as an under-layer or for use in warmer weather.',
        photo1: '/images/babyg_1',
        photo2: '', }
      ]);
    });
};
