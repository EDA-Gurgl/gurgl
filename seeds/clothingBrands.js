exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('clothing_brands').del()
    .then(function () {
      return knex('clothing_brands').insert([
         {brand_id: '1', clothing_brand: 'The Warehouse'},
         {brand_id: '2', clothing_brand: 'Kmart'},
         {brand_id: '3', clothing_brand: 'Farmers'},
         {brand_id: '4', clothing_brand: 'T&T'},
         {brand_id: '5', clothing_brand: 'Baby Factory'},
         {brand_id: '6', clothing_brand: 'Kids Republic'},
         {brand_id: '7', clothing_brand: 'JK'},
         {brand_id: '8', clothing_brand: 'Pumpkin Patch'},
         {brand_id: '9', clothing_brand: 'Designer'},
         {brand_id: '10', clothing_brand: 'Other'}
      ]);
    });
};
