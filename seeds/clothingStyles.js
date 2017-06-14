exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('clothing_styles').del()
    .then(function () {
      return knex('clothing_styles').insert([
        {style_id: '1', clothing_style: 'Pants'},
        {style_id: '2', clothing_style: 'Skirts'},
        {style_id: '3', clothing_style: 'Dresses'},
        {style_id: '4', clothing_style: 'Jumpers'},
        {style_id: '5', clothing_style: 'Hoodies'},
        {style_id: '6', clothing_style: 'T-shirts'},
        {style_id: '7', clothing_style: 'PJs'},
        {style_id: '8', clothing_style: 'Babygrows and Vests'},
        {style_id: '9', clothing_style: 'Coats'},
        {style_id: '10', clothing_style: 'Shoes and Socks'},
        {style_id: '11', clothing_style: 'Other'},
        {style_id: '12', clothing_styles: 'Accessories'}
      ]);
    });
};
