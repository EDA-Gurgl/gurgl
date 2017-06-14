
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('clothing_details').del()
    .then(function () {
      return knex('clothing_details').insert([
        {clothing_id: 'babyg_1',
        size_id: '2',
        style_id: '8',
        brand_id: '5',
        condition_id: '2',
        status_id: '1',
        clothing_description: 'Very cute babygrow, in nice condition. Please note there is slight pilling on rear. Fit comes up slightly small. Suitable as an under-layer or for use in warmer weather.',
        photo_1: 'Link to public/images 01',
        photo_2: 'Link to public/images 02', },
      ]);
    });
};
