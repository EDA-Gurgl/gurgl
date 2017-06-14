
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('members_list').del()
    .then(function () {
      return knex('members_list').insert([
        {member_id: 1, member_name: 'Bev Walter', member_address: '22 Miromiro Road, Normandale, Lower Hutt, Wellington, 5010', member_phone: '0211 322 187', member_email: 'bevwaltersemail@gmail.com', member_created: '01/07/2017', member_rating: 'Bronze'},
        {member_id: 2, member_name: 'Alisa Yunusova', member_address: '22 Miromiro Road, Normandale, Lower Hutt, Wellington, 5010', member_phone:'021 345 6788', member_email: 'alisa@email.com', member_created: '01/07/2017', member_rating: 'Bronze'},
        {member_id: 3, member_name: 'Andrew Condon', member_address:'22 Miromiro Road, Normandale, Lower Hutt, Wellington, 5010', member_phone:'021 345 6789', member_email:'andrew@email.com', member_created: '01/07/2017', member_rating: 'Bronze'},
        {member_id: 4, member_name: 'Thomasin Abraham', member_address:'22 Miromiro Road, Normandale, Lower Hutt, Wellington, 5010', member_phone:'021 345 6790', member_email:'thomasin@email.com', member_created: '01/07/2017', member_rating: 'Bronze'},
      ]);
    });
};
