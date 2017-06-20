
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('favourites').del().then(function() {
    return knex('favourites').insert([
      {
        user_id: 51,
        clothing_id: 119,
        favourited_on: '2017-06-01'

      },
      {
        user_id: 51,
        clothing_id: 120,
        favourited_on: '2017-06-02'

      },
      {
        user_id: 51,
        clothing_id: 121,
        favourited_on: '2017-06-03'

      },
      {
        user_id: 51,
        clothing_id: 130,
        favourited_on: '2017-06-04'

      },
      {
        user_id: 51,
        clothing_id: 131,
        favourited_on: '2017-06-05'

      },
      {
        user_id: 51,
        clothing_id: 125,
        favourited_on: '2017-06-06'

      }
    ])
  })
}
