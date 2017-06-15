const getClothing = (db) => {
  return db('clothing')
    .select('*')
}

const getSingleItem = (db, id) => {
  return db('clothing')
    .select('*')
    .where('id', id)
}

module.exports = {
  getClothing,
  getSingleItem
}
