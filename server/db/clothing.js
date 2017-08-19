const getClothing = (db) => {
  return db('clothing')
    .select(
      'clothing.id as id',
      'clothing.photo1',
      'clothing.photo2',
      'clothing.title as title',
      'clothing.description as description',
      'size.description as size_description',
      'brand.description as brand_description',
      'style.description as style_description',
      'condition.description as condition_description')
    .join('size', 'clothing.size_id', '=', 'size.id')
    .join('brand', 'clothing.brand_id', '=', 'brand.id')
    .join('style', 'clothing.style_id', '=', 'style.id')
    .join('condition', 'clothing.condition_id', '=', 'condition.id')
    .join('status', 'clothing.status_id', '=', 'status.id')
    .where('status.description', 'In')
}

const getSingleItem = (db, id) => {
  return db('clothing')
    .select(
      'clothing.id as id',
      'clothing.title as title',
      'clothing.photo1',
      'clothing.photo2',
      'clothing.title as title',
      'clothing.description as description',
      'size.description as size_description',
      'brand.description as brand_description',
      'style.description as style_description',
      'condition.description as condition_description')
    .join('size', 'clothing.size_id', '=', 'size.id')
    .join('brand', 'clothing.brand_id', '=', 'brand.id')
    .join('status', 'clothing.status_id', '=', 'status.id')
    .join('style', 'clothing.style_id', '=', 'style.id')
    .join('condition', 'clothing.condition_id', '=', 'condition.id')
    .where('clothing.id', id)
    .where('status.description', 'In')
    .first()
}

const addNewClothingItem = (db, item) => {
  return db('clothing').insert(item)
}


module.exports = {
  getClothing,
  getSingleItem,
  addNewClothingItem
}
