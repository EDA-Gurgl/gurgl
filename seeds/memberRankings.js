exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('membership_rankings').del()
    .then(function () {
      return knex('membership_rankings').insert([
        {ranking_id: '1',membershipRanking: 'Bronze'},
        {ranking_id: '2',membershipRanking: 'Silver'},
        {ranking_id: '3',membershipRanking: 'Gold'},
        {ranking_id: '4',membershipRanking: 'Platinum'},
        {ranking_id: '5',membershipRanking: 'Diamond'}
      ]);
    });
};
