const getClothing = (db) => {
  return db('clothing')
    .select(
      '*',
      'size.description as size_description',
      'brand.description as brand_description')
    .join('size', 'clothing.size_id', '=', 'size.id')
    .join('brand', 'clothing.brand_id', '=', 'brand.id')
    .join('style', 'clothing.style_id', '=', 'style.id')
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
