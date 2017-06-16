const getClothing = (db) => {
  return db('clothing')
    .select(
      '*',
      'size.description as size_description',
      'brand.description as brand_description',
      'style.description as style_description',
      'condition.description as condition_description',
      'status.description as status_description')

    .join('size', 'clothing.size_id', '=', 'size.id')
    .join('brand', 'clothing.brand_id', '=', 'brand.id')
    .join('style', 'clothing.style_id', '=', 'style.id')
    .join('condition', 'clothing.condition_id', '=', 'condition.id')
    .join('status', 'clothing.status_id', '=', 'status.id')
}

const getSingleItem = (db, id) => {
  return db('clothing')
    .select(
      'clothing.id as id',
      'clothing.photo1',
      'clothing.photo2',
      'clothing.description',
      'status.id as status_id',
      'size.description as size_description',
      'brand.description as brand_description',
      'style.description as style_description',
      'condition.description as condition_description',
      'status.description as status_description')

    .join('size', 'clothing.size_id', '=', 'size.id')
    .join('brand', 'clothing.brand_id', '=', 'brand.id')
    .join('status', 'clothing.status_id', '=', 'status.id')
    .join('style', 'clothing.style_id', '=', 'style.id')
    .join('condition', 'clothing.condition_id', '=', 'condition.id')
    .where('clothing.id', id)
    .first()
}

module.exports = {
  getClothing,
  getSingleItem
}
