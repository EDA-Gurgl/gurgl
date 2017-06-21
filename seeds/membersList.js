const getHash = require('../server/lib/crypto').getHash

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('members').del().then(function() {
    return knex('members').insert([
      {
        id: 51,
        name: 'Bev Walter',
        username: 'bev',
        address: '22 Miromiro Road, Normandale, Lower Hutt, Wellington, 5010',
        phone: '0211 322 187',
        email: 'bevwaltersemail@gmail.com',
        created_on: '2017-06-01',
        hash: getHash('password')
      }, {

        id: 52,
        name: 'Alisa Yunusova',
        username: 'alisa',
        address: '20 Miromiro Road, Normandale, Lower Hutt, Wellington, 5010',
        phone: '021 345 6788',
        email: 'alisa@email.com',
        created_on: '2017-06-01',
        hash: getHash('password')
      }, {
        id: 53,
        name: 'Andrew Condon',
        username: 'andrew',
        address: '24 Miromiro Road, Normandale, Lower Hutt, Wellington, 5010',
        phone: '021 345 6789',
        email: 'andrew@email.com',
        created_on: '2017-06-01',
        hash: getHash('password')
      }, {
        id: 54,
        name: 'Thomasin Abraham',
        username: 'thomasin',
        address: '26 Miromiro Road, Normandale, Lower Hutt, Wellington, 5010',
        phone: '021 345 6790',
        email: 'thomasin@email.com',
        created_on: '2017-06-01',
        hash: getHash('password')
      }, {
        id: 55,
        name: 'Beverley Walter',
        username: 'beverly',
        address: '1 House Way, Lower Hutt, Wellington, 5010',
        phone: '012 345 6789',
        email: 'bev@email.com',
        created_on: '2017-06-01',
        hash: getHash('password')
      }, {
        id: 56,
        name: 'Marilyn Monroe',
        username: 'marily',
        address: '2 Bigger-House Road, Hollywood, Murica, CA 5284',
        phone: '012 345 2389',
        email: 'mazza@email.com',
        created_on: '2017-06-10',
        hash: getHash('password')
      }, {
        id: 57,
        name: 'Katy Perry',
        username: 'kool katy',
        address: '157 Another Place, Lower Hutt, Wellington, 5024',
        phone: '012 345 4589',
        email: 'Ikissedagirl@email.com',
        created_on: '2017-06-16',
        hash: getHash('password')
      }, {
        id: 58,
        name: 'Betty Boop',
        username: 'betty',
        address: '35 Doopity Street, Ngaio, Wellington, 5011',
        phone: '012 345 7889',
        email: 'boop@email.com',
        created_on: '2017-06-16',
        hash: getHash('password')
      }, {
        id: 59,
        name: 'Lonely Bachorlorette',
        username: 'poorlonelysoul',
        address: '1 Someone Elses Place, Miles-Away, Wellington',
        phone: '012 345 8989',
        email: 'deperate@email.com',
        created_on: '2017-06-16',
        hash: getHash('password')
      }, {
        id: 60,
        name: 'Jon Snow',
        username: 'snowysnownsow',
        address: 'c/o The Knights Watch, 1 The Wall, Far North',
        phone: '012 345 9089',
        email: 'knowssomething@email.com',
        created_on: '2017-06-16',
        hash: getHash('password')
      }, {
        id: 61,
        name: 'Existing User',
        address: 'c/o The Knights Watch, 1 The Wall, Far North',
        phone: '012 345 9089',
        email: 'knowssomething@email.com',
        created_on: '2017-06-16',
        username: 'existinguser',
        hash: getHash('password')
      }
    ])
  })
}
