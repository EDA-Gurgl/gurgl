const getFavouritesByUser = (db, userId) => {
  return db('favourites')
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
    .join('clothing', 'favourites.clothing_id', '=', 'clothing.id')
    .join('size', 'clothing.size_id', '=', 'size.id')
    .join('brand', 'clothing.brand_id', '=', 'brand.id')
    .join('status', 'clothing.status_id', '=', 'status.id')
    .join('style', 'clothing.style_id', '=', 'style.id')
    .join('condition', 'clothing.condition_id', '=', 'condition.id')
    .where('favourites.user_id', userId)
    .where('status.description', 'In')
    .orderBy('favourites.favourited_on', 'desc')
}

const deleteFavourite = (db, userId, clothingId) => {
  return db('favourites')
    .where('favourites.clothing_id', clothingId)
    .where('favourites.user_id', userId)
    .del()
}

const addFavourite = (db, user_id, clothing_id) => {
  return db('favourites')
    .insert({
      user_id,
      clothing_id
    })
}

module.exports = {
  getFavouritesByUser,
  deleteFavourite,
  addFavourite
}
