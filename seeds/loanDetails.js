
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('loan_details').del()
    .then(function () {
      return knex('loan_details').insert([
        {loan_id: '101',
        member_id: '123-456',
        clothing_id: 'babyg_1',
        status_id: '1',
        booked_date: '20',
        booked_month: '07',
        booked_year: '2017',
        return_by_date: '20',
        return_by_month: '09',
        return_by_year: '2017'}
      ]);
    });
};
