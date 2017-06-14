
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('members').del()
    .then(function () {
      return knex('members').insert([
        {id: 51, name: 'Bev Walter', address: '22 Miromiro Road, Normandale, Lower Hutt, Wellington, 5010', phone: '0211 322 187', email: 'bevwaltersemail@gmail.com', created_on: '01/07/2017'},
        {id: 52, name: 'Alisa Yunusova', address: '22 Miromiro Road, Normandale, Lower Hutt, Wellington, 5010', phone: '021 345 6788', email: 'alisa@email.com', created_on: '01/07/2017'},
        {id: 53, name: 'Andrew Condon', address: '22 Miromiro Road, Normandale, Lower Hutt, Wellington, 5010', phone: '021 345 6789', email: 'andrew@email.com', created_on: '01/07/2017'},
        {id: 54, name: 'Thomasin Abraham', address: '22 Miromiro Road, Normandale, Lower Hutt, Wellington, 5010', phone: '021 345 6790', email: 'thomasin@email.com', created_on: '01/07/2017'}
      ])
    })
}
